import os
from PIL import Image, ImageFilter

input_path = r'C:\Users\Bibek\.gemini\antigravity-ide\brain\ca97085c-4745-4f05-a26e-a0e719e268c4\.user_uploaded\media_1791795936174.png'
out_dir = r'c:\Dev\bibekbhagat-dev\public\images'
os.makedirs(out_dir, exist_ok=True)

im = Image.open(input_path).convert('RGBA')
cropped = im.crop((56, 0, 456, 512))

width, height = cropped.size
pixels = cropped.load()

# Create clean mask
mask = Image.new('L', (width, height), 255)
mask_pixels = mask.load()

# Reference blue background is approx (63, 100, 191)
for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        # Strong blue background detection
        if b > 120 and (b - r) > 35 and (b - g) > 25:
            mask_pixels[x, y] = 0
        elif b > 95 and (b - r) > 25 and (b - g) > 15:
            # Falloff zone
            diff = min(b - r, b - g)
            alpha = max(0, min(255, int(255 - (diff - 15) * 16)))
            mask_pixels[x, y] = alpha

# Defringe / de-saturate blue halo on edges
defringed = cropped.copy()
def_pixels = defringed.load()

for y in range(height):
    for x in range(width):
        m = mask_pixels[x, y]
        if 0 < m < 255:
            r, g, b, a = def_pixels[x, y]
            # If blue is higher than red & green, clamp blue to avg of r and g to remove blue glow
            avg_rg = int((r + g) / 2)
            if b > avg_rg:
                def_pixels[x, y] = (r, g, avg_rg, a)

# Smooth mask edge slightly for natural antialiasing
smooth_mask = mask.filter(ImageFilter.GaussianBlur(radius=0.6))
defringed.putalpha(smooth_mask)
defringed.save(os.path.join(out_dir, 'bibek-cutout.png'))

# Render modern executive dark studio background
# Deep dark slate #0B0F19 with subtle indigo ambient light behind head
studio = Image.new('RGBA', (width, height), (11, 15, 25, 255))
studio_pixels = studio.load()
center_x, center_y = width // 2, int(height * 0.32)

for y in range(height):
    for x in range(width):
        dist = ((x - center_x) ** 2 + ((y - center_y) * 1.2) ** 2) ** 0.5
        factor = min(1.0, dist / (width * 0.75))
        # Rich indigo/violet back light fading into dark graphite slate
        r = int(32 * (1 - factor) + 11 * factor)
        g = int(38 * (1 - factor) + 15 * factor)
        b = int(72 * (1 - factor) + 25 * factor)
        studio_pixels[x, y] = (r, g, b, 255)

studio.paste(defringed, (0, 0), defringed)
studio.save(os.path.join(out_dir, 'bibek-studio.png'))

# Also save a rounded corner avatar version if needed
print("Defringed studio portrait saved successfully.")
