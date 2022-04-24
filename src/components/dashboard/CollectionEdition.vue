<template>
  <div class="grid w-full grid-cols-2 gap-5">
    <CardEdit :selected-card="selectedCard" @refresh="refreshCollection" />

    <div>
      <button class="form-button ml-3 mb-3" @click="refreshCollection">
        <SvgRefresh />
      </button>
      <div class="flex place-content-evenly">
        <select
          class="my-2 mx-auto w-72 rounded-lg bg-indigo-950 p-2 text-indigo-150"
          @change="event => (this.seriesFilter = event.target.value)">
          <option selected value="">Toutes les séries</option>
          <option v-for="serie in series" :value="serie.name">{{ serie.name }}</option>
          <option>Le starter pack</option>
        </select>
        <button class="form-button ml-3 mb-3" @click="filterAndSort">Filtrer</button>

        <select
          class="my-2 mx-auto w-72 rounded-lg bg-indigo-950 p-2 text-indigo-150"
          @change="event => (this.categoriesFilter = event.target.value)">
          <option selected value="">Toutes les catégories</option>
          <option v-for="category in categories" :value="category.name">{{ category.name }}</option>
        </select>
      </div>
      <div class="flex place-content-evenly">
        <select
          class="my-2 mx-auto w-72 rounded-lg bg-indigo-950 p-2 text-indigo-150"
          @change="event => (this.raritiesFilter = event.target.value)">
          <option selected value="">Toutes les raretés</option>
          <option v-for="rarity in rarities" :value="rarity.name">
            {{ rarity.name }}
          </option>
        </select>
        <div class="w-24" />
        <select
          class="my-2 mx-auto w-72 rounded-lg bg-indigo-950 p-2 text-indigo-150"
          @change="event => (this.subCategoriesFilter = event.target.value)">
          <option selected value="">Toutes les sous catégories</option>
          <option v-for="subCategory in subCategories" :value="subCategory.name">{{ subCategory.name }}</option>
        </select>
      </div>
      <div>
        <div class="mt-3 grid auto-rows-min grid-cols-4 gap-3">
          <div
            v-for="card in filteredCollection"
            class="mx-auto h-fit w-40 shadow-2xl hover:shadow-indigo-850"
            :class="{ 'shadow-amber-700': selectedCard?.name === card.name }">
            <img :src="card.pictureUrl" alt="image carte" class="h-fit w-40" @click="selectCard(card)" />
          </div>
        </div>
        <div class="mt-5 text-center" v-if="filteredCollection.length === 0">
          <h3 class="font-bold">A plus rien, t'as trop filtrés !</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardEdit from "./forms/CardEdit.vue";
import { getCards } from "../../services/cards";
import { notify } from "@kyvg/vue3-notification";
import { getSeries } from "../../services/series";
import { getRarities } from "../../services/rarities";
import { getCategories } from "../../services/categories";
import { getSubCategories } from "../../services/subcategories";
import SvgRefresh from "../../assets/svg/SvgRefresh.vue";

export default {
  name: "CollectionEdition",
  components: { SvgRefresh, CardEdit },

  data() {
    return {
      collection: [],
      filteredCollection: [],
      selectedCard: undefined,
      series: [],
      rarities: [],
      categories: [],
      subCategories: [],
      seriesFilter: "",
      raritiesFilter: "",
      categoriesFilter: "",
      subCategoriesFilter: "",
    };
  },
  methods: {
    getCollection() {
      return getCards().then(data => {
        let collection = data.sort(this.sortCard);
        this.collection = collection;
        this.filteredCollection = collection;
        // this.collection = data;
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
    filterAndSort() {
      console.debug("COUCOU filterAndSort");
      this.filteredCollection = this.collection
        .filter(card => this.raritiesFilter === "" || this.raritiesFilter === card.rarity.name)
        .filter(card => this.seriesFilter === "" || this.seriesFilter === card.serie.name)
        .filter(card => this.categoriesFilter === "" || this.categoriesFilter === card.category.name)
        .filter(card => this.subCategoriesFilter === "" || this.subCategoriesFilter === card.subCategory.name)
        .sort((card1, card2) => this.sortCard(card1, card2));
    },
    sortCard(card1, card2) {
      // Priorité du tri : Série > Rareté > Catégorie > Sous Catégorie > Ordre des cartes
      if (card1.serie.order !== card2.serie.order) {
        return card1.serie.order - card2.serie.order;
      }

      if (card1.rarity.order !== card2.rarity.order) {
        return card1.rarity.order - card2.rarity.order;
      }

      if (card1.category.order !== card2.category.order) {
        return card1.category.order - card2.category.order;
      }

      if (card1.subCategory.order !== card2.subCategory.order) {
        return card1.subCategory.order - card2.subCategory.order;
      }

      return card1.order - card2.order;
    },
    selectCard(card) {
      this.selectedCard = card;
      this.scrollToTop();
    },
    refreshCollection() {
      this.getCollection()
        .then(() => notify({ title: "Collection à jour !", type: "info" }))
        .catch(() => notify({ title: "Erreur :'(", text: "Problème pour rafraichir la collection.", type: "error" }));
      this.selectedCard = undefined;
    },
    scrollToTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
  },
  mounted() {
    this.getCollection();
    this.getSeries();
    this.getSubCategories();
    this.getRarities();
    this.getCategories();
  },
};
</script>

<style scoped></style>
