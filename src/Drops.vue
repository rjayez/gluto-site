<template>
  <h4>Drops the cards !</h4>
  <button @click="handleClick">Lance l'anim !</button>
  <div v-if="seen">
    <Cards :pseudo="pseudo"></Cards>
  </div>
</template>

<script>
// import {socket} from "./services/socket";
// import {launchAnimation} from "./animation";
import { defineComponent, ref } from "vue";
import Cards from "./components/Cards.vue";

export default defineComponent({
  components: { Cards },
  data: () => ({
    seen: ref(false),
    pseudo: "tEsT",
  }),
  methods: {
    handleClick() {
      this.seen = true;
      setTimeout(() => {
        this.seen = false;
      }, 10 * 1000);
    },
  },
  mounted() {
    // socket.on("notif", args => {
    //   this.pseudo = args.pseudo;
    //   this.seen = true;
    //   setTimeout(() => {
    //     this.seen = false;
    //   }, 10 * 1000);
    //
    // })
  },
});
</script>

<style>
div.ff7 {
  border: solid 1px #424542;
  box-shadow: 1px 1px #e7dfe7, -1px -1px #e7dfe7, 1px -1px #e7dfe7, -1px 1px #e7dfe7, 0 -2px #9c9a9c, -2px 0 #7b757b,
    0 2px #424542;
  padding: 5px 10px;

  background: #6b13d4;
  background: -moz-linear-gradient(top, #6b13d4 0%, #340094 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #6b13d4), color-stop(100%, #340094));
  background: -webkit-linear-gradient(top, #6b13d4 0%, #340094 100%);
  background: -o-linear-gradient(top, #6b13d4 0%, #340094 100%);
  background: -ms-linear-gradient(top, #6b13d4 0%, #340094 100%);
  background: linear-gradient(to bottom, #6b13d4 0%, #340094 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#6B13D4', endColorstr='#340094', GradientType=0);
  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  border-radius: 7px;
  margin-left: 10px;
}

div.ff7 * {
  color: #eff1ff;
  text-shadow: 2px 2px #212421, 1px 1px #212021;
  font-family: Verdana, sans-serif;
  font-size: 20px;
  font-weight: normal;
  margin: 5px 0;
}

#achievement-box {
  width: 100%;
  height: 300px;
  margin: 0 auto;
}

#achievement-card-container {
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  perspective: 1000px;
}

.achievement-card-box {
  width: 225px;
  height: 279px;
  position: absolute;
  transform-style: preserve-3d;
  transform: rotateY(180deg);
  transform: scale(0);
  border-radius: 15px;
}

.rare {
  border-radius: 15px;
}

.commune {
  border-radius: 15px;
}

.legendaire {
  border-radius: 15px;
}

.a-card-back {
  background-image: url("assets/cards/back.png");
  transform: rotateY(180deg);
}

.a-card-image,
.a-card-back {
  width: 253px;
  height: 361px;
  background-size: contain;
  backface-visibility: hidden;
  position: absolute;
}

.a-card-title {
  position: absolute;
}

.image-1 {
  background-image: url("assets/cards/front.png");
}

.image-2 {
  background-image: url("assets/cards/front.png");
}

.image-3 {
  background-image: url("assets/cards/front.png");
}

.image-4 {
  background-image: url("assets/cards/front.png");
}

.image-5 {
  background-image: url("assets/cards/front.png");
}
</style>
