import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: {
      '.js': 'jsx', // Ensure esbuild handles `.js` files as JSX
    },
  },
  server: {
    port: 3000,  // Vite dev server port
    proxy: {
      '/api': 'http://localhost:5000',  // Proxy backend API requests to your backend
    },
    historyApiFallback: true,  // Allow browser routing (Handle 404s in the frontend)
  },
});
