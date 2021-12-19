<template>
  <div class="mx-0">
    <h1 class="page-title">Votre collection</h1>
    <h2 class="page-subtitle">Toutes vos cartes tirés durant les streams sont ici !</h2>
    <div class="flex justify-center my-2">
      <select class="p-2 rounded-lg bg-indigo-950 text-indigo-150">
        <option selected disabled>Sélectionne la série</option>
        <option>Le starter pack</option>
        <option class="bg-indigo-850">Les petites bouboules</option>
        <option>La commu</option>
      </select>
      <select class="p-2 rounded-lg bg-indigo-950 text-indigo-150 ml-4" name="Rareté">
        <option selected disabled>Rareté</option>
        <option>Commune</option>
        <option class="bg-indigo-850">Rare</option>
        <option>Légendaire</option>
      </select>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 justify-evenly my-5">
      <div v-for="card in cards" class="mx-auto my-4">
        <img
          v-if="card.revealed"
          src="../assets/cards/back.png"
          v-bind:src="card.url"
          alt="Carte face recto"
          class="object-scale-down h-[361px] w-[253px] hover:shadow-2xl hover:shadow-violet-500 hover:rounded-xl"
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
</template>

<script>
export default {
  name: "Collection",
  data: () => ({
    cards: [
      {
        id: 1,
        url: "../assets/cards/carte3.png",
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
        url: "../assets/cards/3.png",
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
  }),
};
</script>

<style scoped>
body {
  @apply flex;
}
</style>
