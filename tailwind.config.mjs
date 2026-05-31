/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#426235',
          light: '#576e4d',
          dark: '#243b1d',
          button: '#345126',
        },
        sub: '#607263',
        subtext: '#383e38',
        text: '#1f211d',
      },
      fontFamily: {
        sans: ['Ubuntu', 'system-ui', '-apple-system', 'Segoe UI', 'Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
