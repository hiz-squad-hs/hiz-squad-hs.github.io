import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // Название твоего репозитория на GitHub, обернутое в слэши.
  // Именно эта строчка заставит Vite автоматически перестроить ВСЕ пути при сборке!
  base: '/hiz-squad-web-site/',

  server: {
    host: '127.0.0.1',
    port: 3001
  },
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        notfound: resolve(__dirname, '404.html'),
        projects: resolve(__dirname, 'pages/projects.html')
      }
    }
  }
})
