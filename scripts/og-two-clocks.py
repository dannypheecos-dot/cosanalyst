#!/usr/bin/env python3
"""CosAnalyst OG card — Two clocks, one Friday. Exact published facts only."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "og" / "two-clocks-triple-witching-sp-rebalance-sep-2026.png"

W, H = 1200, 630
BG = (16, 18, 20)
MINT = (124, 255, 178)
OFF = (244, 245, 243)
MUTED = (154, 163, 160)

SERIF = "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf"
MONO = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf"


def fnt(path, size):
    return ImageFont.truetype(path, size)


def wrap(draw, text, font, max_width):
    words = text.split()
    lines = []
    current = ""
    for word in words:
        trial = f"{current} {word}".strip()
        if draw.textlength(trial, font=font) <= max_width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def main():
    img = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(img)
    draw.rectangle((0, 0, 14, H), fill=MINT)

    title_font = fnt(SERIF, 48)
    kicker_font = fnt(MONO, 20)
    brand_font = fnt(SERIF, 28)
    foot_font = fnt(MONO, 18)

    draw.text((56, 56), "CosAnalyst", font=brand_font, fill=OFF)
    draw.text((56, 102), "MARKET NOTE  ·  17 SEP 2026", font=kicker_font, fill=MINT)

    title = "Two clocks, one Friday: triple witching and the S&P rebalance"
    y = 200
    for line in wrap(draw, title, title_font, 1080)[:4]:
        draw.text((56, y), line, font=title_font, fill=OFF)
        y += 62

    draw.text(
        (56, 430),
        "Fri Sep 18 triple witching  ·  S&P roster Mon Sep 21 open",
        font=foot_font,
        fill=MINT,
    )
    draw.text(
        (56, 560),
        "BOOK FACT  ·  NOT A TICKET  ·  QQQ 705  ·  SPY 764.29",
        font=foot_font,
        fill=MUTED,
    )

    OUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUT, "PNG", optimize=True)
    print(f"wrote {OUT} {img.size}")


if __name__ == "__main__":
    main()
