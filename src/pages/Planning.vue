<template>
  <div class="block">
    <h1 class="page-title">Planning</h1>
    <h2 class="page-subtitle">{{getSubtitle()}}</h2>
    <Loader :loading="loading"/>
    <div class="grid gap-3 md:gap-6 pb-4 md:px-10 mt-10 flex justify-items-center" :class="gridCol">
      <div class="justify-items-center w-52" v-for="stream in streams">
        <Stream :stream="stream"/>
      </div>
    </div>
  </div>
</template>

<script>
import {getSchedule} from "../services/twitch";
import {DateTime} from "luxon";
import Loader from "../components/Loader.vue";
import Stream from "../components/Stream.vue";


export default {
  name: "Planning",
  components: {Stream, Loader},
  data: function () {
    return {
      streams: [],
      loading: true
    }
  },
  computed:{
    gridCol(){
      return `md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-5`
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
    getUrlWithSize: function (url, width, height) {
      return url.replace("{width}", width).replace("{height}", height);
    },
    getSubtitle: function (){
      const debutSemaine = DateTime.now().set({weekday: 1});
      const finSemaine =  debutSemaine.plus({ 'day' : 6});

      return `du ${debutSemaine.get('day')} ${debutSemaine.toFormat("LLL")} au ${finSemaine.get('day')} ${finSemaine.toFormat("LLL")}.`;

    }
  },
  created: function () {
    this.fetchSchedules()
    .finally(() => this.loading = false);
  }
}
</script>

