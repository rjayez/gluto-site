import { createApp, h } from "vue";

import App from "./App.vue";
import "../index.css";

const NotFoundComponent = { template: "<p>Page not found</p>" };

const routes = {
  "/": App,
  "/drops": () => import("./Drops.vue"),
};

const Router = {
  data: () => ({
    currentRoute: window.location.pathname,
  }),
  computed: {
    CurrentComponent() {
      return routes[this.currentRoute] || App;
    },
  },
  render() {
    return h(this.CurrentComponent);
  },
};

createApp(Router).mount("#app");
