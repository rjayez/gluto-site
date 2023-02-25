<template>
  <div class="bg-crystal z-10 flex h-full flex-col items-center bg-[#0c0c0c] bg-top bg-no-repeat py-10 text-white">
    <h3 class="titre">LE TETRYL</h3>
    <div class="text-center text-sm">
      <p>Créateur de contenus spécialisé JRPG</p>
      <p>Tous les liens pour me retrouver</p>
    </div>
    <div class="mt-3 flex flex-col items-center">
      <h4 class="entete">Le contenu</h4>
      <a href="https://www.youtube.com/@Tetryl">
        <button class="btn-contenu">
          <font-awesome-icon icon="fa-brands fa-youtube" />
          Ma chaine Youtube
        </button>
      </a>
      <a href="https://www.youtube.com/@tetryl-VOD">
        <button class="btn-contenu">
          <font-awesome-icon icon="fa-brands fa-youtube" />
          Les VOD
        </button>
      </a>
      <a href="https://www.twitch.tv/letetryl">
        <button class="btn-contenu">
          <font-awesome-icon icon="fa-brands fa-twitch" />
          Les Streams
        </button>
      </a>
    </div>

    <div class="mt-2 flex flex-col items-center">
      <h4 class="entete">Les réseaux</h4>
      <a href="https://discord.gg/K22x6Qkwwu">
        <button class="btn-reseau">
          <font-awesome-icon icon="fa-brands fa-discord" />
          Discord
        </button>
      </a>
      <a href="https://twitter.com/LeTetryl">
        <button class="btn-reseau">
          <font-awesome-icon icon="fa-brands fa-twitter" />
          Twitter
        </button>
      </a>
      <a href="https://www.instagram.com/tetryl_/">
        <button class="btn-reseau">
          <font-awesome-icon icon="fa-brands fa-instagram" />
          Instagram
        </button>
      </a>
      <a href="https://www.youtube.com/c/LeTetrylShorts">
        <button class="btn-reseau">
          <font-awesome-icon icon="fa-solid fa-mobile-screen-button" />
          Youtube Shorts
        </button>
      </a>
      <a href="https://www.tiktok.com/@letetryl">
        <button class="btn-reseau">
          <font-awesome-icon icon="fa-brands fa-tiktok" />
          Tiktok
        </button>
      </a>
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

.titre {
  font-family: "Poppins", sans-serif;
  @apply mb-4 w-[300px] bg-linktree-titre bg-clip-text text-center text-7xl font-black leading-[97px] -tracking-[6px] text-transparent text-transparent sm:w-[400px] sm:text-9xl sm:leading-[96px];
  animation-name: MOVE-BG;
  animation-duration: 70s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.bg-sword {
  background-image: url("../assets/linktree/sword-tetryl.svg");
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 60%;
  background-position-y: 20px;
}

.bg-crystal {
  background-color: #0c0c0c;
  background-image: url("../assets/linktree/crystal_01.png"), url("../assets/linktree/crystal_02.png"),
    url("../assets/linktree/crystal_03.png");
  background-repeat: repeat-y, repeat-y, repeat-y;
  background-position: center, center, center;
  background-size: auto, auto, auto;
  animation-name: MOVE-CRISTAL;
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.entete {
  @apply text-xl font-normal;
  text-shadow: 2px 2px #212421, 1px 1px #212021;
  font-family: Verdana, sans-serif;
  animation: apparition 1s forwards;
}

p {
  text-shadow: 2px 2px #212421, 1px 1px #212021;
}

.btn-contenu {
  @apply my-1.5 w-[300px] rounded-lg border-[1px]  border-solid bg-indigo-650 p-3.5 font-normal text-white sm:w-[400px];
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
  /*background: linear-gradient(-45deg, #90ee52, #6acc3d, #156845, #2dd6ba);*/
  background: linear-gradient(-45deg, #ee9852, #ff9121, #fcac3f, #d6a62d);
  transition: 1s;
}

.btn-reseau {
  @apply my-1.5 w-[300px] rounded-lg border-[1px]  border-solid p-3.5 font-normal text-white sm:w-[400px];
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
  animation: apparition 3s forwards;
}

@keyframes apparition {
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

@keyframes MOVE-BG {
  from {
    background-position-y: 0;
  }
  to {
    background-position-y: 100%;
  }
}

@keyframes MOVE-CRISTAL {
  from {
    background-position-y: 0;
  }
  to {
    background-position-y: 300%;
  }
}
</style>
