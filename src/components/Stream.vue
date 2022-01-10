<template>
  <div class="font-EarwigFactory text-center text-4xl">{{ planning.jour }}</div>
  <div class="text-xl text-center mt-2">{{ getDateJourMois(planning.date) }}</div>

  <div
    v-if="planning.streams.length === 0"
    class="p-3 mt-3 bg-cover bg-no-repeat bg-center text-white h-96 shadow-2xl rounded-lg bg-no-stream"
    :class="{ 'opacity-40': planning.estPassee }"
  >
    <div class="text-left mt-4">Pas de stream prévu !</div>
  </div>

  <div
    v-if="planning.streams.length === 1"
    class="p-3 mt-3 bg-cover bg-no-repeat bg-center text-white h-96 shadow-2xl rounded-lg"
    :class="{ 'opacity-40': planning.streams[0].estPassee }"
    v-bind:style="getBackgroundStyle(planning.streams[0].imageJeuUrl)"
  >
    <div class="text-left mt-4">{{ planning.streams[0].titre }}</div>
    <div class="text-left">{{ planning.streams[0].jeu }}</div>
    <div class="text-left">
      Débute à
      {{ new Date(planning.streams[0].debut).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" }) }}
    </div>
  </div>

  <div v-if="planning.streams.length > 1">
    <div
      class="p-3 mt-3 bg-cover bg-no-repeat bg-center text-white h-[11.5rem] shadow-2xl rounded-lg"
      :class="{ 'opacity-40': planning.streams[0].estPassee }"
      v-bind:style="getBackgroundStyle(planning.streams[0].imageJeuUrl)"
    >
      <div class="text-left mt-4">{{ planning.streams[0].titre }}</div>
      <div class="text-left">{{ planning.streams[0].jeu }}</div>
      <div class="text-left">
        Débute à
        {{ new Date(planning.streams[0].debut).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" }) }}
      </div>
    </div>

    <div
      class="p-3 mt-3 bg-cover bg-no-repeat bg-center text-white h-[11.5rem] shadow-2xl rounded-lg"
      :class="{ 'opacity-40': planning.streams[1].estPassee }"
      v-bind:style="getBackgroundStyle(planning.streams[1].imageJeuUrl)"
    >
      <div class="text-left mt-4">{{ planning.streams[1].titre }}</div>
      <div class="text-left">{{ planning.streams[1].jeu }}</div>
      <div class="text-left">
        Débute à
        {{ new Date(planning.streams[1].debut).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" }) }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Stream",
  props: {
    planning: {},
  },
  methods: {
    getDateJourMois: function (date) {
      return new Date(date).toLocaleString(undefined, { day: "2-digit", month: "2-digit" });
    },
    getJourSemaine: function (date) {
      return new Date(date).toLocaleString("fr-FR", { weekday: "long" }).replace(/^\w/, c => c.toUpperCase());
    },
    getUrlWithSize: function (url, width, height) {
      return url?.replace("{width}", width)?.replace("{height}", height);
    },
    getBackgroundStyle: function (imageJeuUrl) {
      return `background-image: linear-gradient(to bottom, rgba(24,29,83,100), rgba(255,255,255,0)),
      url(${this.getUrlWithSize(imageJeuUrl, 750, 1000)})`;
    },
  },
};
</script>
