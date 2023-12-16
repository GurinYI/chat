import { resolve } from 'path';
import { defineConfig } from 'vite';
import vitePluginHandlebarsPrecompile from './vite-plugin-handlebars-precompile.js';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
  },
  plugins: [vitePluginHandlebarsPrecompile()],
});
