<template>
  <div class="text-center font-EarwigFactory text-4xl">{{ planning.jour }}</div>
  <div class="mt-2 text-center text-xl">{{ getDateJourMois(planning.date) }}</div>

  <div
    v-if="planning.streams.length === 0"
    class="mt-3 h-96 rounded-lg bg-no-stream bg-cover bg-center bg-no-repeat p-3 text-white shadow-2xl"
    :class="{ 'opacity-40': planning.estPassee }"
  >
    <div class="mt-4 text-left">Pas de stream prévu !</div>
  </div>

  <div
    v-if="planning.streams.length === 1"
    class="mt-3 h-96 rounded-lg bg-cover bg-center bg-no-repeat p-3 text-white shadow-2xl"
    :class="{ 'opacity-40': planning.estPassee }"
    v-bind:style="getBackgroundStyle(planning.streams[0].imageJeuUrl)"
  >
    <div class="mt-4 text-left">{{ planning.streams[0].titre }}</div>
    <div class="text-left">{{ planning.streams[0].jeu }}</div>
    <div class="text-left">
      Débute à
      {{ new Date(planning.streams[0].debut).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" }) }}
    </div>
  </div>

  <div v-if="planning.streams.length > 1">
    <div
      class="mt-3 h-[11.5rem] rounded-lg bg-cover bg-center bg-no-repeat p-3 text-white shadow-2xl"
      :class="{ 'opacity-40': planning.estPassee }"
      v-bind:style="getBackgroundStyle(planning.streams[0].imageJeuUrl)"
    >
      <div class="mt-4 text-left">{{ planning.streams[0].titre }}</div>
      <div class="text-left">{{ planning.streams[0].jeu }}</div>
      <div class="text-left">
        Débute à
        {{ new Date(planning.streams[0].debut).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" }) }}
      </div>
    </div>

    <div
      class="mt-3 h-[11.5rem] rounded-lg bg-cover bg-center bg-no-repeat p-3 text-white shadow-2xl"
      :class="{ 'opacity-40': planning.estPassee }"
      v-bind:style="getBackgroundStyle(planning.streams[1].imageJeuUrl)"
    >
      <div class="mt-4 text-left">{{ planning.streams[1].titre }}</div>
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
