import fs from 'fs';
import path from 'path';

/**
 * Auto-scan image folder for a tour and return all image paths.
 * Supported formats: jpg, jpeg, png, webp
 * Excludes files that start with same name as main image (e.g., nusa-penida.png vs nusa-penida-1.png)
 */
export function getGalleryImages(slug: string, mainImage: string): string[] {
  const dir = path.resolve(`./public/images/${slug}`);
  if (!fs.existsSync(dir)) return [];

  const mainName = path.basename(mainImage, path.extname(mainImage));

  return fs.readdirSync(dir)
    .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .filter(f => f !== path.basename(mainImage)) // exclude main image
    .sort()
    .map(f => `/images/${slug}/${f}`);
}
