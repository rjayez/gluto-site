<template>
  <title>La collection de carte</title>
  <div class="mx-0">
    <h1 class="page-title">Votre collection</h1>
    <h2 class="page-subtitle">Toutes vos cartes tirés durant les streams sont ici !</h2>
    <div class="mt-5">
      <!--      <button class="form-button ml-3 mb-3" @click="refreshCollection">-->
      <!--        <SvgRefresh />-->
      <!--      </button>-->
      <div class="flex place-content-evenly">
        <select
          class="my-2 mx-auto w-72 rounded-lg bg-indigo-950 p-2 text-indigo-150"
          @change="event => (this.seriesFilter = event.target.value)">
          <option selected value="">Toutes les séries</option>
          <option v-for="serie in series" :value="serie.name">{{ serie.name }}</option>
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
    </div>
    <div class="my-5 grid grid-cols-1 justify-evenly gap-5 px-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <div v-for="card in filteredCollection" class="mx-auto my-4">
        <img
          v-if="card.revealed"
          :src="card.pictureUrl"
          @mouseout="mouseOutCard"
          @mousedown="mouseDown"
          @mouseup="mouseUp"
          @mousemove="handleMove"
          alt="Carte face recto"
          class="del h-[361px] w-[253px] cursor-pointer object-scale-down hover:rounded-xl hover:shadow-2xl hover:shadow-violet-500"
          @click="showDetails(card)"
          style="transition: box-shadow 0.1s, transform 0.1s" />
        <img
          v-else
          @mouseout="mouseOutCard"
          @mousedown="mouseDown"
          @mouseup="mouseUp"
          @mousemove="handleMove"
          src="../assets/webp/back.webp"
          alt="Carte face verso"
          class="h-[361px] w-[253px] object-scale-down transition transition-shadow delay-100"
          style="transition: box-shadow 0.1s, transform 0.1s" />
      </div>
    </div>
    <Loader :loading="loading" />
    <div class="mt-5 text-center" v-if="!loading && filteredCollection.length === 0">
      <h3 class="font-bold">A plus rien, t'as trop filtrés !</h3>
    </div>
  </div>
  <div
    v-if="showCardDetails"
    class="fixed top-0 left-0 z-50 flex h-screen w-screen flex-col items-center justify-center overflow-scroll pt-32 backdrop-blur-sm backdrop-brightness-50 backdrop-contrast-150 backdrop-grayscale xl:flex-row xl:pt-0">
    <img
      :src="cardDetails.pictureUrl"
      alt="Carte detaille"
      class="mx-10 mt-32 mb-8 max-w-[504px] cursor-pointer rounded-2xl object-scale-down hover:shadow-2xl hover:shadow-violet-500" />
    <div
      class="pt-auto mx-10 mt-32 mb-8 flex h-[721px] w-[504px] flex-col items-center justify-center rounded-2xl bg-white px-4 text-justify text-xl text-gray-800 lg:ml-10">
      <p class="text-center">{{ cardDetails.name }}</p>
      <p class="my-10 text-center">{{ cardDetails.category }} : {{ cardDetails.subCategory }}</p>
      <p class="">{{ cardDetails.description }}</p>
    </div>
    <div
      class="absolute top-0 right-0 z-40 m-3 block h-5 w-7 scale-100 cursor-pointer opacity-100 lg:scale-150"
      @click="closeDetails">
      <label class="h-5 w-7">
        <span class="absolute top-0 left-0 block h-0 w-7 origin-top-left rotate-45 ring-2 ring-indigo-750"></span>
        <span class="absolute bottom-0 right-0 block h-0 w-7 origin-top-left -rotate-45 ring-2 ring-indigo-750"></span>
      </label>
    </div>
  </div>
</template>

<script>
import { getCollection } from "../services/users";
import SvgUpload from "../assets/svg/SvgUpload.vue";
import SvgRefresh from "../assets/svg/SvgRefresh.vue";
import { getSeries } from "../services/series";
import { getRarities } from "../services/rarities";
import { getCategories } from "../services/categories";
import { getSubCategories } from "../services/subcategories";
import Loader from "../components/Loader.vue";

export default {
  name: "Collection",
  components: { Loader, SvgRefresh, SvgUpload },
  data() {
    return {
      selectedCard: undefined,
      collection: [],
      // cards: [],
      filteredCollection: [],
      series: [],
      rarities: [],
      categories: [],
      subCategories: [],
      showCardDetails: false,
      cardDetails: {},
      seriesFilter: "",
      raritiesFilter: "",
      categoriesFilter: "",
      subCategoriesFilter: "",
      loading: false,
    };
  },
  methods: {
    showDetails(card) {
      this.showCardDetails = true;
      this.cardDetails = card;
      document.body.classList.add("lock-scroll");
    },
    closeDetails() {
      this.showCardDetails = false;
      document.body.classList.remove("lock-scroll");
    },
    getCollection(twitchId) {
      this.loading = true;
      getCollection(twitchId)
        .then(cards => {
          let collection = cards.sort(this.sortCard);
          this.collection = collection;
          this.filteredCollection = collection;
        })
        .finally(() => (this.loading = false));
    },
    getSeries() {
      getSeries().then(series => {
        series.sort((serie1, serie2) => serie1.order - serie2.order);
        this.series = series;
      });
    },
    getRarities() {
      getRarities().then(rarities => {
        rarities.sort((rarity1, rarity2) => rarity1.order - rarity2.order);
        this.rarities = rarities;
      });
    },
    getCategories() {
      getCategories().then(categories => {
        categories.sort((category1, category2) => category1.order - category2.order);
        this.categories = categories;
      });
    },
    getSubCategories() {
      getSubCategories().then(subCategories => {
        subCategories.sort((subCategory1, subCategory2) => subCategory1.order - subCategory2.order);
        this.subCategories = subCategories;
      });
    },
    mouseOutCard(event) {
      event.target.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
    },
    mouseDown(event) {
      event.target.style.transform = "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
    },
    mouseUp(event) {
      event.target.style.transform = "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
    },
    handleMove(event) {
      // Source : https://codepen.io/technokami/pen/abojmZa
      const xVal = event.layerX;
      const yVal = event.layerY;
      const element = event.target;
      /*
       * Calculate rotation valuee along the Y-axis * Here the multiplier 20 is to control the rotation
       * You can change the value and see the results
       */
      const yRotation = 20 * ((xVal - element.width / 2) / element.width);
      /* Calculate the rotation along the X-axis */
      const xRotation = -20 * ((yVal - element.height / 2) / element.height);
      /* Generate string for CSS transform property and apply*/
      element.style.transform =
        "perspective(500px) scale(1.1) rotateX(" + xRotation + "deg) rotateY(" + yRotation + "deg)";
    },
    filterAndSort() {
      console.debug("COUCOU filterAndSort");
      this.filteredCollection = this.collection
        .filter(card => this.raritiesFilter === "" || this.raritiesFilter === card.rarity)
        .filter(card => this.seriesFilter === "" || this.seriesFilter === card.serie)
        .filter(card => this.categoriesFilter === "" || this.categoriesFilter === card.category)
        .filter(card => this.subCategoriesFilter === "" || this.subCategoriesFilter === card.subCategory)
        .sort((card1, card2) => this.sortCard(card1, card2));
    },
    sortCard(card1, card2) {
      // Priorité du tri : Série > Rareté > Catégorie > Sous Catégorie > Ordre des cartes
      if (card1.serieOrder !== card2.serieOrder) {
        return card1.serieOrder - card2.serieOrder;
      }

      if (card1.rarityOrder !== card2.rarityOrder) {
        return card1.rarityOrder - card2.rarityOrder;
      }

      if (card1.categoryOrder !== card2.categoryOrder) {
        return card1.categoryOrder - card2.categoryOrder;
      }

      if (card1.subCategoryOrder !== card2.subCategoryOrder) {
        return card1.subCategoryOrder - card2.subCategoryOrder;
      }

      return card1.order - card2.order;
    },
  },
  mounted() {
    this.getCollection("29041766");
    this.getSeries();
    this.getSubCategories();
    this.getRarities();
    this.getCategories();
  },
};
</script>

<style>
.lock-scroll {
  overflow-y: hidden;
}
</style>
