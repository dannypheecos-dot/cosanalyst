#!/usr/bin/env python3
"""CosAnalyst OG card for Wash to Repair — exact published numbers only."""

from math import cos, pi, sin
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "og" / "wash-to-repair-week-sep-5-11.png"

W, H = 1200, 630
BG = (8, 9, 11)
GOLD = (205, 172, 108)
GOLD_DIM = (164, 138, 86)
OFF = (246, 243, 234)
MUTED = (170, 162, 142)
GREEN = (58, 198, 96)
BRASS = (176, 142, 78)
BRASS_HI = (222, 192, 122)

SERIF_B = "/usr/share/fonts/truetype/noto/NotoSerif-Bold.ttf"
SANS = "/usr/share/fonts/truetype/macos/Inter-SemiBold.ttf"
SANS_B = "/usr/share/fonts/truetype/macos/Inter-Bold.ttf"


def fnt(path, size):
    return ImageFont.truetype(path, size)


def words(draw, x, y, text, font, fill, gap=22):
    for word in text.split(" "):
        draw.text((x, y), word, font=font, fill=fill)
        x += draw.textlength(word, font=font) + gap
    return x


def hex_mark(draw, cx, cy, r, color):
    pts = [
        (cx + r * cos(pi / 2 + i * pi / 3), cy + r * sin(pi / 2 + i * pi / 3))
        for i in range(6)
    ]
    draw.polygon(pts, outline=color, width=2)
    inner = [
        (cx + r * 0.42 * cos(i * pi / 3), cy + r * 0.42 * sin(i * pi / 3))
        for i in range(6)
    ]
    draw.polygon(inner, outline=color, width=2)


def vault(img):
    draw = ImageDraw.Draw(img)
    cx, cy = 992, 288
    draw.rectangle((838, 0, W, H), fill=(13, 14, 17))
    for r, width in ((198, 11), (170, 6), (140, 4), (96, 11), (40, 8)):
        draw.ellipse((cx - r, cy - r, cx + r, cy + r), outline=BRASS, width=width)
    for i in range(8):
        a = i * pi / 4
        draw.line(
            (cx + 48 * cos(a), cy + 48 * sin(a), cx + 162 * cos(a), cy + 162 * sin(a)),
            fill=BRASS,
            width=7,
        )
    draw.ellipse((cx - 24, cy - 24, cx + 24, cy + 24), fill=BRASS_HI)
    draw.ellipse((1000, 16, 1016, 32), fill=(232, 222, 192))
    glow = Image.new("RGBA", img.size, (0, 0, 0, 0))
    ImageDraw.Draw(glow).ellipse((930, -24, 1090, 88), fill=(255, 240, 200, 26))
    img.alpha_composite(glow)


def arrow(img):
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    d.arc((640, 268, 1008, 548), start=208, end=338, fill=(*GREEN, 255), width=8)
    d.polygon([(948, 276), (978, 252), (932, 250)], fill=(*GREEN, 255))
    img.alpha_composite(overlay)


def main():
    img = Image.new("RGBA", (W, H), (*BG, 255))
    vault(img)
    arrow(img)
    draw = ImageDraw.Draw(img)

    hex_mark(draw, 52, 50, 15, GOLD)
    draw.text((76, 36), "CosAnalyst", font=fnt(SERIF_B, 26), fill=GOLD)

    title = fnt(SERIF_B, 58)
    words(draw, 44, 112, "THE WASH IS IN", title, OFF, gap=20)
    words(draw, 44, 188, "NOW COMES THE", title, OFF, gap=20)
    words(draw, 44, 264, "REPAIR", title, OFF, gap=20)

    meta = fnt(SANS, 17)
    words(draw, 44, 392, "Week Sep 5–11", meta, GOLD, gap=8)
    words(draw, 248, 392, "SPY 770.19 → 764.29", meta, GOLD, gap=8)
    words(draw, 520, 392, "LOCK HIT 1–0–0", meta, GREEN, gap=8)

    shelf = fnt(SANS_B, 20)
    draw.text((1048, 188), "7700", font=shelf, fill=GOLD)
    draw.text((1048, 214), "OLD", font=fnt(SANS, 13), fill=GOLD_DIM)
    draw.text((1048, 232), "SHELF", font=fnt(SANS, 13), fill=GOLD_DIM)

    handle = fnt(SANS, 16)
    hw = draw.textlength("@CosAnalyst", font=handle)
    draw.text(((W - hw) / 2, 478), "@CosAnalyst", font=handle, fill=GOLD)

    foot = fnt(SANS, 13)
    label = "BOOK FACT  ·  NOT A TICKET  ·  WEEKEND RESEARCH"
    fw = draw.textlength(label, font=foot)
    draw.text(((W - fw) / 2, 564), label, font=foot, fill=MUTED)

    rgb = img.convert("RGB").filter(ImageFilter.UnsharpMask(radius=0.6, percent=80, threshold=2))
    OUT.parent.mkdir(parents=True, exist_ok=True)
    rgb.save(OUT, "PNG", optimize=True)
    print(f"wrote {OUT} {rgb.size}")


if __name__ == "__main__":
    main()
