import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://baligrandtour.com',
  base: '/',
  outDir: 'docs',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
