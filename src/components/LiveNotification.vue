<template>
  <div
    v-show="isLoad"
    class="animation-notif transition delay-1000 notif absolute top-0 right-0 p-2 text-indigo-150 bg-indigo-950 mr-2 md:mr-6 rounded-b-2xl border-b-8 border-solid border-indigo-750"
  >
    <a href="https://twitch.tv/letetryl" class="cursor-pointer">
      <img class="h-9 w-9 m-auto mb-1" src="../assets/svg/gluant-live.svg" alt="Image Notif Gluto" />
      <span class="flex inline align-center mb-2 justify-center">
        <span class="text-xs font-bold">En live</span>
        <span class="h-3 w-3 animate-pulse ml-2 align-middle rounded-full bg-red-500" />
      </span>
    </a>
  </div>
</template>
<script>
import { getIsLive } from "../services/twitch";

export default {
  name: "LiveNotification",
  data: () => ({
    isLoad: false,
  }),
  created: async function () {

    setTimeout(() => {
      getIsLive().then(isLive => this.isLoad = isLive)
      console.log("livenotif !");
      this.isLoad = isLive;
    }, 3000);
  },
};
</script>

<style>
@keyframes slide-down {
  from {
    transform: translate(0, -100%);
  }
  to {
    transform: translateY(0, 0);
  }
}

.animation-notif {
  animation: slide-down 1500ms linear;
}
</style>
