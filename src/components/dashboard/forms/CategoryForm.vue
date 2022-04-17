<template>
  <FormCollectData
    data-name="Catégorie"
    :create-data="createCategorie"
    :update-data="updateCategorie"
    :delete-data="deleteCategorie"
    :get-datas="getCategories" />
</template>

<script>
import { createCategorie, updateCategorie, deleteCategorie, getCategories } from "../../../services/categories";
import FormCollectData from "./FormCollectData.vue";
import * as yup from "yup";
import { useField, useForm } from "vee-validate";

export default {
  name: "CategoryForm",
  components: { FormCollectData },

  data() {
    return {
      createCategorie,
      updateCategorie,
      deleteCategorie,
      getCategories,
    };
  },
};
</script>

<style scoped></style>
