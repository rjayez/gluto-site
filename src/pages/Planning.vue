<template>
  <div class="block">
    <h1 class="block page-title">Planning </h1>

    <div class="grid gap-3 md:gap-6 pb-4 md:px-10 mt-10 flex justify-items-center" :class="gridCol">
      <div class="justify-items-center w-52" v-for="stream in streams">
        <div class="font-EarwigFactory text-center text-5xl">{{ getJourSemaine(stream.debut) }}</div>
        <div class="text-xl text-center mt-2">{{ getDateJourMois(stream.debut) }}</div>
        <div :class="`p-3 mt-3 bg-cover bg-no-repeat bg-center text-white h-96 ${stream.estPassee && 'opacity-40'}   shadow-2xl rounded-lg`"
             v-bind:style="stream.style_url">
          <div class="text-left">{{ stream.jeu }}</div>
          <div class="text-left">Débute à {{
              new Date(stream.debut).toLocaleTimeString(undefined, {
                hour: "2-digit",
                minute: "2-digit"
              })
            }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getSchedule} from "../services/twitch";


export default {
  name: "Planning",
  data: function () {
    return {
      streams: []
    }
  },
  computed:{
    gridCol(){
      return `md:grid-cols-${this.streams.length}`
    }
  },
  methods: {
    fetchSchedules: async function () {
      console.time();
      let schedule = await getSchedule();
      console.log(schedule);
      this.streams = schedule.map(stream => {
        return {
          ...stream,
          style_url: `background-image: linear-gradient(to bottom, rgba(24,29,83,100), rgba(255,255,255,0)), url(${this.getUrlWithSize(stream.image_jeu_url, 750, 1000)})`
        }
      });
      console.timeEnd();
    },
    getJourSemaine: function (date) {
      return new Date(date).toLocaleString("fr-FR", {weekday: "long"})
          .replace(/^\w/, c => c.toUpperCase());
    },
    getDateJourMois: function (date) {
      return new Date(date).toLocaleString(undefined, {day: '2-digit', month: "2-digit"});
    },
    getUrlWithSize: function (url, width, height) {
      return url.replace("{width}", width).replace("{height}", height);
    }
  },
  created: function () {
    this.fetchSchedules();
  }
}
</script>

<style scoped>

</style>