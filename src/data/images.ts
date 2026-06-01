import fs from 'fs';
import path from 'path';

/**
 * Auto-scan image folder for a tour and return all image paths.
 * Supported formats: jpg, jpeg, png, webp
 * Excludes files that start with same name as main image (e.g., nusa-penida.png vs nusa-penida-1.png)
 */
export function getGalleryImages(slug: string, mainImage: string): string[] {
  // Extract folder from image path instead of slug — slug may differ (e.g. private- tours)
  const parts = mainImage.split('/');
  if (parts.length < 3) return [];
  const folderName = parts[2]; // e.g. 'beautiful-beach-tour' from '/images/beautiful-beach-tour/file.jpg'

  const dir = path.resolve(`./public/images/${folderName}`);
  if (!fs.existsSync(dir)) return [];

  const mainName = path.basename(mainImage, path.extname(mainImage));

  return fs.readdirSync(dir)
    .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .filter(f => f !== path.basename(mainImage)) // exclude main image
    .sort()
    .map(f => `/images/${folderName}/${f}`);
}
