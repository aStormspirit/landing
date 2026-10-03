"""Cut out the portrait background and rebuild the OG preview image."""

from pathlib import Path

from PIL import Image
from rembg import remove

src = Path("public/avatar.png")
img = Image.open(src).convert("RGBA")
cut = remove(img)

pixels = cut.load()
w, h = cut.size
for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        if a == 0:
            continue
        # Drop near-transparent fringe and dark edge leftovers from the cutout.
        if a < 40 or (
            a < 200
            and r < 40
            and g < 40
            and b < 50
            and (x < 40 or x > w - 40 or y > h - 80)
        ):
            pixels[x, y] = (0, 0, 0, 0)

cut.save(src, "PNG")
print("saved transparent avatar", cut.size, cut.mode)

# OG preview 1200x630 with photo centered on dark brand bg
W, H = 1200, 630
bg = Image.new("RGBA", (W, H), (19, 19, 19, 255))

portrait = cut.copy()
target_h = 520
ratio = target_h / portrait.height
target_w = int(portrait.width * ratio)
portrait = portrait.resize((target_w, target_h), Image.Resampling.LANCZOS)
x = (W - target_w) // 2
y = (H - target_h) // 2
bg.paste(portrait, (x, y), portrait)
bg.convert("RGB").save("public/og-image.png", "PNG")
print("saved og-image.png")
