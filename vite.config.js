import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    assetsDir: './assets', // 设置资源文件的目录为相对路径
  },
})
