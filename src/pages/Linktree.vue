<template>
  <div class="flex h-screen flex-col items-center bg-black pt-5 text-white">
    <h3 class="titre mb-4 text-transparent">LE TETRYL</h3>
    <div class="text-center text-sm">
      <p>Créateur de contenus spécialisé JRPG</p>
      <p>Tous les liens pour me retrouver</p>
    </div>
    <div class="mt-3 flex flex-col items-center">
      <h4 class="entete">Le contenu</h4>
      <button class="btn-contenu" href="#">
        <font-awesome-icon icon="fa-brands fa-youtube" />
        Ma chaine Youtube
      </button>
      <button class="btn-contenu">
        <font-awesome-icon icon="fa-brands fa-youtube" />
        Les VOD
      </button>
      <button class="btn-contenu">
        <font-awesome-icon icon="fa-brands fa-twitch" />
        Les Streams
      </button>
    </div>

    <div class="mt-2 flex flex-col items-center">
      <h4 class="entete">Les réseaux</h4>
      <button class="btn-reseau">
        <font-awesome-icon icon="fa-brands fa-discord" />
        Discord
      </button>
      <button class="btn-reseau">
        <font-awesome-icon icon="fa-brands fa-twitter" />
        Twitter
      </button>
      <button class="btn-reseau">
        <font-awesome-icon icon="fa-brands fa-instagram" />
        Instagram
      </button>
      <button class="btn-reseau" href="#">Youtube Shorts</button>
      <button class="btn-reseau">
        <font-awesome-icon icon="fa-brands fa-tiktok" />
        Tiktok
      </button>
    </div>
    <p class="mail text-sm italic">Mail pro : tetryl.pro @ gmail.com</p>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "Linktree.vue",
  components: { FontAwesomeIcon },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");

body {
  background: #0c0c0c;
}

.titre {
  font-family: "Poppins", sans-serif;
  @apply w-[400px] bg-transparent bg-[url('src/assets/map.png')] bg-clip-text bg-repeat text-center text-9xl font-black
  leading-[97px] -tracking-widest text-transparent;
}

.entete {
  @apply text-xl font-normal;
  text-shadow: 2px 2px #212421, 1px 1px #212021;
  font-family: Verdana, sans-serif;
}

.btn-contenu {
  @apply my-1.5 w-[400px] rounded-lg  border-[1px] border-solid bg-indigo-650 p-3.5 font-normal text-white;
  text-shadow: 2px 2px #212421, 1px 1px #212021;
  font-family: "Poppins", sans-serif;
  background: #732dd6;
  background: linear-gradient(-45deg, #9258ef, #743dcc, #351568, #732dd6);
  background-size: 500% 500%;
  animation: gradient 20s ease infinite;

  box-shadow: 1px 1px #e7dfe7, 0 -1px #e7dfe7, 1px -1px #e7dfe7, -1px 1px #e7dfe7, 0 -2px #9c9a9c, -2px 0 #7b757b,
    0 2px #424542;
}

.btn-contenu:hover {
  background: linear-gradient(-45deg, #90ee52, #6acc3d, #156845, #2dd6ba);
  transition: 1s;
}

.btn-reseau {
  @apply my-1.5 w-[400px] rounded-lg  border-[1px] border-solid p-3.5 font-normal text-white;
  text-shadow: 2px 2px #212421, 1px 1px #212021;
  font-family: "Poppins", sans-serif;
  background: #120a58;
  background: linear-gradient(-45deg, #52caee, #15408f, #120a58, #4923d5);
  background-size: 500% 500%;
  animation: gradient 20s ease infinite;
}

.btn-reseau:hover {
  background: linear-gradient(-45deg, #90ee52, #6acc3d, #156845, #2dd6ba);
  transition: 1s;
}

.mail {
  font-family: Verdana, sans-serif;
  text-shadow: 2px 2px #212421, 1px 1px #212021;
}
</style>
