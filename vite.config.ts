import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Import Pages
import Pages from "vite-plugin-pages";

// Import Layouts
import Layouts from "vite-plugin-vue-layouts";

// Import Vite Plugin Fonts
import { VitePluginFonts } from "vite-plugin-fonts";

// Import Auto Import Components
import Components from "unplugin-vue-components/vite";

// Import Auto Import
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Google Fonts
    VitePluginFonts({
      google: {
        families: ["Fjalla One", "Lato", "PT Serif"],
      },
    }),
    // Pages
    Pages({
      dirs: "src/views",
    }),
    // Layouts
    Layouts(),
    // Components
    Components(),
    // Auto Import
    AutoImport({
      include: [
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],

      // global imports to register
      imports: [
        // presets
        "vue",
        "vue-router",
        "@vueuse/core",
        // custom
        {},
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
