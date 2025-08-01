// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import path from "path";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
    css: {
      modules: {
        // Generate readable class names in development
        generateScopedName: "[name]__[local]___[hash:base64:5]",
        // Enable CSS modules for all .module.css files
        localsConvention: "camelCase",
      },
    },
    build: {
      rollupOptions: {
        external: [
          // Exclude test files and testing libraries from build
          /__tests__/,
          /\.test\./,
          /\.spec\./,
          /@testing-library/,
          /vitest/,
        ],
      },
    },
  },
});
