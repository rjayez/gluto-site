<template>
  <!--  TODO Factoriser le css des field -->
  <section class="h-screen w-screen bg-gray-100 bg-opacity-50">
    <form class="container mx-4 max-w-xl shadow-md" enctype="multipart/form-data" id="uploadForm" @submit="upload">
      <div class="rounded-lg border-t-2 border-indigo-400 bg-gray-100 bg-opacity-5 p-4">
        <div class="mx-auto max-w-sm md:mx-0 md:w-full">
          <div class="inline-flex items-center space-x-4">
            <a href="#" class="relative block"> </a>
            <h1 class="text-gray-600">Ajout de cartes</h1>
          </div>
        </div>
      </div>
      <Form :validation-schema="schema" @submit="onSubmit" class="space-y-6 bg-white">
        <div class="w-full items-center space-y-4 p-4 text-gray-500 md:inline-flex md:space-y-0">
          <h2 class="mr-auto max-w-sm pl-5 md:w-1/3">Image</h2>
          <div class="relative w-full">
            <Field @change="upload" id="file" type="file" name="file" required />
            <ErrorMessage name="file" class="error-message" />
          </div>
        </div>
        <hr />
        <div class="input-section">
          <h2 class="mr-auto max-w-sm pl-5 md:w-1/3">Rareté</h2>
          <div class="relative w-full">
            <Field
              as="select"
              id="rarete"
              class="focus:ring-primary-500 focus:border-primary-500 block w-52 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none"
              name="rarity">
              <option value="">Sélectionne une rareté</option>
              <option v-for="rarity in rarities" :value="rarity.name">{{ rarity.name }}</option>
            </Field>
            <ErrorMessage name="rarity" class="error-message" />
          </div>
        </div>
        <hr />
        <div class="input-section">
          <h2 class="mr-auto max-w-sm pl-5 md:w-1/3">Set</h2>
          <div class="relative w-full">
            <Field
              as="select"
              id="series"
              class="focus:ring-primary-500 focus:border-primary-500 block w-full w-52 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none"
              name="serie">
              <option value="">Sélectionne une série</option>
              <option v-for="serie in series" :value="serie.name">{{ serie.name }}</option>
            </Field>
            <ErrorMessage name="serie" class="error-message" />
          </div>
        </div>
        <hr />
        <div class="input-section">
          <h2 class="mr-auto max-w-sm pl-5 md:w-1/3">Nom</h2>
          <div class="relative w-full">
            <Field
              name="name"
              v-model="name"
              id="name"
              class="w-full flex-1 appearance-none rounded-lg border border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Remplis moi" />
            <ErrorMessage name="name" class="error-message" />
          </div>
        </div>
        <hr />
        <div class="input-section">
          <h2 class="max-w-sm pl-5 md:w-1/3">Description</h2>
          <div class="relative w-full">
            <Field
              as="textarea"
              type="text"
              name="description"
              id="description"
              class="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Remplis moi aussi" />
            <ErrorMessage name="description" class="error-message" />
          </div>
        </div>
        <hr />
        <div class="flex justify-end px-4 pb-4 text-gray-500">
          <button
            type="submit"
            class="rounded-lg bg-blue-600 py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200">
            <SvgPlus />
          </button>
        </div>
      </Form>
    </form>
  </section>
</template>

<script>
import { createAndUploadCard, getRarities, getSeries } from "../../services/cards";
import SvgPlus from "../../assets/svg/SvgPlus.vue";
import * as yup from "yup";

import { useField, useForm, Form, Field, ErrorMessage } from "vee-validate";

export default {
  name: "CardAdd",
  components: { SvgPlus, Form, Field, ErrorMessage },
  data() {
    const schema = yup.object().shape({
      file: yup.array().required("Et mon fichier ?!"),
      rarity: yup.string().required("Tu m'as oublié"),
      serie: yup.string().required("Faut cliquez ici !"),
      name: yup.string().required("Remplis moi :'("),
      description: yup.string().required("Moi aussi :("),
    });

    return {
      schema,
      series: [],
      rarities: [],
      file: {},
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
    onSubmit(value) {
      console.info("COUCOU", value);
      console.info("File", this.file);
      createAndUploadCard(value).then(res => console.info("Uploadé !"));
    },
    validateForm() {},
  },
  mounted() {
    this.getRarities();
    this.getSeries();
  },
};
</script>
<style>
.error-message {
  @apply mt-2 ml-2 block font-bold text-red-500;
}

.input-section {
  @apply w-full items-center space-y-4 p-4 py-0 text-gray-500 md:inline-flex md:space-y-0;
}

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
