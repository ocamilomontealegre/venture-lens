import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@app": resolve(__dirname, "src/app"),
      "@ui": resolve(__dirname, "src/ui"),
      "@features": resolve(__dirname, "src/features"),
    },
  },
  plugins: [react()],
});
