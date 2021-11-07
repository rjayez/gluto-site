<template>
  <div id="page">
    <h1 class="block text-3xl text-indigo-950 font-bold">Bonjour</h1>
    <h2>{{titre}}</h2>
    <h4 class="text-mg text-indigo-950 font-bold">Ici c'est la fête tous les jours (sauf le lundi)</h4>
    <div class="shadow-2xl my-16 bg-indigo-950 p-5 text-left border-2 border-solid rounded-md text-indigo-150">
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
</template>

<script>
export default {
  name: "WhoIAm",
  props: {
    titre: String
  }
}
</script>

<style scoped>

</style>