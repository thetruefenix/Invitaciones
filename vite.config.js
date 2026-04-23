import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  root: '.',
  base: './',
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'home/index.html'),
        confirma: resolve(__dirname, 'confirma/index.html'),
        detalles: resolve(__dirname, 'detalles/index.html'),
        regalos: resolve(__dirname, 'regalos/index.html')
      }
    }
  }
});
