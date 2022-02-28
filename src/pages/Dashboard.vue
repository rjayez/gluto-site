<template>
  <div class="flex">
    <DashboardMenu @change-vue="changeVue" />
    <div class="flex w-screen pl-5 pt-6" v-if="VUE.AJOUT_CARTE === vue">
      <CardAdd />
    </div>
    <div class="flex w-screen pl-5 pt-6" v-if="VUE.EDITION_CARTE === vue">
      <CollectionEdition />
    </div>
    <div class="flex w-screen pl-5 pt-6" v-if="VUE.GESTION_COLLECTION === vue">
      <RarityAdd />
    </div>
    <div class="flex w-screen pl-5 pt-6" v-if="VUE.GESTION_STREAM === vue">
      <!--   TODO   -->
      <label>Emote Bisous</label>

      <label>Offrir tirage booster</label>
      <label>Liste des viewers pour selectionner tirage booster</label>
    </div>
  </div>
  <notifications position="top right" width="350" class="mt-5" />
</template>

<script>
import { uploadCards } from "../services/cards";
import DashboardMenu from "../components/dashboard/DashboardMenu.vue";
import CardAdd from "../components/dashboard/create/CardAdd.vue";
import RarityAdd from "../components/dashboard/create/RarityAdd.vue";
import { DASHBOARD_VUE } from "../components/dashboard/constants";
import CollectionEdition from "../components/dashboard/CollectionEdition.vue";

export default {
  name: "Dashboard",
  components: { CollectionEdition, RarityAdd, CardAdd, DashboardMenu },
  setup() {
    return {
      VUE: DASHBOARD_VUE,
    };
  },
  data() {
    return {
      vue: DASHBOARD_VUE.AJOUT_CARTE,
    };
  },
  methods: {
    upload: function (event) {
      event.preventDefault();
      const file = event.target.elements.file.files[0];
      uploadCards(file).then(res => console.log(res));
    },
    changeVue(vue) {
      console.log(vue);
      this.vue = vue;
    },
  },
};
</script>

<style scoped></style>
