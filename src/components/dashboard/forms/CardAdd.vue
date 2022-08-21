<template>
  <div class="grid grid-cols-2 gap-7">
    <section class="container mx-4 h-fit w-[600px] max-w-xl bg-gray-100 bg-opacity-50 shadow-md">
      <div class="w-full rounded-lg border-t-2 border-indigo-400 bg-gray-100 bg-opacity-5 p-4">
        <div class="mx-auto max-w-sm md:mx-0 md:w-full">
          <div class="inline-flex items-center space-x-4">
            <a href="#" class="relative block"> </a>
            <h1 class="text-gray-600">Ajout de cartes</h1>
          </div>
        </div>
      </div>
      <form @submit="onSubmit" class="space-y-3.5 bg-white">
        <!--        <div class="input-section pt-6">-->
        <!--          <h2 class="form-label-section">Image</h2>-->
        <!--          <div class="relative w-full">-->
        <!--            <Field @change="upload" id="file" type="file" name="file" />-->
        <!--            <ErrorMessage name="file" class="error-message" />-->
        <!--          </div>-->
        <!--        </div>-->
        <!--        <hr />-->
        <div class="input-section">
          <h2 class="form-label-section">Rareté</h2>
          <div class="relative w-full">
            <select id="rarete" class="input-select" name="rarity" v-model="rarity">
              <option value="">Sélectionne une rareté</option>
              <option v-for="rarity in rarities" :value="rarity.name">{{ rarity.name }}</option>
            </select>
            <ErrorMessage name="rarity" class="error-message" />
          </div>
        </div>
        <hr />
        <div class="input-section">
          <h2 class="form-label-section">Série</h2>
          <div class="relative w-full">
            <select id="series" class="input-select" name="serie" v-model="serie">
              <option value="">Sélectionne une série</option>
              <option v-for="serie in series" :value="serie.name">{{ serie.name }}</option>
            </select>
            <ErrorMessage name="serie" class="error-message" />
          </div>
        </div>
        <hr />
        <div class="input-section">
          <h2 class="form-label-section">Nom</h2>
          <div class="relative w-full">
            <input name="name" id="name" class="input-text" placeholder="Remplis moi" v-model="name" />
            <ErrorMessage name="name" class="error-message" />
          </div>
        </div>
        <hr />
        <div class="input-section">
          <h2 class="form-label-section">Description</h2>
          <div class="relative w-full">
            <textarea
              type="text"
              name="description"
              id="description"
              class="input-text"
              placeholder="Remplis moi aussi"
              v-model="description" />
            <ErrorMessage name="description" class="error-message" />
          </div>
        </div>
        <hr />
        <div class="input-section">
          <h2 class="form-label-section">Catégorie</h2>
          <div class="relative w-full">
            <select id="category" class="input-select" name="category" v-model="category">
              <option value="">Sélectionne une catégorie</option>
              <option v-for="categorie in categories" :value="categorie.name">{{ categorie.name }}</option>
            </select>
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
        <hr />
        <div class="input-section">
          <h2 class="form-label-section">Ordre</h2>
          <div class="relative w-full">
            <input
              type="number"
              id="order"
              min="1"
              class="input-select"
              name="order"
              placeholder="C'est un chiffre ici"
              v-model="order" />
            <ErrorMessage name="order" class="error-message" />
          </div>
        </div>
        <div class="flex justify-end px-4 pb-4 text-gray-500">
          <button type="reset" @click="resetForm" class="form-button">Reset</button>
          <div class="grow" />
          <button type="submit" class="form-button">
            <SvgPlus />
          </button>
        </div>
      </form>
    </section>
    <section class="container mx-4 h-fit max-w-xl bg-gray-100 bg-opacity-50 shadow-md">
      <div class="w-full rounded-lg border-t-2 border-indigo-400 bg-gray-100 bg-opacity-5 p-4">
        <div class="mx-auto max-w-sm md:mx-0 md:w-full">
          <div class="inline-flex items-center space-x-4">
            <a href="#" class="relative block"> </a>
            <h1 class="text-gray-600">Upload de l'image</h1>
          </div>
        </div>
      </div>
      <div
        @dragover.prevent="dragover"
        @dragleave.prevent="dragleave"
        @drop="drop"
        class="m-4 flex h-96 flex-col items-center justify-center rounded-lg border-4 border-indigo-750 shadow-2xl">
        <input
          type="file"
          name="fields[assetsFieldHandle][]"
          id="assetsFieldHandle"
          class="absolute h-px w-px overflow-hidden opacity-0"
          @change="onChange"
          ref="file"
          accept=".pdf,.jpg,.jpeg,.png" />
        <span>Lâche moi cette carte 🃏</span>
        <span class="m-2"><SvgUpload /></span>
        <ul class="mt-4" v-if="this.filelist.length" v-cloak>
          <li class="p-1 text-sm" v-for="file in filelist">
            <strong>{{ file.name }}</strong>
            <button class="ml-2" type="button" title="Remove file">remove</button>
          </li>
        </ul>
        <ErrorMessage name="file" class="error-message" />
      </div>
    </section>
  </div>
</template>

<script>
import { createAndUploadCard } from "../../../services/cards";
import SvgPlus from "../../../assets/svg/SvgPlus.vue";
import * as yup from "yup";

import { ErrorMessage, Field, Form, useField, useForm, useResetForm } from "vee-validate";
import { getSeries } from "../../../services/series";
import { getRarities } from "../../../services/rarities";
import Notification from "../../Notification.vue";
import { notify } from "@kyvg/vue3-notification";
import { getCategories } from "../../../services/categories";
import { getSubCategories } from "../../../services/subcategories";
import SvgUpload from "../../../assets/svg/SvgUpload.vue";
import { toRaw } from "vue";

const reset = useResetForm();

export default {
  name: "CardAdd",
  components: { SvgUpload, Notification, SvgPlus, Form, Field, ErrorMessage },
  setup() {
    const schema = yup.object().shape({
      fileValue: yup.array().min(1, "LE FICHUEZ").required("Et mon fichier ?!"),
      rarity: yup.string().required("Tu m'as oublié"),
      serie: yup.string().required("Faut cliquez ici !"),
      name: yup.string().required("Remplis moi :'("),
      description: yup.string().required("Moi aussi :("),
      category: yup.string().required("___*( ￣皿￣)/#____"),
      subCategory: yup.string().required("(╯°□°）╯︵ ┻━┻"),
      order: yup.number().required("(╬▔皿▔)╯"),
    });

    const { errors, handleSubmit, setValues } = useForm({ validationSchema: schema });

    const { value: fileValue } = useField(
      "fileInput",
      {},
      {
        initialValue: [],
      }
    );
    const { value: rarity } = useField("rarity");
    const { value: serie } = useField("serie");
    const { value: name } = useField("name");
    const { value: description } = useField("description");
    const { value: category } = useField("category");
    const { value: subCategory } = useField("subCategory");
    const { value: order } = useField("order");

    return {
      fileValue,
      rarity,
      serie,
      name,
      description,
      category,
      subCategory,
      order,
      errors,
      handleSubmit,
      setValues,
    };
  },
  data() {
    // const schema = yup.object().shape({
    //   file: yup.array().required("Et mon fichier ?!"),
    //   rarity: yup.string().required("Tu m'as oublié"),
    //   serie: yup.string().required("Faut cliquez ici !"),
    //   name: yup.string().required("Remplis moi :'("),
    //   description: yup.string().required("Moi aussi :("),
    //   category: yup.string().required("___*( ￣皿￣)/#____"),
    //   subCategory: yup.string().required("(╯°□°）╯︵ ┻━┻"),
    //   order: yup.number().required("(╬▔皿▔)╯"),
    // });

    return {
      series: [],
      rarities: [],
      categories: [],
      subCategories: [],
      // file: {},
      showNotif: false,
      filelist: [],
      // file: [],
      onSubmit: () => {},
    };
  },
  methods: {
    upload: function (event) {
      event.preventDefault();
      this.file = event.target.files[0];
    },
    onChange(event) {
      this.filelist = [...this.$refs.file.files];
      // this.fileValue = [...this.$refs.file.files];
      console.debug("onChange", ...this.$refs.file.files);
      // this.file = event.target.files[0];
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
    // onSubmit(value) {
    //   console.debug(value);
    //   createAndUploadCard(value).then(res => {
    //     console.info("Uploadé !");
    //     notify({ title: "Création réussi !", text: "La carte est dans la collection", type: "success" });
    //   });
    // },
    dragover(event) {
      console.debug("dragover", event);
      if (!event.currentTarget.classList.contains("bg-green-300")) {
        event.currentTarget.classList.remove("bg-gray-100");

        event.currentTarget.classList.add("bg-green-300", "border-dashed", "bg-indigo-50", "shadow-indigo-850");
      }
    },
    dragleave(event) {
      // Clean up
      console.info("Coucou leave");

      event.currentTarget.classList.add("bg-gray-100");
      event.currentTarget.classList.remove("bg-green-300", "border-dashed", "bg-indigo-50", "shadow-indigo-850");
    },
    drop(event) {
      event.preventDefault();
      console.debug("drop", { event });

      // this.$refs.file.files = toRaw(event.dataTransfer.files);
      this.onChange(); // Trigger the onChange event manually
      // Clean up
      event.currentTarget.classList.add("bg-gray-100");
      event.currentTarget.classList.remove("bg-green-300", "border-dashed", "bg-indigo-50", "shadow-indigo-850");
    },
  },
  mounted() {
    this.getRarities();
    this.getSeries();
    this.getCategories();
    this.getSubCategories();

    this.onSubmit = this.handleSubmit(values => {
      console.info("Valeur du formulaire", values);
      createAndUploadCard(values).then(res => {
        console.info("Uploadé !");
        notify({ title: "Création réussi !", text: "La carte est dans la collection", type: "success" });
      });
    });
    console.info("file : ", this.file);
    console.info("rarity : ", this.rarity);
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