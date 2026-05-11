import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync('/etc/apache2/ssl/apache.key'),
      cert: fs.readFileSync('/etc/apache2/ssl/apache.crt'),
    },
    host: true, // exposes to network if needed
    port: 5173,
  },
})
