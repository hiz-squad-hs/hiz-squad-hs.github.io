import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import { resolve } from 'path';

export default defineConfig({
  base: '/hizsite/', 
  plugins: [injectHTML()],
  build: {
    outDir: 'docs',
    // Говорим Vite собирать обе страницы, чтобы они долетали до Гитхаба
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        notfound: resolve(__dirname, '404.html'),
        page2: resolve(__dirname, 'page2.html') // если есть вторая страница
      }
    }
  },
  server: {
    allowedHosts: true
  }
});