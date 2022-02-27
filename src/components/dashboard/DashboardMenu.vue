<template>
  <div class="left-0 bg-white dark:bg-gray-800">
    <div class="flex flex-col sm:flex-row sm:justify-around">
      <div class="h-screen w-72">
        <div class="mx-6 mt-10 flex items-center justify-start">
          <img class="h-10" src="../../assets/Glutobot.png" alt="icone glutobot" />
          <span class="ml-4 text-2xl font-bold text-gray-600 dark:text-gray-300">Dashboard</span>
        </div>
        <nav class="mt-10 px-6">
          <a
            class="menu-button"
            href="#"
            @click="$emit('change-vue', clickMenu(VUE.AJOUT_CARTE))"
            :class="{ 'bg-gray-200': VUE.AJOUT_CARTE === this.selectedVue }">
            <SvgCarte />
            <span class="mx-4 text-lg font-normal"> Ajout des cartes </span>
            <span class="flex-grow text-right"> </span>
          </a>
          <a
            class="menu-button"
            href="#"
            @click="$emit('change-vue', clickMenu(VUE.EDITION_CARTE))"
            :class="{ 'bg-gray-200': VUE.EDITION_CARTE === this.selectedVue }">
            <SvgAndroid />
            <span class="mx-4 text-lg font-normal"> Edition des cartes </span>
            <span class="flex-grow text-right"> </span>
          </a>
          <a
            class="menu-button"
            href="#"
            @click="$emit('change-vue', clickMenu(VUE.GESTION_COLLECTION))"
            :class="{ 'bg-gray-200': VUE.GESTION_COLLECTION === this.selectedVue }">
            <SvgAndroid />
            <span class="mx-4 text-lg font-normal"> Gestion collection </span>
            <span class="flex-grow text-right"> </span>
          </a>
          <a
            class="menu-button"
            href="#"
            @click="$emit('change-vue', clickMenu(VUE.GESTION_STREAM))"
            :class="{ 'bg-gray-200': VUE.GESTION_STREAM === this.selectedVue }">
            <SvgBoussole />
            <span class="mx-4 text-lg font-normal"> Gestion du stream </span>
            <span class="flex-grow text-right"> </span>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import SvgCarte from "../../assets/svg/SvgCarte.vue";
import SvgAndroid from "../../assets/svg/SvgAndroid.vue";
import SvgBoussole from "../../assets/svg/SvgBoussole.vue";
import { DASHBOARD_VUE } from "./constants";

export default {
  name: "DashboardMenu",
  components: { SvgBoussole, SvgAndroid, SvgCarte },
  setup() {
    return {
      VUE: DASHBOARD_VUE,
    };
  },
  data() {
    return { selectedVue: DASHBOARD_VUE.AJOUT_CARTE };
  },
  methods: {
    clickMenu(vue) {
      this.selectedVue = vue;
      return vue;
    },
  },
};
</script>

<style scoped>
.menu-button {
  @apply my-6 flex items-center rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white;
}
</style>
