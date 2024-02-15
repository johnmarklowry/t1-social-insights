import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build"
  },
  server: {
    host:"0.0.0.0",
    port:3000,
    strictPort: true,
    hmr: {
      clientPort: 443 // Run the websocket server on the SSL port
    },
    // Set up proxy to forward API requests to Flask server during development
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Flask backend server URL
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  }
});
