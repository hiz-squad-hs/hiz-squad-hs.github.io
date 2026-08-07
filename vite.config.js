import { defineConfig } from 'vite'
import injectHTML from 'vite-plugin-html-inject'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  plugins: [
    injectHTML()
  ],
  // НАСТРОЙКА IP И ПОРТА ТУТ:
  server: {
    host: '127.0.0.1', // Ваш IP (или 'localhost', или '0.0.0.0' если для локальной сети)
    port: 3001         // Ваш фиксированный порт
  },
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        notfound: resolve(__dirname, '404.html'),
        page2: resolve(__dirname, 'page2.html'),
        portfolio: resolve(__dirname, 'portfolio.html')
      }
    }
  }
})
