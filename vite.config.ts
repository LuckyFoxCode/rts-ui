import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      components: '/src/components',
      routes: '/src/routes',
      pages: '/src/pages',
      utils: '/src/utils',
      ui: '/src/ui',
    },
  },
});
