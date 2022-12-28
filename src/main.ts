import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";

// Import CSS
import "./assets/styles/main.css";

// Import icons
import PhosphorVue from "phosphor-vue";

// Import Motion
import { MotionPlugin } from "@vueuse/motion";

// AutoAnimate
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
  // ...
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        top: 0,
      };
    }
  },
});

const app = createApp(App);

app.use(PhosphorVue);
app.use(MotionPlugin);
app.use(autoAnimatePlugin);
app.use(createPinia());
app.use(router);

app.mount("#app");
