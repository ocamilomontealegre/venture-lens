import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@common": resolve(__dirname, "src/common"),
      "@components": resolve(__dirname, "src/components"),
      "@layouts": resolve(__dirname, "src/layouts"),
      "@pages": resolve(__dirname, "src/pages"),
      "@router": resolve(__dirname, "src/router"),
      "@sections": resolve(__dirname, "src/sections"),
      "@services": resolve(__dirname, "src/services"),
    },
  },
  plugins: [react()],
  server: {
    cors: true,
    port: 3000,
  },
});
