<template>
  <FormCollectData
    data-name="Rareté"
    :create-data="createRarity"
    :update-data="updateRarity"
    :delete-data="deleteRarity"
    :get-datas="getRarities"
    :config-field="config">
  </FormCollectData>
</template>

<script>
import { createRarity, deleteRarity, getRarities, updateRarity } from "../../../services/rarities";
import FormCollectData from "./FormCollectData.vue";

export default {
  name: "RarityForm",
  components: { FormCollectData },

  data() {
    const config = {
      rate: true,
      visible: false,
      dropEnabled: false,
    };

    return {
      createRarity,
      updateRarity,
      deleteRarity,
      getRarities,
      config,
    };
  },
  mounted() {
    this.mounted = true;
  },
};
</script>

<style scoped></style>
