<template>
  <div class="w-64 h-full">
    <div class="fixed block top-0 left-0 h-5 w-7 m-3 z-40 lg:hidden" @click="toggleMenu">
      <label class="h-5 w-7">
        <span
          class="absolute block top-0 left-0 h-0 w-7 ring-2 transition duration-1000 ease-in-out"
          :class="{
            'transform rotate-45 origin-top-left ring-indigo-150': showMenu,
            '-rotate-45 origin-top-left ring-indigo-950': !showMenu,
          }"
        ></span>
        <span
          class="absolute block top-1/2 left-0 h-0 w-7 ring-2 transition duration-300 ease-in-out delay-200"
          :class="{ 'ring-indigo-150 opacity-0': showMenu, ' ring-indigo-950': !showMenu }"
        ></span>
        <span
          class="absolute block bottom-0 left-0 h-0 w-7 ring-2 transition duration-1000 ease-in-out"
          :class="{
            'transform -rotate-45 origin-bottom-left ring-2 ring-indigo-150': showMenu,
            'rotate-45 origin-bottom-left ring-2 ring-indigo-950': !showMenu,
          }"
        ></span>
      </label>
    </div>

    <div
      id="side-menu"
      class="border-solid shadow-lg transition duration-500 ease-in-out w-64 bg-indigo-950 h-full text-gray-100 font-bold text-indigo-150 fixed top-0 left-0 transform lg:transform-none z-10"
      :class="{ 'translate-x-0': showMenu, '-translate-x-full': !showMenu }"
    >
      <div class="my-4 mr-3 flex justify-center">
        <img src="../assets/svg/logo.svg" height="200" width="200" alt="Logo du streamer Tetryl" />
      </div>
      <div class="flex justify-evenly mx-8 gap-4">
        <a class="hover:opacity-80" href="https://www.twitch.tv/letetryl"
          ><img class="h-5" src="../assets/svg/rs-twitch.svg" alt="icone twitch"
        /></a>
        <a class="hover:opacity-80" href="https://www.youtube.com/user/DilanNoKaze"
          ><img class="h-5" src="../assets/svg/rs-youtube.svg" alt="icone youtube"
        /></a>
        <a class="hover:opacity-80" href="https://twitter.com/LeTetryl"
          ><img class="h-5" src="../assets/svg/rs-twitter.svg" alt="icone twitter"
        /></a>
        <a class="hover:opacity-80" href="https://www.instagram.com/tetryl_"
          ><img class="h-5" src="../assets/svg/rs-insta.svg" alt="icone instagram"
        /></a>
        <a class="hover:opacity-80" href="https://discord.gg/K22x6Qkwwu"
          ><img class="h-5" src="../assets/svg/rs-discord.svg" alt="icone discord"
        /></a>
      </div>

      <nav class="pl-3 mt-10">
        <div class="py-2 flex cursor-pointer group" @click="go('')">
          <div class="flex justify-center w-1/5 pr-3 h-6">
            <img src="../assets/svg/btn-qui-suis-je.svg" alt="" class="box-border h-6" />
          </div>
          <span class="group-hover:text-indigo-300">Qui-suis je ?</span>
          <svg width="20" height="25" class="menu-item-triangle">
            <polygon points="25,0 0,12.5 25,25" />
          </svg>
        </div>
        <div class="menu-item group" @click="go('planning')">
          <div class="flex justify-center w-1/5 pr-3">
            <img src="../assets/svg/btn-planning.svg" alt="" class="box-border h-6" />
          </div>
          <span class="group-hover:text-indigo-300">Planning</span>
          <svg width="20" height="25" class="menu-item-triangle">
            <polygon points="25,0 0,12.5 25,25" />
          </svg>
        </div>
        <div class="menu-item group" @click="go('bot')">
          <div class="flex justify-center w-1/5 pr-3">
            <img src="../assets/svg/btn-bot.svg" alt="" class="h-6 justify-self-end" />
          </div>
          <span class="group-hover:text-indigo-300">Demandez à GlutoBot</span>
          <svg width="20" height="25" class="menu-item-triangle">
            <polygon points="25,0 0,12.5 25,25" />
          </svg>
        </div>
        <div class="menu-item group" @click="go('collection')">
          <div class="flex justify-center w-1/5 pr-3">
            <img src="../assets/svg/btn-ma-collec.svg" alt="" class="h-6 inline" />
          </div>
          <span class="group-hover:text-indigo-300">Votre collection</span>
          <svg width="20" height="25" class="menu-item-triangle">
            <polygon points="25,0 0,12.5 25,25" />
          </svg>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    go(url) {
      location.replace(`/${url}`);
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
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

<style></style>