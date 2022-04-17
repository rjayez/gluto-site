<template>
  <section class="container h-fit max-w-2xl bg-gray-100 bg-opacity-50 shadow-md">
    <div class="rounded-lg border-t-2 border-indigo-400 bg-gray-100 bg-opacity-5 p-4">
      <div class="mx-auto max-w-sm md:mx-0 md:w-full">
        <div class="inline-flex items-center space-x-4">
          <a href="#" class="relative block"> </a>
          <h1 class="text-gray-600">Ajout de cartes</h1>
        </div>
      </div>
    </div>
    <Form :validation-schema="schema" @submit="onSubmit" class="space-y-3.5 bg-white" v-slot="{}">
      <div class="input-section pt-6">
        <h2 class="form-label-section">Image</h2>
        <div class="relative w-full">
          <Field @change="upload" id="file" type="file" name="file" />
          <ErrorMessage name="file" class="error-message" />
        </div>
      </div>
      <hr />
      <div class="input-section">
        <h2 class="form-label-section">Rareté</h2>
        <div class="relative w-full">
          <Field as="select" id="rarete" class="input-select" name="rarity">
            <option value="">Sélectionne une rareté</option>
            <option v-for="rarity in rarities" :value="rarity.name">{{ rarity.name }}</option>
          </Field>
          <ErrorMessage name="rarity" class="error-message" />
        </div>
      </div>
      <hr />
      <div class="input-section">
        <h2 class="form-label-section">Set</h2>
        <div class="relative w-full">
          <Field as="select" id="series" class="input-select" name="serie">
            <option value="">Sélectionne une série</option>
            <option v-for="serie in series" :value="serie.name">{{ serie.name }}</option>
          </Field>
          <ErrorMessage name="serie" class="error-message" />
        </div>
      </div>
      <hr />
      <div class="input-section">
        <h2 class="form-label-section">Nom</h2>
        <div class="relative w-full">
          <Field name="name" id="name" class="input-text" placeholder="Remplis moi" />
          <ErrorMessage name="name" class="error-message" />
        </div>
      </div>
      <hr />
      <div class="input-section">
        <h2 class="form-label-section">Description</h2>
        <div class="relative w-full">
          <Field
            as="textarea"
            type="text"
            name="description"
            id="description"
            class="input-text"
            placeholder="Remplis moi aussi" />
          <ErrorMessage name="description" class="error-message" />
        </div>
      </div>
      <hr />
      <div class="input-section">
        <h2 class="form-label-section">Catégorie</h2>
        <div class="relative w-full">
          <Field as="select" id="category" class="input-select" name="category">
            <option value="">Sélectionne une catégorie</option>
            <option v-for="categorie in categories" :value="categorie.name">{{ categorie.name }}</option>
          </Field>
          <ErrorMessage name="category" class="error-message" />
        </div>
      </div>
      <hr />
      <div class="input-section">
        <h2 class="form-label-section">Sous-catégorie</h2>
        <div class="relative w-full">
          <Field as="select" id="subCategory" class="input-select" name="subCategory">
            <option value="">Sélectionne une sous-catégorie</option>
            <option v-for="subCategory in subCategories" :value="subCategory.name">{{ subCategory.name }}</option>
          </Field>
          <ErrorMessage name="subCategory" class="error-message" />
        </div>
      </div>
      <div class="flex justify-end px-4 pb-4 text-gray-500">
        <button type="reset" @click="resetForm" class="form-button">Reset</button>
        <div class="grow" />
        <button type="submit" class="form-button">
          <SvgPlus />
        </button>
      </div>
    </Form>
  </section>
</template>

<script>
import { createAndUploadCard } from "../../../services/cards";
import SvgPlus from "../../../assets/svg/SvgPlus.vue";
import * as yup from "yup";

import { ErrorMessage, Field, Form, useResetForm } from "vee-validate";
import { getSeries } from "../../../services/series";
import { getRarities } from "../../../services/rarities";
import Notification from "../../Notification.vue";
import { notify } from "@kyvg/vue3-notification";
import { getCategories } from "../../../services/categories";
import { getSubCategories } from "../../../services/subcategories";

const reset = useResetForm();

export default {
  name: "CardAdd",
  components: { Notification, SvgPlus, Form, Field, ErrorMessage },
  data() {
    const schema = yup.object().shape({
      file: yup.array().required("Et mon fichier ?!"),
      rarity: yup.string().required("Tu m'as oublié"),
      serie: yup.string().required("Faut cliquez ici !"),
      name: yup.string().required("Remplis moi :'("),
      description: yup.string().required("Moi aussi :("),
      category: yup.string().required("___*( ￣皿￣)/#____"),
      subCategory: yup.string().required("(╯°□°）╯︵ ┻━┻"),
    });

    return {
      schema,
      series: [],
      rarities: [],
      categories: [],
      subCategories: [],
      file: {},
      showNotif: false,
    };
  },
  methods: {
    upload: function (event) {
      event.preventDefault();
      this.file = event.target.files[0];
    },
    getSeries() {
      getSeries().then(series => (this.series = series));
    },
    getRarities() {
      getRarities().then(rarities => (this.rarities = rarities));
    },
    getCategories() {
      getCategories().then(categories => (this.categories = categories));
    },
    getSubCategories() {
      getSubCategories().then(subCategories => (this.subCategories = subCategories));
    },
    resetForm() {
      reset();
    },
    onSubmit(value) {
      console.debug(value);
      createAndUploadCard(value).then(res => {
        console.info("Uploadé !");
        notify({ title: "Création réussi !", text: "La carte est dans la collection", type: "success" });
      });
    },
  },
  mounted() {
    this.getRarities();
    this.getSeries();
    this.getCategories();
    this.getSubCategories();
  },
};
</script>
<style>
/*.custom-file {*/
/*  width: 100%;*/
/*  height: auto;*/

/*.custom-file-label {*/
/*  width: 168px;*/
/*  border-radius: 5px;*/
/*  cursor: pointer;*/
/*  font: 700 14px / 40px;*/
/*  border: 1px solid #99a2a8;*/
/*  text-align: center;*/
/*  @include transition;*/

/*i {*/
/*  font-size: 20px;*/
/*  padding-right: 10px;*/
/*}*/

/*input {*/
/*  display: none;*/
/*}*/

/*}*/
</style>
