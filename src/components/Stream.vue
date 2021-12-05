<template>
  <div class="font-EarwigFactory text-center text-5xl">{{ getJourSemaine(stream.debut) }}</div>
  <div class="text-xl text-center mt-2">{{ getDateJourMois(stream.debut) }}</div>
  <div
    class="p-3 mt-3 bg-cover bg-no-repeat bg-center text-white h-96 shadow-2xl rounded-lg"
    :class="{ 'opacity-40': stream.estPassee }"
    v-bind:style="stream.style_url"
  >
    <div class="text-left">{{ stream.jeu }}</div>
    <div class="text-left">
      Débute à
      {{ new Date(stream.debut).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" }) }}
    </div>
  </div>
</template>
<script>
export default {
  name: "Stream",
  props: {
    stream: {},
  },
  methods: {
    getDateJourMois: function (date) {
      return new Date(date).toLocaleString(undefined, { day: "2-digit", month: "2-digit" });
    },
    getJourSemaine: function (date) {
      return new Date(date).toLocaleString("fr-FR", { weekday: "long" }).replace(/^\w/, c => c.toUpperCase());
    },
  },
};
</script>
