import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

const sslConfig = (() => {
  try {
    return {
      key: fs.readFileSync('/etc/apache2/ssl/apache.key'),
      cert: fs.readFileSync('/etc/apache2/ssl/apache.crt'),
    }
  } catch {
    return undefined
  }
})()

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  envPrefix: ['VITE_', 'APP_'],
  server: {
    https: sslConfig,
    host: true,
    port: 5173,
  },
})
