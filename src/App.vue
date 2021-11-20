<template>
  <div class="flex bg-indigo-150">
    <SideMenu class="flex-none w-64"/>
    <component class="mt-6 mx-16 flex-auto" :is="CurrentComponent"/>
    <LiveNotification/>
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
  '/': WhoIAm,
  '/test': HelloWorld,
  '/planning': Planning,
  '/collection': Collection,
  '/bot': Bot
}

export default {
  components: {LiveNotification, SideMenu},
  props: {
    titre: String
  },
  data: () => ({
    currentRoute: window.location.pathname
  }),
  computed: {
    CurrentComponent() {
      return routes[this.currentRoute]
    }
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

