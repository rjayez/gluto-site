<template>
  <div class="h-full">
    <SideMenu>
      <div class="mx-2 flex-auto md:mx-8 lg:mx-0 lg:ml-64">
        <component id="page-component" :is="CurrentComponent" />
      </div>
    </SideMenu>
    <LiveNotification />
  </div>
</template>

<script>
import SideMenu from "./components/SideMenu.vue";
import WhoIAm from "./pages/WhoIAm.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Planning from "./pages/Planning.vue";
import Collection from "./pages/Collection.vue";
import Bot from "./pages/Bot.vue";
import LiveNotification from "./components/LiveNotification.vue";

const routes = {
  "/": WhoIAm,
  "/test": HelloWorld,
  "/planning": Planning,
  "/collection": Collection,
  "/bot": Bot,
};

export default {
  components: { LiveNotification, SideMenu },
  props: {
    titre: String,
  },
  data: () => ({
    currentRoute: window.location.pathname,
  }),
  computed: {
    CurrentComponent() {
      return routes[this.currentRoute];
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
