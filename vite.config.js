import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  base: '/hizsite/', // Твой путь на Гитхабе
  plugins: [injectHTML()],
  build: {
    outDir: '.', // Собираем сайт прямо в корень, а не в папку dist!
    emptyOutDir: false // Чтобы Vite случайно не стёр твои исходники при сборке
  },
  server: {
    allowedHosts: true
  }
});