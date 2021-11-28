<template>
  <div id="side-menu" class="border-solid shadow-lg
        bg-indigo-950 text-gray-100 font-bold text-indigo-150 fixed top-0 left-0">
    <div class="my-4 mr-3 flex justify-center">
      <img src="../assets/logo.png" height="200" width="200" alt="Logo du streamer Tetryl"/>
    </div>

    <div class="pl-3">
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

    </div>
  </div>


</template>

<script>
export default {
  name: "SideMenu",
  methods: {
    go(url) {
      location.replace(`/${url}`)
    }
  }
}
</script>

<style>


</style>