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
      <SeriesForm />
      <CategoryForm />
      <SubCategoryForm />
      <RarityForm />
    </div>
    <div class="flex w-screen pl-5 pt-6" v-if="VUE.GESTION_STREAM === vue">
      <ActionStream />
    </div>
  </div>
  <notifications position="top right" width="350" class="mt-5" />
</template>

<script>
import { uploadCards } from "../services/cards";
import DashboardMenu from "../components/dashboard/DashboardMenu.vue";
import CardAdd from "../components/dashboard/forms/CardAdd.vue";
import { DASHBOARD_VUE } from "../components/dashboard/constants";
import CollectionEdition from "../components/dashboard/CollectionEdition.vue";
import RarityForm from "../components/dashboard/forms/RarityForm.vue";
import SeriesForm from "../components/dashboard/forms/SeriesForm.vue";
import SubCategoryForm from "../components/dashboard/forms/SubCategoryForm.vue";
import CategoryForm from "../components/dashboard/forms/CategoryForm.vue";
import ActionStream from "../components/dashboard/ActionStream.vue";

export default {
  name: "Dashboard",
  components: {
    ActionStream,
    SubCategoryForm,
    CategoryForm,
    SeriesForm,
    CollectionEdition,
    RarityForm,
    CardAdd,
    DashboardMenu,
  },
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
