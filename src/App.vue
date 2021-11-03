<template>
  <div class="grid grid-cols-6 grid-flow-col auto-cols-min bg-indigo-150">
    <SideMenu />
    <component class="col-span-5 mt-6" :is="CurrentComponent"/>
  </div>

</template>

<script>
import SideMenu from "./components/SideMenu.vue";
import WhoIAm from "./pages/WhoIAm.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Planning from "./pages/Planning.vue";
import Collection from "./pages/Collection.vue";
import Bot from "./pages/Bot.vue";


const routes = {
  '/': WhoIAm,
  '/test': HelloWorld,
  '/planning': Planning,
  '/collection': Collection,
  '/bot' : Bot
}

export default {
  components: {WhoIAm, SideMenu},
  props: {
    titre: String
  },
  data : () => ({
    currentRoute: window.location.pathname
  }),
  computed:{
    CurrentComponent(){
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
  text-align: center;
  color: #2c3e50;
}
</style>

