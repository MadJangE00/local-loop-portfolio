import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages(project site) 배포를 위해 상대 경로 base 사용
// HashRouter를 쓰므로 별도 404 fallback이 필요 없다
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
})
