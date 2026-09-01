#!/usr/bin/env python3
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
OG = PUBLIC / "og"
BRAND = PUBLIC / "brand"
SRC = Path("/tmp/ss-assets")

OG.mkdir(parents=True, exist_ok=True)
BRAND.mkdir(parents=True, exist_ok=True)

for name in (
    "fox-mark-arrow.png",
    "week-ahead-2026-09-01-calendar.png",
    "week-ahead-2026-09-01-echo-vs-tape.png",
):
    dest = BRAND / name
    dest.write_bytes((SRC / name).read_bytes())

echo = SRC / "week-ahead-2026-09-01-echo-vs-tape.png"
(OG / "the-print-was-zero.png").write_bytes(echo.read_bytes())

W, H = 1200, 630
BG = (16, 18, 20)
MINT = (124, 255, 178)
OFF = (244, 245, 243)
MUTED = (154, 163, 160)
CARD = (22, 25, 28)

FONT_CANDIDATES = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf",
    "/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
]
MONO_CANDIDATES = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf",
    "/usr/share/fonts/truetype/liberation/LiberationMono-Regular.ttf",
]


def first_font(paths, size):
    for path in paths:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


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


def card(path, kicker, title, foot):
    img = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(img)
    draw.rectangle((0, 0, 14, H), fill=MINT)

    fox_path = BRAND / "fox-mark-arrow.png"
    fox = Image.open(fox_path).convert("RGBA").resize((72, 72))
    img.paste(fox, (56, 48), fox)

    title_font = first_font(FONT_CANDIDATES, 54)
    kicker_font = first_font(MONO_CANDIDATES, 22)
    foot_font = first_font(MONO_CANDIDATES, 20)
    brand_font = first_font(FONT_CANDIDATES, 28)

    draw.text((148, 62), "CosAnalyst", font=brand_font, fill=OFF)
    draw.text((148, 102), kicker, font=kicker_font, fill=MINT)

    lines = wrap(draw, title, title_font, 1040)
    y = 210
    for line in lines[:5]:
        draw.text((56, y), line, font=title_font, fill=OFF)
        y += 64

    draw.text((56, 560), foot, font=foot_font, fill=MUTED)
    img.save(path, "PNG", optimize=True)


cards = [
    (
        "home.png",
        "RESEARCH DESK · PUBLICATION",
        "The siren is not the desk.",
        "BOOK FACT · NOT A TICKET  ·  Publisher + AI-assisted",
    ),
    (
        "hormuz-larak-not-a-90-breakout.png",
        "COMMODITIES · 30 AUG 2026",
        "Hormuz / Larak is not a $90 $WTI breakout.",
        "2 launchers · 8 intercepted · oil is $WTI",
    ),
    (
        "qqq-0dte-close-vs-midday.png",
        "OPTIONS · GEX SNAPSHOT",
        "QQQ close vs the expired midday card.",
        "13:01:20 PT paused · net GEX +68.20M · midday -$222.07M expired",
    ),
    (
        "japan-10y-highest-since-1996.png",
        "MACRO · JAPAN 10Y",
        "Tokyo 2.950% vs TV 2.941%. Do not blend.",
        "Highest since Sep 1996 · BoJ 91% is a wager",
    ),
    (
        "no-warsh-tuesday.png",
        "MACRO · THIS WEEK'S TEST",
        "No Warsh Tuesday. Barr, then jobs.",
        "Blackout Sat Sep 5 · FOMC Sep 15-16 · FedWatch not pulled",
    ),
    (
        "wti-not-a-ticket.png",
        "COMMODITIES · AUG 31 CLOSE",
        "TV USOIL 86.17 is tape. Not a ticket.",
        "EIA Wed 10:30 ET · $WTI never $CL",
    ),
    (
        "robustness-is-the-edge.png",
        "RESEARCH · FRIDAY MAP",
        "XLV 95 is a ranking, not a prophecy.",
        "Robustness is the edge · no Market Brief auto-enroll",
    ),
    (
        "spy-friday-gamma.png",
        "OPTIONS · WEEKLY OPEX",
        "SPY Friday gamma: +$4.78B to -$0.93B.",
        "Spot ~769.35 · Cos does not print G-D+",
    ),
    (
        "717-flip-ism-jolts.png",
        "MARKETS · 1 SEP 2026",
        "QQQ closed 707.64. Nine handles under 717.",
        "Magnet 700 · Invalidation 717 · BOX 701.55-713.15 · NO TRADE",
    ),
]

for name, kicker, title, foot in cards:
    card(OG / name, kicker, title, foot)

print("og cards written")
