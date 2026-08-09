import { defineConfig } from 'vite'
import { resolve } from 'path'

// В файле vite.config.js
export default defineConfig({
  // Теперь Vite будет собирать все пути строго от корня домена, без подпапок!
  base: '/',

  // Весь остальной твой конфиг (server, build) остается без изменений...

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
