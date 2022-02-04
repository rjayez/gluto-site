<template>
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
      <div class="space-y-6 bg-white">
        <div class="w-full items-center space-y-4 p-4 text-gray-500 md:inline-flex md:space-y-0">
          <h2 class="mr-auto max-w-sm pl-5 md:w-1/3">Image</h2>
          <div>
            <div class="relative"><input type="file" name="file" required /> <br /></div>
            <div class="relative">
              <input type="submit" name="submit" value="Upload to Amazon S3" />
            </div>
          </div>
        </div>
        <hr />
        <div class="w-full items-center space-y-4 p-4 py-2 text-gray-500 md:inline-flex md:space-y-0">
          <h2 class="mr-auto max-w-sm pl-5 md:w-1/3">Rareté</h2>
          <select
            id="rarete"
            class="focus:ring-primary-500 focus:border-primary-500 block w-52 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none"
            name="rarete"
          >
            <option value="">Sélectionne une rareté</option>
            <option value="dog">Commun</option>
            <option value="cat">Rare</option>
            <option value="hamster">Légendaire</option>
          </select>
        </div>
        <hr />
        <div class="w-full items-center space-y-4 p-4 py-2 text-gray-500 md:inline-flex md:space-y-0">
          <h2 class="mr-auto max-w-sm pl-5 md:w-1/3">Set</h2>

          <select
            id="animals"
            class="focus:ring-primary-500 focus:border-primary-500 block w-52 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none"
            name="rarete"
          >
            <option value="">Sélectionne un set</option>
            <option value="dog">Starter Pack</option>
          </select>
        </div>
        <hr />
        <div class="flex justify-end px-4 pb-4 text-gray-500">
          <button
            type="submit"
            class="rounded-lg bg-blue-600 py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-plus"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import { uploadCards } from "../../services/cards";

export default {
  name: "CardAdd",
  methods: {
    upload: function (event) {
      event.preventDefault();
      const file = event.target.elements.file.files[0];
      uploadCards(file).then(res => console.log(res));
    },
  },
};
</script>

<style scoped></style>
