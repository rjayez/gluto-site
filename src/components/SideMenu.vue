<template>

  <div class="fixed top-0 left z-40 md:hidden">
    <a class="block m-4" @click="toggleMenu">
      <label class="menu-open-button" >
        <span class="block w-7 border-solid border-b-2 border-indigo-950 h-1 mb-1" :class="{'bg-indigo-950' : !showMenu, 'bg-indigo-150' : showMenu}"></span>
        <span class="block w-7 border-solid border-b-2 border-indigo-950 h-1 mb-1" :class="{'bg-indigo-950' : !showMenu, 'bg-indigo-150' : showMenu}"></span>
        <span class="block w-7 border-solid border-b-2 border-indigo-950 h-1 mb-1" :class="{'bg-indigo-950' : !showMenu, 'bg-indigo-150' : showMenu}"></span>
      </label>
    </a>
  </div>

  <div id="side-menu" class="border-solid shadow-lg transition duration-500 ease-in-out w-64
        bg-indigo-950 h-full text-gray-100 font-bold text-indigo-150 fixed top-0 left-0  transform md:transform-none z-10"
  :class="{'translate-x-0' : showMenu, '-translate-x-full' : !showMenu}">
    <div class="my-4 mr-3 flex justify-center">
      <img src="../assets/logo.png" height="200" width="200" alt="Logo du streamer Tetryl"/>
    </div>
    <div class="flex justify-evenly mx-8 gap-4">
      <a class="inline" href="https://www.twitch.tv/letetryl"><img class="h-5" src="../assets/rs-twitch.png" alt="icone twitch" /></a>
      <a href="https://www.youtube.com/user/DilanNoKaze"><img class="h-5" src="../assets/rs-youtube.png" alt="icone youtube"/></a>
      <a href="https://twitter.com/LeTetryl"><img class="h-5" src="../assets/rs-twitter.png" alt="icone twitter"/></a>
      <a href="https://www.instagram.com/tetryl_"><img class="h-5" src="../assets/rs-insta.png" alt="icone instagram"/></a>
      <a href="https://discord.gg/K22x6Qkwwu"><img class="h-5" src="../assets/rs-discord.png" alt="icone discord"/></a>
    </div>

    <nav class="pl-3 mt-8">
      <div class="py-2 flex cursor-pointer group" @click="go('')">
        <div class="flex justify-center w-1/5 pr-3 h-6">
          <img src="../assets/btn-qui-suisje.png" alt="" class="box-border h-6"/>
        </div>
        <span class="group-hover:text-indigo-300">Qui-suis je ?</span>
        <svg width="20" height="25" class="menu-item-triangle">
          <polygon points="25,0 0,12.5 25,25"/>
        </svg>
      </div>
      <div class="menu-item group" @click="go('planning')">
        <div class="flex justify-center w-1/5 pr-3">
          <img src="../assets/btn-planning.png" alt="" class="box-border h-6"/>
        </div>
        <span class="group-hover:text-indigo-300">Planning</span>
        <svg width="20" height="25" class="menu-item-triangle">
          <polygon points="25,0 0,12.5 25,25"/>
        </svg>
      </div>
      <div class="menu-item group" @click="go('bot')">
        <div class="flex justify-center w-1/5 pr-3">
        <img src="../assets/btn-bot.png" alt="" class="h-6 justify-self-end"/>
          </div>
          <span class="group-hover:text-indigo-300">Demandez à GlutoBot</span>
        <svg width="20" height="25" class="menu-item-triangle">
          <polygon points="25,0 0,12.5 25,25"/>
        </svg>
      </div>
      <div class="menu-item group" @click="go('collection')">
        <div class="flex justify-center w-1/5 pr-3">
          <img src="../assets/btn-ma-collec.png" alt="" class="h-6 inline"/>
        </div>
        <span class="group-hover:text-indigo-300">Votre collection</span>
        <svg width="20" height="25" class="menu-item-triangle">
          <polygon points="25,0 0,12.5 25,25"/>
        </svg>
      </div>

    </nav>
  </div>


</template>

<script>
export default {
  name: "SideMenu",
  data (){
    return {
      showMenu: false,

    }
  },
  methods: {
    go(url) {
      location.replace(`/${url}`)
    },
    toggleMenu() {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style>


</style>