import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "path";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

// Plugin to copy _redirects file to output directory
const copyRedirectsPlugin = () => {
  return {
    name: "copy-redirects",
    writeBundle() {
      const redirectsPath = path.resolve(import.meta.dirname, "_redirects");
      const outputPath = path.resolve(import.meta.dirname, "dist/public/_redirects");
      if (fs.existsSync(redirectsPath)) {
        fs.copyFileSync(redirectsPath, outputPath);
        console.log("✓ Copied _redirects to dist/public/");
      }
    },
  };
};

const plugins = [
  react({
    jsxRuntime: 'automatic',
  }),
  tailwindcss(),
  jsxLocPlugin(),
  vitePluginManusRuntime(),
  copyRedirectsPlugin()
];

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react/jsx-runtime"],
    force: true,
    esbuildOptions: {
      jsx: 'automatic',
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  publicDir: path.resolve(import.meta.dirname, "client/public"),
  server: {
    port: 3000,
    strictPort: false, // Will find next available port if 3000 is busy
    host: true,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 3000,
    },
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
