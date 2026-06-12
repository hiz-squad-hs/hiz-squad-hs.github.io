import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  plugins: [injectHTML()],
  server: {
    // Включаем доступ для абсолютно всех внешних ссылок и туннелей
    allowedHosts: true 
  }
});
