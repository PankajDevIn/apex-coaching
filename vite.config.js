import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), 
    tailwindcss()
  ],
<<<<<<< HEAD
  base: '/apex-coaching/',
=======
  basename: "/apex-coaching/",
>>>>>>> 7d94d9f04272507031896c363a268fb7652acc03
})
