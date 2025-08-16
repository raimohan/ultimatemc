import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Clean config for Netlify (Replit plugins removed)
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
