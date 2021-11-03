<template>
  <div id="side-menu"
       class="border-solid shadow-lg h-screen bg-indigo-950 pl-3 text-gray-100 font-bold text-indigo-150">
    <div class="-mt-20"><img src="../assets/logo.png" alt="Logo du streamer Tetryl"/></div>

    <div class="">
      <div class="menu-item group" @click="go('')"><img src="../assets/btn-qui-suisje.png" alt="" class="h-6 inline mr-3"/><span
          class="group-hover:text-indigo-300">Qui-suis
          je ?</span>
        <svg width="30" height="30"
             class="menu-item-triangle">
          <polygon points="30,0 0,15 30,30"/>
        </svg>
      </div>
      <div class="menu-item group" @click="go('planning')"><img src="../assets/btn-planning.png" alt=""
                                        class="box-border h-6 w-6 inline mr-5"/>
        <span class="group-hover:text-indigo-300">Planning</span>
        <svg width="30" height="30" class="menu-item-triangle">
          <polygon points="30,0 0,15 30,30"/>
        </svg>
      </div>
      <div class="menu-item group" @click="go('bot')"><img src="../assets/btn-bot.png" alt="" class="h-6 inline mr-5"/><span
          class="group-hover:text-indigo-300">Demandez à GlutoBot</span>
        <svg width="30" height="30"
             class="menu-item-triangle">
          <polygon points="30,0 0,15 30,30"/>
        </svg>
      </div>
      <div class="menu-item group" @click="go('collection')"><img src="../assets/btn-ma-collec.png" alt="" class="h-6 inline mr-5"/>
        <span class="group-hover:text-indigo-300">Votre collection</span>
        <svg width="30" height="30"
             class="menu-item-triangle">
          <polygon points="30,0 0,15 30,30"/>
        </svg>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
  methods:{
    go(url){
      location.replace(`/${url}`)
    }
  }
}
</script>

<style scoped>

</style>