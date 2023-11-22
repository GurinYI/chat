import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  root: resolve(__dirname, "src"),
  build: {
    outDir: resolve(__dirname, "build"),
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/components/**/*.hbs"),
      context: {
        username: "John Doe",
      },
    }),
  ],
});
