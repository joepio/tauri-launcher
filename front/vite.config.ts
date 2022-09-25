import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  // server: {
  //   port: 3000,
  // },
  build: {
    target: ['es2021', 'chrome100', 'safari13'],
  },
  // prevent vite from obscuring rust errors
  clearScreen: false,
  // Tauri expects a fixed port, fail if that port is not available
  // don't minify for debug builds
  minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
  // produce sourcemaps for debug builds
  sourcemap: !!process.env.TAURI_DEBUG,
  server: {
    strictPort: true,
  },
});
