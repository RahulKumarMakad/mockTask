import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx'], // Ensure Vite recognizes these extensions
  },
  server: {
    port: 3000, // Specify the development server port
    proxy: {
      '/api': 'http://localhost:5000', // Proxy backend requests
    },
  },
});
