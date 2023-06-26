// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        service: resolve(__dirname, "service.html"),
        page: resolve(__dirname, "team.html"),
      },
    },
  },
});
