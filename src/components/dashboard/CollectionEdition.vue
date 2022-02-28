<template>
  <div class="grid w-full grid-cols-2 gap-5">
    <CardEdit :selected-card="selectedCard" @refresh="refreshCollection" />

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
import { notify } from "@kyvg/vue3-notification";

export default {
  name: "CollectionEdition",
  components: { CardEdit },

  data() {
    return {
      collection: [],
      selectedCard: undefined,
    };
  },
  methods: {
    getCollection() {
      return getCards().then(data => (this.collection = data));
    },
    selectCard(card) {
      this.selectedCard = card;
      this.scrollToTop();
    },
    refreshCollection() {
      this.getCollection().then(() => notify({ title: "Collection à jour !", type: "info" }));
      this.selectedCard = undefined;
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
