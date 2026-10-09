import { defineConfig } from "vite";
import { resolve } from "node:path";
export default defineConfig({ build: { rollupOptions: { input: { home: resolve(import.meta.dirname, "index.html"), vocabulary: resolve(import.meta.dirname, "vocabulary/index.html") } } } });
