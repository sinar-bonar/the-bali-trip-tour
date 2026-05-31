import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://sinar-bonar.github.io',
  base: '/the-bali-trip-tour',
  outDir: 'docs',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
