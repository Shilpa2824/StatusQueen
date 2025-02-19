import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // React plugin for Vite
  build: {
    outDir: "dist", // Ensure the output goes to the correct directory
  },
});
