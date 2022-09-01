<template>
  <div>
    <button class="m-2 border-4 border-solid bg-yellow-200 p-2" @click="handleClick">Lance l'anim !</button>
    <label>{{ this.queue.length }}</label>
    <Transition>
      <div v-if="seen">
        <Cards :cards="cards" :pseudo="pseudo" />
      </div>
    </Transition>
  </div>
</template>

<script>
import { io } from "socket.io-client";

import { ref } from "vue";
import Cards from "./components/Cards.vue";

export default {
  name: "Drops",
  components: { Cards },
  data() {
    return {
      seen: ref(false),
      pseudo: "",
      queue: [],
      cards: [],
    };
  },
  methods: {
    handleClick() {
      this.seen = true;
      setTimeout(() => {
        this.seen = false;
        this.queue.shift();
      }, 10 * 1000);
    },
    newDrop(cards) {},
  },
  mounted() {
    const socket = io("http://localhost:3123");

    let nbSeconds = 10;
    socket.on("notif", args => {
      this.queue.push(args);
    });

    setInterval(() => {
      const notif = this.queue.shift();
      if (notif) {
        this.pseudo = notif.pseudo;
        this.cards = notif.cards;
        this.seen = true;
        setTimeout(() => {
          this.seen = false;
        }, nbSeconds * 1000);
      }
    }, (nbSeconds + 1) * 1000);
  },
};
</script>

<style>
.v-leave-active {
  transition: opacity 0.7s ease;
}

.v-leave-to {
  opacity: 0;
}
</style>
