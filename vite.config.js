import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/interval_todolist/'  // Asegúrate de que este sea el nombre correcto del repositorio
})
