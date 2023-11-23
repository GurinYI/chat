import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  root: resolve(__dirname, "src"),
  build: {
    rollupOptions:{
      input:{
        index: resolve(__dirname,'index.html'),
        404:resolve(__dirname,'src/pages/404/404.html')
      }
    }
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
      context: {
        username: "John Doe",
      },
    }),
  ],
});
