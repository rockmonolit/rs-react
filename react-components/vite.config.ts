import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  // build: {
  //   sourcemap: true,
  // },
  plugins: [react(), tsconfigPaths()],
  // css: {
  //   devSourcemap: true,
  // },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    watch: {
      ignored: ['/coverage/'],
    },
  },
});
