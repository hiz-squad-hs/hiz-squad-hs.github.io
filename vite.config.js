import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  base: '/hizsite/', // Обязательно со слэшами по бокам!
  plugins: [injectHTML()],
  server: {
    allowedHosts: true
  }
});
