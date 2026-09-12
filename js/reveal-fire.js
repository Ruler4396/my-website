// ===== 透明火焰揭示层（粒子篝火 · 静态文字版） =====
// 结构与原版圆形遮罩完全同构（aqsk.top v=20260507g），仅形状换成火焰：
//   底层：亮色面板（原版渐变 + 中心白辉光）+ 深色正文，静止不动；
//   指针处遮罩开洞——洞的形状 = 粒子火焰，洞里透出亮面板和字。
// 粒子（30Hz，约 130 枚）只提供"洞"的形状：浮升、摇曳、生灭，
//   白色斑痕的 alpha 并集经陡化后就是火焰轮廓，不着色、不加亮度。
// 文字画布钉在页面坐标上，每帧整幅 1:1 合成——遮罩动、字永不动，
//   因此没有重采样，也就没有抖动。

window.RevealFire = (function () {
    "use strict";

    const SIM_W = 104;
    const SIM_H = 132;
    const TICK_MS = 1000 / 30;
    const DPR_CAP = 1.5;
    const BASE_ANCHOR = 0.85;   // 火焰底部锚在指针处，火向上烧
    const REST_X = 0.24;
    const REST_Y = 0.46;
    const PREBURN_TICKS = 130;
    const MASK_EASE = 0.7;      // 遮罩位置的轻微平滑（对应原版 80ms 过渡的手感）

    // 粒子群参数
    const P_COUNT = 130;
    const BASE_SPREAD = 0.27;   // 火基宽度（占网格宽比例）
    const FADE_PER_TICK = 0.21;  // 旧痕迹擦淡比例（短尾巴：火苗即灭即生，不留烟）
    const TRAIL_MAX = 40;       // 拖尾粒子池上限（计划B）
    const FAN_THRESHOLD = 260;  // 触发拖尾/增益的指针速度阈值（px/s）

    // 面板/辉光/文字：逐项对齐线上原版（aqsk.top v=20260507g 的圆形遮罩参数）。
    // 深色主题：月光面板（浅色渐变 + 深字）；浅色主题：墨色面板（深色渐变 + 浅字）。
    const PANEL = {
        dark: ["#edf3f6", "#cbd6de", "#aebdc8"],
        light: ["#0f1418", "#171d22", "#101820"]
    };
    const GLOW_ALPHA = { dark: 0.29, light: 0.19 };
    const WORD_INK = { dark: "#101820", light: "#eef2f4" };
    const WORD_RULE = { dark: "rgba(15, 23, 30, 0.2)", light: "rgba(226, 232, 236, 0.16)" };

    const FONT_STACK = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans SC", "Source Han Sans SC", "Microsoft YaHei UI", "Microsoft YaHei", "PingFang SC", sans-serif';

    // 正文行布局：与原版逐一对应（x% 锚点 / 行宽 vw / 字号层级）
    const ROW_COUNT = 18;
    const ROW_X = [0, -10, 8, -16, 13, -5, 17, -12, 5];
    const ROW_W = [118, 106, 112, 124, 102, 116];
    const ROW_SCALE = [
        { size: 1, weight: 400 },
        { size: 1.05, weight: 400 },
        { size: 1.22, weight: 620 },
        { size: 1, weight: 400 },
        { size: 1.16, weight: 400 },
        { size: 1.05, weight: 400 }
    ];

    let field = null;
    let flarePos = null;
    let canvas = null;
    let ctx = null;

    // 低分辨率火焰 alpha 场（只做形状，不上屏）
    const simCanvas = document.createElement("canvas");
    simCanvas.width = SIM_W;
    simCanvas.height = SIM_H;
    const simCtx = simCanvas.getContext("2d", { willReadFrequently: true });

    // 软斑精灵：白色径向渐变，粒子只贡献 alpha
    const SPRITE = 64;
    const sprite = document.createElement("canvas");
    sprite.width = SPRITE;
    sprite.height = SPRITE;
    (function () {
        const sc = sprite.getContext("2d");
        const grad = sc.createRadialGradient(SPRITE / 2, SPRITE / 2, 0, SPRITE / 2, SPRITE / 2, SPRITE / 2);
        grad.addColorStop(0, "rgba(255, 255, 255, 0.85)");
        grad.addColorStop(0.42, "rgba(255, 255, 255, 0.3)");
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");
        sc.fillStyle = grad;
        sc.fillRect(0, 0, SPRITE, SPRITE);
    })();

    const particles = [];
    for (let i = 0; i < P_COUNT; i += 1) {
        particles.push({ x: 0, y: 0, vx: 0, vy: 0, size: 0, life: 1, max: 1, phase: 0, wob: 0 });
    }

    // 正文字画布：钉在页面坐标上，静止；火焰只是移动的裁切模板
    const textCanvas = document.createElement("canvas");
    const textCtx = textCanvas.getContext("2d");

    let reduceMotion = false;
    let running = false;
    let rafId = 0;
    let lastTickAt = 0;
    let lastFrameTs = 0;
    let simClock = Math.random() * 100;
    let energy = 0;
    let fieldW = 0;
    let fieldH = 0;
    let flameW = 0;
    let flameH = 0;
    let dpr = 1;
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;
    let windMouse = 0;
    let flow = 0;               // 指针速度的惯性平滑值（px/s，带方向）
    let flowBoost = 0;          // 0..1 速度增益（A：能量/高度/倾斜耦合）
    let spawnDebt = 0;
    let trail = [];             // 拖尾粒子池（B）
    let lastTargetX = 0;
    let sentences = [];
    let panelTheme = "dark";
    let mounted = false;
    let resizeTimer = 0;
    let debugClock = performance.now();

    function isDark() {
        return document.documentElement.hasAttribute("data-theme");
    }

    // ── 粒子群（只负责火焰形状） ──────────────────────────
    function spawn(p) {
        p.x = SIM_W / 2 + (Math.random() - 0.5) * SIM_W * BASE_SPREAD;
        p.y = SIM_H - 2 - Math.random() * 8;
        p.vx = (Math.random() - 0.5) * 0.24 - flow * (SIM_W / flameW) / 1000 * TICK_MS * 0.06;
        p.vy = 1.05 + Math.random() * 0.65;
        p.size = 7 + Math.random() * 9;
        p.max = 30 + Math.random() * 24;
        p.life = 0;
        p.phase = Math.random() * Math.PI * 2;
        p.wob = 0.8 + Math.random() * 1.8;
    }

    function tick() {
        simClock += TICK_MS / 1000;
        energy += (1 - energy) * 0.035;
        const axis = SIM_W / 2 + windMouse * 1.2;
        // 惯性倾斜：火舌向运动反方向拖尾（运枪带火的感觉）
        const lean = Math.max(-2.2, Math.min(2.2, -flow * 0.0045));
        // 运枪带火：指针移动时气流相对火焰反向流动——
        // 火根跟手、越靠火梢被"拖"得越远（dragWind 单位：格/帧）
        const cellsPerPx = SIM_W / flameW;
        const dragWind = Math.max(-2.6, Math.min(2.6, -flow * cellsPerPx / 1000 * TICK_MS * 0.6));

        // 运动模糊：旧 alpha 按比例擦掉，粒子流因此连续
        simCtx.globalCompositeOperation = "destination-out";
        simCtx.fillStyle = `rgba(0, 0, 0, ${FADE_PER_TICK})`;
        simCtx.fillRect(0, 0, SIM_W, SIM_H);
        simCtx.globalCompositeOperation = "lighter";

        for (const p of particles) {
            p.life += 1;
            if (p.life >= p.max) {
                spawn(p);
            }
            const t = p.life / p.max;
            // 浮力推进 + 每粒子正弦摇曳 + 向中轴收拢（火柱不散、不甩烟絮）
            p.vy = Math.min(2.4 + flowBoost * 0.7, p.vy + 0.02);
            p.vx += Math.sin(simClock * p.wob + p.phase) * 0.05 + (axis - p.x) * (t > 0.35 ? 0.0032 : 0);
            p.vx *= 0.985;
            p.x += p.vx + windMouse * 0.18 + dragWind * (0.22 + 0.78 * t);
            p.y -= p.vy;
            if (p.y < -p.size) {
                spawn(p);
                continue;
            }
            // 生命期包络：快速淡入、线性渐熄；尺寸中段最宽（泪滴轮廓）
            const env = Math.min(1, p.life / 5) * Math.pow(1 - t, 1.1);
            const s = p.size * (0.5 + 0.5 * Math.sin(Math.PI * Math.min(1, t * 1.12)));
            simCtx.globalAlpha = Math.min(1, env * energy * 0.28 * (1 + flowBoost * 0.45));
            // 竖向拉伸 1.45 倍：火舌被气流拉长的形态，而不是圆团
            simCtx.drawImage(sprite, p.x - s * (0.5 + flowBoost * 0.09), p.y - s * 0.72, s * (1 + flowBoost * 0.18), s * 1.45);
        }

        // 计划B：快速移动时喷出顺速度反方向的拖尾火舌
        if (Math.abs(flow) > FAN_THRESHOLD && trail.length < TRAIL_MAX) {
            spawnDebt += Math.min(3, Math.abs(flow) / 850);
            const cellsPerPx = SIM_W / flameW;
            while (spawnDebt >= 1 && trail.length < TRAIL_MAX) {
                spawnDebt -= 1;
                trail.push({
                    x: SIM_W / 2 + (Math.random() - 0.5) * SIM_W * 0.2,
                    y: SIM_H - 4 - Math.random() * 12,
                    vx: Math.max(-3, Math.min(3, (-flow * cellsPerPx / 1000) * TICK_MS * 0.55)) + (Math.random() - 0.5) * 0.3,
                    vy: 0.4 + Math.random() * 0.6,
                    size: 4 + Math.random() * 6,
                    life: 0,
                    max: 10 + Math.random() * 8
                });
            }
        }
        for (let i = trail.length - 1; i >= 0; i -= 1) {
            const p = trail[i];
            p.life += 1;
            if (p.life >= p.max || p.y < -p.size) {
                trail.splice(i, 1);
                continue;
            }
            const t = p.life / p.max;
            p.x += p.vx - Math.sign(flow) * 0.02;
            p.y -= p.vy;
            const env = Math.pow(1 - t, 1.1);
            const ts2 = p.size * (0.5 + 0.5 * Math.sin(Math.PI * Math.min(1, t * 1.1)));
            simCtx.globalAlpha = env * 0.24;
            simCtx.drawImage(sprite, p.x - ts2 / 2, p.y - ts2 * 0.7, ts2, ts2 * 1.35);
        }
        simCtx.globalAlpha = 1;
        simCtx.globalCompositeOperation = "source-over";

        // 陡化 alpha：边界明确（内核饱和、边缘快速收束），且火梢随高度衰减透明——
        // 底部实、顶部虚，是火的层次；均匀半透明是烟的层次
        const img = simCtx.getImageData(0, 0, SIM_W, SIM_H);
        const d = img.data;
        for (let y = 0; y < SIM_H; y += 1) {
            const up = 1 - y / (SIM_H - 1);
            const tipFade = 1 - up * 0.22;
            for (let x = 0; x < SIM_W; x += 1) {
                const i = (y * SIM_W + x) * 4 + 3;
                const a = d[i];
                if (a > 4) {
                    let v = a / 255;
                    v = Math.pow(v, 1.4) * 1.2 * tipFade;
                    d[i] = (Math.min(1, v) * 255) | 0;
                } else {
                    d[i] = 0;
                }
            }
        }
        simCtx.putImageData(img, 0, 0);
    }

    // ── 合成（结构同原版，洞的形状 = 火焰） ────────────────
    //   1. 面板：原版渐变（坐标对齐整场，135°），只画在火焰矩形里；
    //   2. 中心白辉光（原版 --torch-glow）；
    //   3. destination-in 火焰 alpha → 面板被裁成火焰形状；
    //   4. source-atop 整幅正文字 → 深色字只在火焰范围内显形。
    // 文字画布静止且整幅 1:1 绘制，没有任何重采样。
    function render() {
        if (!ctx) {
            return;
        }
        const cw = canvas.width;
        const chh = canvas.height;
        const rx = (curX - flameW / 2) * dpr;
        const ry = (curY - flameH * BASE_ANCHOR) * dpr;
        const rw = flameW * dpr;
        const rh = flameH * dpr;

        ctx.globalCompositeOperation = "source-over";
        ctx.clearRect(0, 0, cw, chh);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        // 1) 面板：渐变铺满整场坐标（与原版 135° 全场渐变同位），只取火焰矩形
        const pal = PANEL[panelTheme];
        const grad = ctx.createLinearGradient(0, 0, cw, chh);
        grad.addColorStop(0, pal[0]);
        grad.addColorStop(0.58, pal[1]);
        grad.addColorStop(1, pal[2]);
        ctx.fillStyle = grad;
        ctx.fillRect(rx, ry, rw, rh);

        // 2) 中心白辉光：火心中部最亮（原版 --torch-glow 圆心即指针处）
        const glow = ctx.createRadialGradient(
            rx + rw / 2, ry + rh * 0.55, 0,
            rx + rw / 2, ry + rh * 0.55, rw * 0.44
        );
        glow.addColorStop(0, `rgba(255, 255, 255, ${GLOW_ALPHA[panelTheme] + 0.1})`);
        glow.addColorStop(0.55, `rgba(255, 255, 255, ${GLOW_ALPHA[panelTheme] * 0.5})`);
        glow.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = glow;
        ctx.fillRect(rx, ry, rw, rh);

        // 3) 裁切成火焰形状
        ctx.globalCompositeOperation = "destination-in";
        ctx.drawImage(simCanvas, rx, ry, rw, rh);

        // 4) 正文字：整幅 1:1，深色字只显在火焰范围内
        if (sentences.length && textCanvas.width > 0) {
            ctx.globalCompositeOperation = "source-atop";
            ctx.drawImage(textCanvas, 0, 0);
        }
        ctx.globalCompositeOperation = "source-over";
    }

    // 正文预渲染：整场一张画布，钉在页面坐标上，静止
    function renderText() {
        if (!field) {
            return;
        }
        const rect = field.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        textCanvas.width = Math.max(1, Math.round(width * dpr));
        textCanvas.height = Math.max(1, Math.round(height * dpr));
        if (!sentences.length) {
            return;
        }
        textCtx.scale(dpr, dpr);
        const ink = WORD_INK[panelTheme];
        const base = Math.min(19, Math.max(15, width * 0.0105));
        textCtx.textBaseline = "middle";
        for (let i = 0; i < ROW_COUNT; i += 1) {
            const x = 50 + ROW_X[i % 9];
            const yPct = 5.5 + i * 5.25;
            const rowW = (ROW_W[i % 6] / 100) * width;
            const scale = ROW_SCALE[i % 6];
            let alpha = 1;
            if (i % 3 === 0) {
                alpha = 0.86;
            } else if (i % 4 === 3) {
                alpha = 0.78;
            } else if (i % 6 === 0) {
                alpha = 0.74;
            }
            const text = Array.from({ length: 8 }, (_, slot) =>
                sentences[(i * 5 + slot * 3) % sentences.length]
            ).join("     ");
            const startX = (x / 100) * width - rowW / 2;
            const y = (yPct / 100) * height;
            const size = base * scale.size;
            textCtx.font = `${scale.weight} ${size.toFixed(1)}px ${FONT_STACK}`;
            textCtx.globalAlpha = alpha;
            textCtx.fillStyle = ink;
            textCtx.fillText(text, startX, y);
            textCtx.globalAlpha = 1;
            textCtx.fillStyle = WORD_RULE[panelTheme];
            textCtx.fillRect(startX, y + size * 0.65 + 4, rowW, 1);
        }
        textCtx.globalAlpha = 1;
    }

    // ── 指针与遮罩位置 ────────────────────────────────────
    function setTarget(clientX, clientY) {
        const rect = field.getBoundingClientRect();
        targetX = clientX - rect.left;
        targetY = clientY - rect.top;
    }

    function park(instant) {
        const rect = field.getBoundingClientRect();
        setTarget(rect.left + rect.width * REST_X, rect.top + rect.height * REST_Y);
        if (instant) {
            curX = targetX;
            curY = targetY;
        }
        flow = 0;
        flowBoost = 0;
        trail.length = 0;
    }

    // ── 主循环 ────────────────────────────────────────────
    // 一帧 = 遮罩缓动/惯性更新 + 30Hz 模拟 + 合成
    function stepFrame(dt, ts) {
        // 文字是静止的，遮罩位置做轻微平滑不影响字的稳定（原版 80ms 过渡的手感）
        const k = 1 - Math.pow(1 - MASK_EASE, dt / 16.7);
        curX += (targetX - curX) * k;
        curY += (targetY - curY) * k;

        // 惯性：指针速度快攻慢放——快速划过时火被"带"起来，停手后余势缓缓回落
        const dtSec = dt / 1000;
        const tvx = dtSec > 0 ? (targetX - lastTargetX) / dtSec : 0;
        lastTargetX = targetX;
        const followK = Math.abs(tvx) > Math.abs(flow)
            ? 1 - Math.pow(0.5, dt / 16.7)
            : 1 - Math.pow(0.9, dt / 16.7);
        flow += (tvx - flow) * followK;
        flowBoost = Math.min(1, Math.abs(flow) / 1100);
        windMouse += (Math.max(-0.9, Math.min(0.9, flow * 0.0012)) - windMouse) * 0.06;

        // 后台/滚回时丢弃积压帧：火焰绝不快进（修复回首屏瞬间加速的问题）
        if (ts - lastTickAt > 250) {
            lastTickAt = ts - TICK_MS;
        }
        if (ts - lastTickAt >= TICK_MS) {
            const steps = Math.min(2, Math.max(1, Math.floor((ts - lastTickAt) / TICK_MS)));
            for (let i = 0; i < steps; i += 1) {
                tick();
            }
            lastTickAt += steps * TICK_MS;
            render();
        }
    }

    function frame(ts) {
        if (!running) {
            return;
        }
        rafId = requestAnimationFrame(frame);
        const dt = lastFrameTs ? Math.min(50, ts - lastFrameTs) : 16.7;
        lastFrameTs = ts;
        stepFrame(dt, ts);
    }

    function start() {
        if (running || reduceMotion || !ctx) {
            return;
        }
        running = true;
        lastTickAt = 0;
        lastFrameTs = 0;
        canvas.classList.add("is-lit");
        rafId = requestAnimationFrame(frame);
    }

    function stop() {
        running = false;
        if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = 0;
        }
    }

    function measure() {
        const rect = field.getBoundingClientRect();
        fieldW = rect.width;
        fieldH = rect.height;
        dpr = Math.min(DPR_CAP, window.devicePixelRatio || 1);
        canvas.width = Math.max(1, Math.round(fieldW * dpr));
        canvas.height = Math.max(1, Math.round(fieldH * dpr));
        // 火焰显示尺寸：高度贴近首屏高度，宽度按网格纵横比反推
        flameH = Math.min(700, Math.max(320, fieldH * 1.08));
        flameW = flameH * (SIM_W / SIM_H);
    }

    // ── 静态降级（reduced-motion）：预烧到稳态后定格，不循环 ──
    function renderStatic() {
        energy = 1;
        for (let i = 0; i < PREBURN_TICKS; i += 1) {
            tick();
        }
        park(true);
        render();
        canvas.classList.add("is-lit");
    }

    const themeObserver = new MutationObserver(() => {
        panelTheme = isDark() ? "dark" : "light";
        if (!mounted) {
            return;
        }
        renderText();
        if (reduceMotion) {
            renderStatic();
        }
    });

    function scheduleResize() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (!mounted) {
                return;
            }
            measure();
            renderText();
            reclampTarget();
            if (reduceMotion) {
                renderStatic();
            }
        }, 160);
    }

    function reclampTarget() {
        targetX = Math.min(Math.max(targetX, 0), fieldW);
        targetY = Math.min(Math.max(targetY, 0), fieldH);
    }

    // ── 对外接口 ──────────────────────────────────────────
    function mount(opts) {
        field = opts.field;
        flarePos = opts.flarePos;
        canvas = flarePos.querySelector(".fire-canvas");
        if (!field || !flarePos || !canvas) {
            return;
        }
        ctx = canvas.getContext("2d");
        if (!ctx) {
            return;
        }
        mounted = true;
        reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        panelTheme = isDark() ? "dark" : "light";
        measure();
        renderText();

        themeObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["data-theme"]
        });
        window.addEventListener("resize", scheduleResize);

        if (reduceMotion) {
            renderStatic();
            return;
        }

        park(true);
        const onPointer = (event) => setTarget(event.clientX, event.clientY);
        field.addEventListener("pointermove", onPointer);
        field.addEventListener("pointerenter", onPointer);
        field.addEventListener("pointerleave", () => park(false));

        const visibility = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    start();
                } else {
                    stop();
                }
            }
        }, { threshold: 0 });
        visibility.observe(field);
    }

    function setSentences(list) {
        if (Array.isArray(list) && list.length) {
            sentences = list;
        } else if (!sentences.length) {
            sentences = ["把内容从装饰里剥离出来。", "索引不是答案，是入口。", "文字需要反复经过。"];
        }
        if (mounted) {
            renderText();
            if (reduceMotion) {
                renderStatic();
            }
        }
    }

    return {
        mount,
        setSentences,
        // 调试用：在 rAF 被节流的环境（隐藏面板/无头）里手动推进模拟并渲染
        debug: {
            step(frames) {
                const n = Math.max(1, Math.min(600, frames | 0));
                for (let i = 0; i < n; i += 1) {
                    debugClock += TICK_MS;
                    stepFrame(TICK_MS, debugClock);
                }
            },
            state() {
                return { mounted, running, reduceMotion, fieldW, fieldH, flameW, flameH, energy, curX, curY };
            }
        }
    };
})();
