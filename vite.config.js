import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 배포 설정
  // 레포지토리 이름에 맞게 base를 설정하세요
  // 예: base: '/lumina/' (GitHub Pages용)
  // 로컬 개발: base: '/'
  base: process.env.NODE_ENV === 'production' ? '/lumina-demo/' : '/',
  build: {
    outDir: 'dist'
  }
})
