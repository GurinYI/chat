import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import {chats} from "./src/mocked-data/chats.js";

export default defineConfig({
  root: resolve(__dirname, "src"),
  build: {
    rollupOptions:{
      input:{
        index: resolve(__dirname,'src/index.html'),
        404:resolve(__dirname,'src/pages/404/index.html'),
        500:resolve(__dirname,'src/pages/500/index.html'),
        Chat:resolve(__dirname,'src/pages/Chat/index.html'),
        Login:resolve(__dirname,'src/pages/Login/index.html'),
        Modals:resolve(__dirname,'src/pages/Modals/index.html'),
        Profile:resolve(__dirname,'src/pages/Profile/index.html'),
        Signin:resolve(__dirname,'src/pages/Signin/index.html'),
      }
    },
    outDir: '../dist'
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
      context: {
        chats: chats,
        activeChat: chats[0]
      },
    }),
  ],
});
