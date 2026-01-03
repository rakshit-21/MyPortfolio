import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwind()],
  base: '/',
  build: {
    outDir: "dist", // Explicitly set output directory
    emptyOutDir: true, // Clear dist folder on each build
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]", // Better asset handling
        entryFileNames: "assets/[name]-[hash].js"
      }
    }
  },
  server: {
    port: 3000 // Ensure consistent port
  }
});