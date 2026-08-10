import { defineConfig } from 'vite'
import { resolve } from 'path'
import injectHTML from 'vite-plugin-html-inject'

export default defineConfig({
  // Проект теперь в корне домена, base строго '/'
  base: '/',

  plugins: [
    injectHTML({
      // Указываем плагину искать блоки строго внутри корня проекта,
      // чтобы он перестал генерировать абсолютные пути винды file:///
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
      }
    }
  }
})
