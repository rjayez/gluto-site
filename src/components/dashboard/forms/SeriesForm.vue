<template>
  <FormCollectData
    :create-data="createSerie"
    :config-field="config"
    :get-datas="getSeries"
    data-name="Série"
    :delete-data="deleteSerie"
    :update-data="updateSerie" />
</template>

<script>
import FormCollectData from "./FormCollectData.vue";
import { getSeries, createSerie, updateSerie, deleteSerie } from "../../../services/series";

export default {
  name: "SeriesForm",
  components: { FormCollectData },
  data() {
    const config = {
      rate: false,
      visible: true,
      dropEnabled: true,
    };

    return {
      getSeries,
      createSerie,
      updateSerie,
      deleteSerie,
      config,
    };
  },
};
</script>

<style scoped></style>
