<template>
  <div class="mx-0">
    <h1 class="page-title">Votre collection</h1>
    <h2 class="page-subtitle">Toutes vos cartes tirés durant les streams sont ici !</h2>
    <div class="flex flex-col md:flex-row m-2">
      <select class="p-2 my-2 w-72 rounded-lg bg-indigo-950 text-indigo-150 mx-auto">
        <option selected disabled>Sélectionne la série</option>
        <option>Le starter pack</option>
        <option class="bg-indigo-850">Les petites bouboules</option>
        <option>La commu</option>
      </select>
      <select class="p-2 my-2 w-72 rounded-lg bg-indigo-950 text-indigo-150 mx-auto" name="Rareté">
        <option selected disabled>Rareté</option>
        <option>Commune</option>
        <option class="bg-indigo-850">Rare</option>
        <option>Légendaire</option>
      </select>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 px-4 justify-evenly my-5">
      <div v-for="card in cards" class="mx-auto my-4">
        <img
          v-if="card.revealed"
          :src="card.url"
          alt="Carte face recto"
          class="object-scale-down h-[361px] w-[253px] hover:shadow-2xl hover:shadow-violet-500 hover:rounded-xl cursor-pointer"
          @click="showDetails(card)"
        />
        <img
          v-else
          src="../assets/cards/back.png"
          alt="Carte face verso"
          class="object-scale-down h-[361px] w-[253px] hover:shadow-2xl hover:shadow-violet-500 hover:rounded-xl"
        />
      </div>
    </div>
  </div>
  <div
    v-if="showCardDetails"
    class="fixed top-0 left-0 h-screen w-screen pt-32 xl:pt-0 z-50 backdrop-grayscale backdrop-contrast-150 overflow-scroll backdrop-brightness-50 backdrop-blur-sm flex flex-col xl:flex-row justify-center items-center"
  >
    <img
      :src="imgCard.card3"
      alt="Carte detaille"
      class="object-scale-down pt-32 mb-8 max-w-[390px] px-10 hover:shadow-2xl hover:shadow-violet-500 rounded-xl cursor-pointer"
    />
    <div class="text-indigo-150 max-w-[390px] text-xl mb-32 lg:ml-10">
      <p>Description</p>
      <p class="my-10">Incarnation : Glutobot</p>
      <p>Bienvenue dans la secte, installez vous, on a du fromage !</p>
    </div>
    <div
      class="absolute block top-0 right-0 h-5 w-7 m-3 z-40 cursor-pointer opacity-100 scale-100 lg:scale-150"
      @click="closeDetails"
    >
      <label class="h-5 w-7">
        <span class="absolute block top-0 left-0 h-0 w-7 ring-2 ring-indigo-750 origin-top-left rotate-45"></span>
        <span class="absolute block bottom-0 right-0 h-0 w-7 ring-2 ring-indigo-750 origin-top-left -rotate-45"></span>
      </label>
    </div>
  </div>
</template>

<script>
import cards from "../assets/cards";

export default {
  name: "Collection",
  data: () => ({
    imgCard: cards,
    cards: [
      {
        id: 1,
        url: cards.card3,
        revealed: true,
        rarete: "",
      },
      {
        id: 2,
        revealed: false,
      },
      {
        id: 3,
        revealed: false,
      },
      {
        id: 4,
        revealed: false,
      },
      {
        id: 5,
        revealed: false,
      },
      {
        id: 1,
        url: cards.card3,
        revealed: true,
        rarete: "",
      },
      {
        id: 2,
        revealed: false,
      },
      {
        id: 3,
        revealed: false,
      },
      {
        id: 4,
        revealed: false,
      },
      {
        id: 5,
        revealed: false,
      },
    ],
    showCardDetails: false,
  }),
  methods: {
    showDetails(card) {
      this.showCardDetails = true;
      document.body.classList.add("lock-scroll");
    },
    closeDetails() {
      this.showCardDetails = false;
      document.body.classList.remove("lock-scroll");
    },
  },
};
</script>

<style>
.lock-scroll {
  overflow-y: hidden;
}
</style>
