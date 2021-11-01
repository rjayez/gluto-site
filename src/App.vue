<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="grid grid-cols-6 grid-flow-col auto-cols-min">
    <div id="side-menu" class="border-solid shadow-2xl h-screen bg-indigo-900 p-2 text-gray-100 font-bold">
      <div class="p-1 colo">Qui-suis je ?</div>
      <div class="p-1">Planning</div>
      <div class="p-1">Demandez à Gluto Bot</div>
      <div class="p-1">Votre collection</div>
    </div>
    <div id="page" class="col-span-5 mt-6">
      <h1 class="text-3xl">TETRYL</h1>
      <div class="shadow-2xl m-5 bg-indigo-600 text-gray-100 p-2 text-left border-2 border-solid rounded-md">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum blandit lorem sit amet volutpat. In sem
          ex,
          efficitur et tempor non, finibus ut dui. Donec vestibulum tincidunt sem ut sollicitudin. Aenean vitae volutpat
          tortor. Quisque faucibus nulla quis nisl varius accumsan. Proin eget iaculis augue. Sed eget magna convallis
          velit fermentum porttitor quis at dui. Aenean euismod eu augue ut aliquet. Aliquam vehicula in libero sit amet
          blandit. Fusce et nisi commodo, ultricies nulla at, finibus lorem. Cras in nisl nunc. Nam iaculis, ipsum eu
          blandit malesuada, eros ligula tincidunt erat, eget efficitur ex erat eu risus.</p>

        <p>Nunc sed commodo sem, ornare congue orci. Sed placerat magna justo, in scelerisque tortor rhoncus at. Mauris
          feugiat dui quis pretium volutpat. Suspendisse ante neque, pretium ut cursus eu, hendrerit a mauris. Duis in
          urna et massa blandit vulputate in vel diam. Fusce ultrices, ligula vitae condimentum congue, justo augue
          facilisis quam, nec tempus sapien massa sed nunc. Cras id finibus lectus. Phasellus tempor vulputate magna
          eget feugiat. Fusce ligula eros, malesuada nec bibendum vel, interdum eget diam. Vivamus sit amet pellentesque
          lorem, condimentum commodo velit. Vivamus a egestas magna.</p>
      </div>
    </div>
  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>

