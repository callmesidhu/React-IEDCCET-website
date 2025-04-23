import { defineConfig } from 'vite'
<<<<<<< HEAD
import react from '@vitejs/plugin-react'
=======
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
>>>>>>> main

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [react()],
})
=======
  plugins: [react(),  tailwindcss(),],
})
>>>>>>> main
