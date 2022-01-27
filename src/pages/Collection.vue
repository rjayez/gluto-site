<template>
  <title>La collection de carte</title>
  <div class="mx-0">
    <h1 class="page-title">Votre collection</h1>
    <h2 class="page-subtitle">Toutes vos cartes tirés durant les streams sont ici !</h2>
    <div class="m-2 flex flex-col md:flex-row">
      <select class="my-2 mx-auto w-72 rounded-lg bg-indigo-950 p-2 text-indigo-150">
        <option selected disabled>Sélectionne la série</option>
        <option>Le starter pack</option>
        <option class="bg-indigo-850">Les petites bouboules</option>
        <option>La commu</option>
      </select>
      <select class="my-2 mx-auto w-72 rounded-lg bg-indigo-950 p-2 text-indigo-150" name="Rareté">
        <option selected disabled>Rareté</option>
        <option>Commune</option>
        <option class="bg-indigo-850">Rare</option>
        <option>Légendaire</option>
      </select>
    </div>
    <div class="my-5 grid grid-cols-1 justify-evenly gap-5 px-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <div v-for="card in cards" class="mx-auto my-4">
        <img
          v-if="card.revealed"
          :src="card.url"
          alt="Carte face recto"
          class="h-[361px] w-[253px] cursor-pointer object-scale-down hover:rounded-xl hover:shadow-2xl hover:shadow-violet-500"
          @click="showDetails(card)"
        />
        <img
          v-else
          src="../assets/cards/back.png"
          alt="Carte face verso"
          class="h-[361px] w-[253px] object-scale-down hover:rounded-xl hover:shadow-2xl hover:shadow-violet-500"
        />
      </div>
    </div>
  </div>
  <div
    v-if="showCardDetails"
    class="fixed top-0 left-0 z-50 flex h-screen w-screen flex-col items-center justify-center overflow-scroll pt-32 backdrop-blur-sm backdrop-brightness-50 backdrop-contrast-150 backdrop-grayscale xl:flex-row xl:pt-0"
  >
    <img
      :src="imgCard.card3"
      alt="Carte detaille"
      class="mx-10 mt-32 mb-8 max-w-[390px] cursor-pointer rounded-2xl object-scale-down hover:shadow-2xl hover:shadow-violet-500"
    />
    <div class="mb-32 max-w-[390px] px-4 text-xl text-indigo-150 lg:ml-10">
      <p>Description</p>
      <p class="my-10">Incarnation : Glutobot</p>
      <p>Bienvenue dans la secte, installez vous, on a du fromage !</p>
    </div>
    <div
      class="absolute top-0 right-0 z-40 m-3 block h-5 w-7 scale-100 cursor-pointer opacity-100 lg:scale-150"
      @click="closeDetails"
    >
      <label class="h-5 w-7">
        <span class="absolute top-0 left-0 block h-0 w-7 origin-top-left rotate-45 ring-2 ring-indigo-750"></span>
        <span class="absolute bottom-0 right-0 block h-0 w-7 origin-top-left -rotate-45 ring-2 ring-indigo-750"></span>
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
        revealed: false,
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
