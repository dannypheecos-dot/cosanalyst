#!/usr/bin/env python3
"""Fox Alerts project card, 1200x630, same frame as the article heroes.

Left panel type is drawn here so the words stay exact. The right-side
photograph is scripts/assets/fox-alerts-photo.jpg.
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PHOTO = ROOT / "scripts" / "assets" / "fox-alerts-photo.jpg"
FONT = ROOT / "scripts" / "assets" / "BarlowCondensed-Bold.ttf"
OUT = ROOT / "public" / "projects" / "fox-alerts.png"

W, H = 1200, 630
BLACK = (14, 14, 14)
CREAM = (243, 236, 216)
RED = (226, 40, 32)
MUTED = (196, 188, 170)


def crop_to_frame(src: Image.Image) -> Image.Image:
    image = src.convert("RGB")
    width, height = image.size
    target = W / H
    if width / height < target:
        new_h = int(round(width / target))
        top = (height - new_h) // 2
        image = image.crop((0, top, width, top + new_h))
    else:
        new_w = int(round(height * target))
        left = (width - new_w) // 2
        image = image.crop((left, 0, left + new_w, height))
    return image.resize((W, H), Image.Resampling.LANCZOS)


def tear_xs(image: Image.Image) -> list[float]:
    pixels = image.load()
    raw: list[int] = []
    for y in range(H):
        tear = 600
        for x in range(420, 780):
            red, green, blue = pixels[x, y]
            bright = red + green + blue > 90
            punch = red > 140 and green < 90 and blue < 90
            if bright and not punch:
                tear = x
                break
        raw.append(tear)
    smooth: list[float] = []
    for index, _ in enumerate(raw):
        window = raw[max(0, index - 2) : index + 3]
        smooth.append(sum(window) / len(window))
    return smooth


def tracked(draw: ImageDraw.ImageDraw, text: str, xy: tuple[int, int], font, fill, tracking: float) -> None:
    x, y = xy
    for char in text:
        draw.text((x, y), char, font=font, fill=fill)
        x += draw.textlength(char, font=font) + tracking


def main() -> None:
    if not PHOTO.exists():
        raise SystemExit(f"missing photograph: {PHOTO}")
    if not FONT.exists():
        raise SystemExit(f"missing font: {FONT}")

    image = crop_to_frame(Image.open(PHOTO))
    pixels = image.load()
    for y, tear in enumerate(tear_xs(image)):
        limit = int(tear) - 14
        for x in range(max(0, limit)):
            pixels[x, y] = BLACK

    draw = ImageDraw.Draw(image)
    headline = ImageFont.truetype(FONT, 92)
    punch = ImageFont.truetype(FONT, 40)
    brand = ImageFont.truetype(FONT, 22)
    handle = ImageFont.truetype(FONT, 20)

    draw.text((48, 78), "FOX ALERTS", font=headline, fill=CREAM)
    draw.text((48, 188), "Every trade gets a receipt.", font=punch, fill=RED)
    tracked(draw, "COSANALYST", (48, 548), brand, CREAM, 3.2)
    draw.text((48, 578), "@CosAnalyst", font=handle, fill=MUTED)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    image.save(OUT, "PNG", optimize=True)
    print(f"wrote {OUT}")


if __name__ == "__main__":
    main()
