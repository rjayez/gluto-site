import { createApp, h } from "vue";

import App from "./App.vue";
import "../index.css";
import Notifications from "@kyvg/vue3-notification";
import Linktree from "./pages/Linktree.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faInstagram, faTiktok, faTwitch, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const NotFoundComponent = { template: "<p>Page not found</p>" };

const routes = {
  "/": App,
  "/drops": () => import("./Drops.vue"),
  "/link": Linktree,
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

library.add(faDiscord, faTwitter, faYoutube, faTwitch, faInstagram, faTiktok, faMobileAlt);

createApp(Router).use(Notifications).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
