<template>
  <div
    v-show="isLoad"
    class="animation-notif notif absolute top-0 right-0 mr-2 rounded-b-2xl border-b-8 border-solid border-indigo-750 bg-indigo-950 p-2 text-indigo-150 transition delay-1000 md:mr-6">
    <a href="https://twitch.tv/letetryl" class="cursor-pointer">
      <img class="m-auto mb-1 h-9 w-9" src="../assets/svg/gluant-live.svg" alt="Image Notif Gluto" />
      <span class="align-center mb-2 inline flex justify-center">
        <span class="text-xs font-bold">En live</span>
        <span class="ml-2 h-3 w-3 animate-pulse rounded-full bg-red-500 align-middle" />
      </span>
    </a>
  </div>
</template>
<script>
import { getIsLive } from "../services/twitch";

export default {
  name: "LiveNotification",
  data() {
    return {
      isLoad: false,
    };
  },
  created: async function () {
    setTimeout(() => {
      getIsLive().then(isLive => (this.isLoad = isLive));
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
