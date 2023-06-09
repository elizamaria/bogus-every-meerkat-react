import { defineConfig } from "vite";
import jspmPlugin from "vite-plugin-jspm";
import { readFileSync } from "node:fs";
const config = JSON.parse(readFileSync("./teleport.config.json"));

export default defineConfig({
  clearScreen: true,
  build: {
    outDir: "build",
    polyfillModulePreload: false,
    polyfillDynamicImport: false,
  },
  css: {
    modules: {
      scopeBehaviour: "local",
    },
  },
  plugins: [
    jspmPlugin({
      inputMap: config.importmap,
      downloadDeps: true,
      resolutions: {
        react: '^17.0.2',
        'react-dom': '^17.0.2'
      },
      provider: "jspm.io"
    })
  ],
});