import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  base: '/hizsite/', 
  plugins: [injectHTML()], // Исправили имя плагина
  build: {
    outDir: 'docs', // Собираем в безопасную папку docs
  },
  server: {
    allowedHosts: true
  }
});
