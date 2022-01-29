<template>
  <div class="h-full w-64">
    <div
      class="fixed top-0 left-0 z-40 ml-1 mt-1 block h-9 w-11 rounded-lg transition duration-700 ease-in-out lg:hidden"
      :class="{ 'bg-indigo-150': !showMenu }"
    >
      <div class="fixed top-0 left-0 m-3 h-5 w-7" @click="toggleMenu">
        <label class="h-5 w-7">
          <span
            class="burger-bar top-0 ring-2 transition duration-1000 ease-in-out"
            :class="{
              'origin-top-left rotate-45 transform ring-indigo-150': showMenu,
              'origin-top-left -rotate-0 ring-indigo-950': !showMenu,
            }"
          ></span>
          <span
            class="burger-bar top-1/2 ring-2 transition delay-200 duration-300 ease-in-out"
            :class="{ 'opacity-0 ring-indigo-150': showMenu, ' ring-indigo-950': !showMenu }"
          ></span>
          <span
            class="burger-bar bottom-0 ring-2 transition duration-1000 ease-in-out"
            :class="{
              'origin-bottom-left -rotate-45 transform ring-2 ring-indigo-150': showMenu,
              'origin-bottom-left rotate-0 ring-2 ring-indigo-950': !showMenu,
            }"
          ></span>
        </label>
      </div>
    </div>

    <div
      id="side-menu"
      class="fixed top-0 left-0 z-10 h-full w-64 transform border-solid bg-indigo-950 font-bold text-gray-100 text-indigo-150 shadow-lg transition duration-500 ease-in-out lg:transform-none"
      :class="{ 'translate-x-0': showMenu, '-translate-x-full': !showMenu }"
    >
      <div class="mt-4 mb-6 mr-3 flex justify-center">
        <a href="/"><img src="../assets/svg/logo.svg" height="200" width="200" alt="Logo du streamer Tetryl" /></a>
      </div>
      <div class="mx-8 flex justify-evenly gap-4">
        <a class="hover:opacity-80" href="https://www.twitch.tv/letetryl"
          ><img class="h-5" height="20" src="../assets/svg/rs-twitch.svg" alt="icone twitch"
        /></a>
        <a class="hover:opacity-80" href="https://www.youtube.com/user/DilanNoKaze"
          ><img class="h-5" height="20" src="../assets/svg/rs-youtube.svg" alt="icone youtube"
        /></a>
        <a class="hover:opacity-80" href="https://twitter.com/LeTetryl"
          ><img class="h-5" height="20" src="../assets/svg/rs-twitter.svg" alt="icone twitter"
        /></a>
        <a class="hover:opacity-80" href="https://www.instagram.com/tetryl_"
          ><img class="h-5" height="20" src="../assets/svg/rs-insta.svg" alt="icone instagram"
        /></a>
        <a class="hover:opacity-80" href="https://discord.gg/K22x6Qkwwu"
          ><img class="h-5" height="20" src="../assets/svg/rs-discord.svg" alt="icone discord"
        /></a>
        <a class="hover:opacity-80" href="https://www.tiktok.com/@letetryl"
          ><img class="h-5" height="20" src="../assets/svg/rs-tiktok.svg" alt="icone tiktok"
        /></a>
      </div>

      <nav class="mt-10 pl-3">
        <div class="group flex cursor-pointer py-2" @click="go('')">
          <div class="flex h-6 w-1/5 justify-center pr-3">
            <img src="../assets/svg/btn-qui-suis-je.svg" alt="" class="box-border h-6" />
          </div>
          <span class="group-hover:text-indigo-300">Qui-suis je ?</span>
          <svg width="20" height="25" class="menu-item-triangle">
            <polygon points="25,0 0,12.5 25,25" />
          </svg>
        </div>
        <div class="menu-item group" @click="go('planning')">
          <div class="flex w-1/5 justify-center pr-3">
            <img src="../assets/svg/btn-planning.svg" alt="logo planning" class="box-border h-6" />
          </div>
          <span class="group-hover:text-indigo-300">Planning</span>
          <svg width="20" height="25" class="menu-item-triangle">
            <polygon points="25,0 0,12.5 25,25" />
          </svg>
        </div>
        <div class="menu-item group" @click="go('bot')">
          <div class="flex w-1/5 justify-center pr-3">
            <img src="../assets/svg/btn-bot.svg" alt="logo bot" class="h-6 justify-self-end" />
          </div>
          <span class="group-hover:text-indigo-300">Demandez à GlutoBot</span>
          <svg width="20" height="25" class="menu-item-triangle">
            <polygon points="25,0 0,12.5 25,25" />
          </svg>
        </div>
        <div class="menu-item group" @click="go('collection')">
          <div class="flex w-1/5 justify-center pr-3">
            <img src="../assets/svg/btn-ma-collec.svg" alt="logo collection" class="inline h-6" />
          </div>
          <span class="group-hover:text-indigo-300">Votre collection</span>
          <svg width="20" height="25" class="menu-item-triangle">
            <polygon points="25,0 0,12.5 25,25" />
          </svg>
        </div>
      </nav>
      <a class="absolute bottom-1 ml-10 mb-10 block text-lg" @click="showIssueModal = true"
        ><label class="cursor-pointer">Un bug / une idée ?</label></a
      >
    </div>
  </div>
  <IssueModal v-if="showIssueModal" @close="showIssueModal = false" />
</template>

<script>
import IssueModal from "./IssueModal.vue";

export default {
  name: "SideMenu",
  components: { IssueModal },
  data() {
    return {
      showMenu: false,
      showIssueModal: false,
    };
  },
  methods: {
    go(url) {
      location.replace(`/${url}`);
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    toggleIssueModal() {
      this.showIssueModal = !this.showIssueModal;
    },
  },
  mounted() {
    document.addEventListener("click", evt => {
      const flyoutEl = document.getElementById("page-component");
      let targetEl = evt.target; // clicked element
      do {
        if (targetEl === flyoutEl) {
          // This is a click inside, does nothing, just return.
          console.log("Clicked inside");
          this.showMenu = false;
          return;
        }
        // Go up the DOM
        targetEl = targetEl.parentNode;
      } while (targetEl);
    });
  },
};
</script>

<style>
.burger-bar {
  @apply absolute left-0 block h-0 w-7;
}
</style>
