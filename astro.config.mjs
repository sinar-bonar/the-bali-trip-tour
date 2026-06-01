import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://sinar-bonar.github.io',
  base: '/bali-grand-tour',
  outDir: 'docs',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
