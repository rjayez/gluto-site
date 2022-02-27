<template>
  <div class="grid w-full grid-cols-2 gap-5">
    <CardEdit :selected-card="selectedCard" />

    <div>
      <button class="form-button ml-3 mb-3" @click="refreshCollection">Refresh</button>
      <div class="grid auto-rows-min grid-cols-4 gap-3">
        <div v-for="card in collection" class="mx-auto h-fit w-40 shadow-2xl hover:shadow-indigo-850">
          <img :src="card.pictureUrl" alt="image carte" class="h-fit w-40" @click="selectCard(card)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardEdit from "./update/CardEdit.vue";
import { getCards } from "../../services/cards";

export default {
  name: "CardEdition",
  components: { CardEdit },

  data() {
    return {
      collection: [],
      selectedCard: undefined,
    };
  },
  methods: {
    getCollection() {
      getCards().then(data => (this.collection = data));
    },
    selectCard(card) {
      this.selectedCard = card;
      this.scrollToTop();
    },
    refreshCollection() {
      this.getCollection();
    },
    scrollToTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
  },
  mounted() {
    this.getCollection();
  },
};
</script>

<style scoped></style>
