<template>
  <title>Le planning de la chaine twitch LeTetryl</title>
  <div class="block">
    <h1 class="page-title">Planning</h1>
    <h2 class="page-subtitle">{{ getSubtitle() }}</h2>
    <Loader :loading="loading" />
    <div v-if="!loading && streams.length === 0" class="mt-24 text-center text-xl font-bold">
      Désolé, mais GlutoBot n'a pas réussi à trouver le planning !
    </div>
    <div
      class="mt-10 flex grid justify-items-center gap-3 pb-4 md:grid-cols-2 md:gap-6 md:px-10 lg:px-0 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-7">
      <div class="w-52 justify-items-center" v-for="stream in streams">
        <Stream :planning="stream" />
      </div>
    </div>
  </div>
</template>

<script>
import { getSchedule } from "../services/twitch";
import { DateTime } from "luxon";
import Loader from "../components/Loader.vue";
import Stream from "../components/Stream.vue";

export default {
  name: "Planning",
  components: { Stream, Loader },
  data() {
    return {
      streams: [],
      loading: true,
    };
  },
  methods: {
    fetchSchedules: async function () {
      this.streams = await getSchedule();
    },
    getSubtitle: function () {
      const debutSemaine = DateTime.now().set({ weekday: 1 });
      const finSemaine = debutSemaine.plus({ day: 6 });

      return `du ${debutSemaine.get("day")} ${debutSemaine.toFormat("LLL")} au ${finSemaine.get(
        "day"
      )} ${finSemaine.toFormat("LLL")}.`;
    },
  },
  created: function () {
    this.fetchSchedules().finally(() => (this.loading = false));
  },
};
</script>
