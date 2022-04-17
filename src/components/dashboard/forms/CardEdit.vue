<template>
  <div>
    <section class="h-fit bg-gray-100 bg-opacity-50 shadow-md">
      <div class="rounded-lg border-t-2 border-indigo-400 bg-gray-100 bg-opacity-5 p-4">
        <div class="mx-auto max-w-sm md:mx-0 md:w-full">
          <div class="inline-flex items-center space-x-4">
            <a href="#" class="relative block"> </a>
            <h1 class="text-gray-600">Edition de cartes</h1>
          </div>
        </div>
      </div>
      <hr />
      <div v-if="selectedCard === undefined" class="p-5 text-center">Pas de carte sélectionnée</div>

      <Form
        v-if="selectedCard !== undefined"
        :validation-schema="schema"
        @submit="onSubmit"
        class="space-y-6 bg-white pt-3">
        <div class="input-section">
          <img :src="selectedCard.pictureUrl" alt="image card selectionné" class="mx-auto h-[350px]" />
        </div>
        <div class="input-section">
          <h2 class="form-label-section">Rareté</h2>
          <div class="relative w-full">
            <Field as="select" id="rarete" class="input-select" name="rarity" v-model="selectedCard.rarity.name">
              <!--              <option disabled value="">Sélectionne une rareté</option>-->
              <option v-for="rarity in rarities" :value="rarity.name">
                {{ rarity.name }}
              </option>
            </Field>
            <ErrorMessage name="rarity" class="error-message" />
          </div>
        </div>
        <hr />
        <div class="input-section">
          <h2 class="form-label-section">Set</h2>
          <div class="relative w-full">
            <Field as="select" id="series" class="input-select" name="serie" v-model="selectedCard.serie.name">
              <!--              <option disabled value="">Sélectionne une série</option>-->
              <option v-for="serie in series" :value="serie.name">{{ serie.name }}</option>
            </Field>
            <ErrorMessage name="serie" class="error-message" />
          </div>
        </div>
        <hr />
        <div class="input-section">
          <h2 class="form-label-section">Nom</h2>
          <div class="relative w-full">
            <Field
              name="name"
              :model-value="selectedCard?.name"
              id="name"
              class="input-text"
              placeholder="Remplis moi" />
            <ErrorMessage name="name" class="error-message" />
          </div>
        </div>
        <hr />
        <div class="input-section">
          <h2 class="form-label-section">Description</h2>
          <div class="relative w-full">
            <Field
              :model-value="selectedCard.description"
              as="textarea"
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
            <Field as="select" id="category" class="input-select" name="category" v-model="selectedCard.category.name">
              <!--              <option disabled value="">Sélectionne une catégorie</option>-->
              <option v-for="category in categories" :value="category.name">{{ category.name }}</option>
            </Field>
            <ErrorMessage name="category" class="error-message" />
          </div>
        </div>
        <hr />
        <div class="input-section">
          <h2 class="form-label-section">Sous-catégorie</h2>
          <div class="relative w-full">
            <Field
              as="select"
              id="subCategory"
              class="input-select"
              name="subCategory"
              v-model="selectedCard.subCategory.name">
              <option disabled value="">Sélectionne une sous-catégorie</option>
              <option v-for="subCategory in subCategories" :value="subCategory.name">{{ subCategory.name }}</option>
            </Field>
            <ErrorMessage name="subCategory" class="error-message" />
          </div>
        </div>
        <div class="flex justify-end px-4 pb-4 text-gray-500">
          <button type="button" class="form-button bg-red-600 hover:bg-red-700" @click="deleteCard">Supprimer</button>
          <div class="grow" />
          <button type="submit" class="form-button">Modifier</button>
        </div>
      </Form>
    </section>
  </div>
</template>

<script>
import * as yup from "yup";
import { ErrorMessage, Field, Form } from "vee-validate";
import { getSeries } from "../../../services/series";
import { getRarities } from "../../../services/rarities";
import { getCategories } from "../../../services/categories";
import { getSubCategories } from "../../../services/subcategories";
import { deleteCard, updateCard } from "../../../services/cards";
import { notify } from "@kyvg/vue3-notification";

export default {
  name: "CardEdit",
  props: {
    selectedCard: Object,
  },
  emits: ["refresh"],
  components: { Form, Field, ErrorMessage },
  data() {
    const schema = yup.object().shape({
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
    };
  },
  methods: {
    onSubmit(value) {
      updateCard(this.selectedCard._id, value);
    },
    deleteCard() {
      deleteCard(this.selectedCard).then(() => {
        notify({ title: "Carte supprimée !", type: "success" });
        this.$emit("refresh");
      });
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
  },
  mounted() {
    this.getRarities();
    this.getSeries();
    this.getCategories();
    this.getSubCategories();
  },
};
</script>

<style scoped></style>
