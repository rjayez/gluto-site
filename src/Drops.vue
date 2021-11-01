<template>

  <h4>Drops the cards !</h4>
  <button @click="handleClick">Lance l'anim !</button>
  <div v-show="seen">
    <div id="achievement-box">
      <div id="achievement-card-container">
        <div class="achievement-card-box">
          <div class="a-card-back"></div>
          <div class="a-card-image image-5 rare"></div>
        </div>
        <div class="achievement-card-box">
          <div class="a-card-back"></div>
          <div class="a-card-image image-4 commune"></div>
        </div>
        <div class="achievement-card-box">
          <div class="a-card-back"></div>
          <div class="a-card-image image-3 commune"></div>
        </div>
        <div class="achievement-card-box">
          <div class="a-card-back"></div>
          <div class="a-card-image image-2 rare"></div>
        </div>
        <div class="achievement-card-box">
          <div class="a-card-back"></div>
          <div class="a-card-image image-1 legendaire"></div>
        </div>
      </div>
    </div>

    <div style="position: absolute; left: 50%">
      <div
          class="ff7 premier"
          style="position: relative; left: -50%; opacity: 0"
      >
        <h1>Glutobox</h1>
        <p>Nous avons trouvé un nouveau booster de cartes pour {{ this.pseudo }} !</p>
      </div>
    </div>

    <div style="position: absolute; left: 50%">
      <div
          class="ff7 second"
          style="position: relative; left: -50%; opacity: 0"
      >
        <h1>Glutobox</h1>
        <p>
          Joli tirage {{ pseudo }} ! Ces cartes sont maintenant disponibles dans ta
          collection !
        </p>
      </div>
    </div>
  </div>


</template>


<script>
import {socket} from "./services/socket";
import {launchAnimation} from "./animation";
import {defineComponent, ref} from "vue";

export default defineComponent({
  data: () => ({
    seen: ref(true),
    pseudo: "tEsT"
  }),

  methods: {

    handleClick() {
      this.seen = true;
      launchAnimation();
      setTimeout(() => {
        this.seen = false;
      }, 10 * 1000);
    },
    handleAnimation() {
      console.log("handleAnimation");
      this.seen = true;
      launchAnimation();
      setTimeout(() => {
        this.seen = false;
      }, 10 * 1000);
    }
  },
  mounted() {
    socket.on("notif", args => {
      console.log("mounted socket");
      console.log("notif args", args);
      this.pseudo = args.pseudo;
      this.seen = true;
      launchAnimation();
      setTimeout(() => {
        this.seen = false;
      }, 10 * 1000);

    })

  },

})


</script>

<!--<script setup>-->
<!--import {socket} from "./services/socket";-->
<!--import {launchAnimation} from "./animation";-->

<!--// socket.on("notif", args => {console.log("notif", args)})-->
<!--socket.on("notif", args => {-->
<!--  console.log("tryc", args);-->
<!--  // this.seen = true;-->

<!--  handleClick();-->
<!--  setTimeout(() => {-->
<!--    // this.seen = false;-->
<!--  }, 10 * 1000);-->
<!--})-->


<!--&lt;!&ndash;</script>&ndash;&gt;-->


<style>


div.ff7 {
  border: solid 1px #424542;
  box-shadow: 1px 1px #e7dfe7, -1px -1px #e7dfe7, 1px -1px #e7dfe7,
  -1px 1px #e7dfe7, 0 -2px #9c9a9c, -2px 0 #7b757b, 0 2px #424542;
  padding: 5px 10px;

  background: #6b13d4;
  background: -moz-linear-gradient(top, #6b13d4 0%, #340094 100%);
  background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, #6b13d4),
      color-stop(100%, #340094)
  );
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
  background-image: url("../src/cards/back.png");
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
  background-image: url("../src/cards/front.png");
}

.image-2 {
  background-image: url("../src/cards/front.png");
}

.image-3 {
  background-image: url("../src/cards/front.png");
}

.image-4 {
  background-image: url("../src/cards/front.png");
}

.image-5 {
  background-image: url("../src/cards/front.png");
}

</style>