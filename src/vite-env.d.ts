import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  base: "/your-website-creator/", // 👈 VERY IMPORTANT
})
/// <reference types="vite/client" />
