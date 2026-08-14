import { defineConfig } from 'vite'
import { resolve } from 'path'
import injectHTML from 'vite-plugin-html-inject'

export default defineConfig({
  // АВТОМАТИКА: если собираем для сайта — ставим имя репа, если запускаем локально — оставляем '/'
  base: process.env.NODE_ENV === 'production' ? '/hiz-squad-hs.github.io/' : '/',

  plugins: [
    injectHTML({
      handler: {
        root: resolve(__dirname)
      }
    })
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
        projects: resolve(__dirname, 'pages/projects.html'),
        developers: resolve(__dirname, 'pages/developers.html'),

        // Твоя страница проекта, которую Rollup обязан скомпилировать
        proj1: resolve(__dirname, 'pages/projects/proj1.html')
      }
    }
  }
})
