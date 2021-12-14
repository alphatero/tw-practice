import { resolve } from "path"
import { defineConfig } from "vite"
import pugPlugin from "vite-plugin-pug"


export default defineConfig({
  plugins: [pugPlugin({ localImports: true }, { hello: "world", baseUrl: "/" })],
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
      },
    },
  },
})