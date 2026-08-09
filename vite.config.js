import { defineConfig } from 'vite'
import { resolve } from 'path'
import injectHTML from 'vite-plugin-html-inject'

export default defineConfig({
  // Название твоего репозитория на GitHub, обернутое в слэши.
  base: '/hiz-squad-web-site/',

  plugins: [
    injectHTML() // Этот бро как раз отвечает за то, чтобы контент появился
  ],

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
