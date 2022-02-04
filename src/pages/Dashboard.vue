<template>
  <div class="flex">
    <DashboardMenu />
    <div class="flex pt-6">
      <CardAdd />
    </div>
  </div>
</template>

<script>
import { uploadCards } from "../services/cards";
import DashboardMenu from "../components/dashboard/DashboardMenu.vue";
import CardAdd from "../components/dashboard/CardAdd.vue";

export default {
  name: "Dashboard",
  components: { CardAdd, DashboardMenu },
  methods: {
    upload: function (event) {
      event.preventDefault();
      const file = event.target.elements.file.files[0];
      uploadCards(file).then(res => console.log(res));
    },
    test: function () {
      // uploadCards();
      console.log("coucou");
    },
  },
};
</script>

<style scoped></style>
