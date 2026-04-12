#!/usr/bin/env python3

import json
import math
import sys
from pathlib import Path

from fontTools.fontBuilder import FontBuilder
from fontTools.pens.recordingPen import RecordingPen
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.svgLib.path import parse_path
from fontTools.ttLib import TTFont
from shapely.geometry import LineString, MultiPolygon, Polygon
from shapely.geometry.polygon import orient
from shapely.ops import unary_union


UPM = 1000
ASCENT = 860
DESCENT = -140
ROLE_CONFIG = {
    "determinative": {
        "x_scale": 6.35,
        "y_scale": 7.4,
        "stroke_width": 8.0,
        "left_bearing": 34,
        "right_bearing": 28,
        "y_origin": 930
    },
    "consonant": {
        "x_scale": 5.1,
        "y_scale": 6.0,
        "stroke_width": 8.0,
        "left_bearing": 24,
        "right_bearing": 18,
        "y_origin": 900
    },
    "vowel": {
        "x_scale": 3.35,
        "y_scale": 5.0,
        "stroke_width": 7.0,
        "left_bearing": 8,
        "right_bearing": 8,
        "y_origin": 872
    }
}


def cubic_point(p0, p1, p2, p3, t):
    mt = 1.0 - t
    return (
        mt**3 * p0[0] + 3 * mt**2 * t * p1[0] + 3 * mt * t**2 * p2[0] + t**3 * p3[0],
        mt**3 * p0[1] + 3 * mt**2 * t * p1[1] + 3 * mt * t**2 * p2[1] + t**3 * p3[1]
    )


def quadratic_point(p0, p1, p2, t):
    mt = 1.0 - t
    return (
        mt**2 * p0[0] + 2 * mt * t * p1[0] + t**2 * p2[0],
        mt**2 * p0[1] + 2 * mt * t * p1[1] + t**2 * p2[1]
    )


def path_to_lines(path_data):
    pen = RecordingPen()
    parse_path(path_data, pen)

    lines = []
    current = None
    start = None
    points = []

    for operator, args in pen.value:
        if operator == "moveTo":
            if len(points) > 1:
                lines.append(LineString(points))
            current = args[0]
            start = current
            points = [current]
        elif operator == "lineTo":
            current = args[0]
            points.append(current)
        elif operator == "curveTo":
            p0 = current
            p1, p2, p3 = args
            for index in range(1, 19):
                points.append(cubic_point(p0, p1, p2, p3, index / 18))
            current = p3
        elif operator == "qCurveTo":
            p0 = current
            p1, p2 = args
            for index in range(1, 15):
                points.append(quadratic_point(p0, p1, p2, index / 14))
            current = p2
        elif operator == "closePath":
            if start and points[-1] != start:
                points.append(start)
            if len(points) > 1:
                lines.append(LineString(points))
            current = None
            start = None
            points = []
        elif operator == "endPath":
            if len(points) > 1:
                lines.append(LineString(points))
            current = None
            start = None
            points = []

    if len(points) > 1:
        lines.append(LineString(points))

    return lines


def glyph_geometry(glyph):
    config = ROLE_CONFIG[glyph["phonetic_role"]]
    stroke_radius = config["stroke_width"] / 2.0
    stroked_parts = []

    for path_data in glyph.get("formal_paths", []):
        for line in path_to_lines(path_data):
            stroked_parts.append(
                line.buffer(
                    stroke_radius,
                    cap_style=1,
                    join_style=1,
                    resolution=8
                )
            )

    if not stroked_parts:
        return None

    merged = unary_union(stroked_parts)
    return merged.simplify(0.12, preserve_topology=True)


def iter_polygons(geometry):
    if geometry is None or geometry.is_empty:
        return []
    if isinstance(geometry, Polygon):
        return [geometry]
    if isinstance(geometry, MultiPolygon):
        return list(geometry.geoms)
    return [part for part in getattr(geometry, "geoms", []) if isinstance(part, Polygon)]


def transform_point(point, config):
    x_scale = config["x_scale"]
    y_scale = config["y_scale"]
    return (
        int(round(point[0] * x_scale + config["left_bearing"])),
        int(round(config["y_origin"] - point[1] * y_scale))
    )


def draw_ring(pen, coordinates, config):
    points = [transform_point(point, config) for point in coordinates[:-1]]
    if len(points) < 3:
        return
    pen.moveTo(points[0])
    for point in points[1:]:
        pen.lineTo(point)
    pen.closePath()


def glyph_from_geometry(geometry, config):
    pen = TTGlyphPen(None)
    polygons = [orient(polygon, sign=-1.0) for polygon in iter_polygons(geometry)]

    for polygon in polygons:
        draw_ring(pen, list(polygon.exterior.coords), config)
        for interior in polygon.interiors:
            draw_ring(pen, list(interior.coords), config)

    return pen.glyph()


def glyph_bounds(geometry, config):
    min_x, min_y, max_x, max_y = geometry.bounds
    transformed_min_x, transformed_max_y = transform_point((min_x, min_y), config)
    transformed_max_x, transformed_min_y = transform_point((max_x, max_y), config)
    left = min(transformed_min_x, transformed_max_x)
    right = max(transformed_min_x, transformed_max_x)
    bottom = min(transformed_min_y, transformed_max_y)
    top = max(transformed_min_y, transformed_max_y)
    return left, bottom, right, top


def notdef_glyph():
    pen = TTGlyphPen(None)
    pen.moveTo((80, -40))
    pen.lineTo((80, 780))
    pen.lineTo((620, 780))
    pen.lineTo((620, -40))
    pen.closePath()
    pen.moveTo((160, 60))
    pen.lineTo((540, 60))
    pen.lineTo((540, 680))
    pen.lineTo((160, 680))
    pen.closePath()
    return pen.glyph()


def build_font(glyphs, output_ttf, output_woff2):
    glyph_order = [".notdef", "space"]
    glyph_map = {
        ".notdef": notdef_glyph(),
        "space": TTGlyphPen(None).glyph()
    }
    metrics = {
        ".notdef": (700, 0),
        "space": (320, 0)
    }
    cmap = {
        0x20: "space"
    }

    for glyph in glyphs:
        symbol = glyph.get("fallback_symbol", "")
        if len(symbol) != 1:
            continue

        config = ROLE_CONFIG[glyph["phonetic_role"]]
        geometry = glyph_geometry(glyph)
        if geometry is None or geometry.is_empty:
            continue

        glyph_name = f"g_{glyph['id'].replace('-', '_')}"
        glyph_order.append(glyph_name)
        glyph_map[glyph_name] = glyph_from_geometry(geometry, config)

        left, _, right, _ = glyph_bounds(geometry, config)
        advance = max(int(math.ceil(right + config["right_bearing"])), left + 36)
        metrics[glyph_name] = (advance, left)
        cmap[ord(symbol)] = glyph_name

    fb = FontBuilder(UPM, isTTF=True)
    fb.setupGlyphOrder(glyph_order)
    fb.setupCharacterMap(cmap)
    fb.setupGlyf(glyph_map)
    fb.setupHorizontalMetrics(metrics)
    fb.setupHorizontalHeader(ascent=ASCENT, descent=DESCENT, lineGap=70)
    fb.setupNameTable(
        {
            "familyName": "Neral Glyphic",
            "styleName": "Regular",
            "fullName": "Neral Glyphic Regular",
            "psName": "NeralGlyphic-Regular"
        }
    )
    fb.setupOS2(
        sTypoAscender=ASCENT,
        sTypoDescender=DESCENT,
        usWinAscent=ASCENT,
        usWinDescent=abs(DESCENT)
    )
    fb.setupPost(keepGlyphNames=True)
    fb.setupMaxp()
    fb.save(str(output_ttf))

    font = TTFont(str(output_ttf))
    font.flavor = "woff2"
    font.save(str(output_woff2))


def main():
    if len(sys.argv) != 3:
        raise SystemExit("usage: build-language-font.py <output-ttf> <output-woff2>")

    glyphs = json.load(sys.stdin)
    output_ttf = Path(sys.argv[1])
    output_woff2 = Path(sys.argv[2])
    output_ttf.parent.mkdir(parents=True, exist_ok=True)
    output_woff2.parent.mkdir(parents=True, exist_ok=True)
    build_font(glyphs, output_ttf, output_woff2)
    print(f"built {output_ttf.name} and {output_woff2.name}")


if __name__ == "__main__":
    main()
