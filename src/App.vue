<template>
  <div class="h-full">
    <SideMenu />
    <!--  Div avec une marge de la largeur du side menu pour compenser la fixed position -->
    <div class="lg:ml-64">
      <component id="page-component" class="mt-6 mx-5 md:mx-8 lg:mx-4 flex-auto" :is="CurrentComponent" />
    </div>
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
html,
body {
  height: 100%;
  background-color: #f3f4f6;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*height: 100%;*/
}
</style>
