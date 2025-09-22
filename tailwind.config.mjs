/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["\"LXGW WenKai\"", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Cantarell", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["\"LXGW WenKai\"", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
