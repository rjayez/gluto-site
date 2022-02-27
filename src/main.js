import { createApp, h } from "vue";

import App from "./App.vue";
import "../index.css";
import Dashboard from "./pages/Dashboard.vue";
import { configure } from "vee-validate";
import Notifications from "@kyvg/vue3-notification";

configure({
  validateOnBlur: false,
  validateOnChange: false,
  validateOnInput: false,
});

const NotFoundComponent = { template: "<p>Page not found</p>" };

const routes = {
  "/": App,
  "/drops": () => import("./Drops.vue"),
  "/dashboard": Dashboard,
};

const Router = {
  data() {
    return {
      currentRoute: window.location.pathname,
    };
  },
  computed: {
    CurrentComponent() {
      return routes[this.currentRoute] || App;
    },
  },
  render() {
    return h(this.CurrentComponent);
  },
};

createApp(Router).use(Notifications).mount("#app");
