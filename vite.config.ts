/*
 * @Author: xx
 * @Date: 2024-05-21 17:03:08
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-21 20:02:22
 * @Description: 
 * @FilePath: \toolweb\vite.config.ts
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    legacy({
      targets: ["ie>=11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
  ],
});
