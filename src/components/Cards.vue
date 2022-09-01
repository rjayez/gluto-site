<template>
  <div id="achievement-box">
    <div id="achievement-card-container">
      <div class="achievement-card-box" v-for="card in cards">
        <div class="a-card-back"></div>
        <div class="a-card-image" :class="card.rarity.name" :style="backgroundImage(card)"></div>
      </div>
    </div>
  </div>

  <div style="position: absolute; left: 50%">
    <div
      class="boxFF7 second w-[700px] text-center text-[35px] font-normal text-blue-50"
      style="position: relative; left: -50%; opacity: 0">
      <h1>Glutobox</h1>
      <p>
        Joli tirage <span class="text-orange-400">{{ pseudo }}</span> ! Ces cartes sont maintenant disponibles dans ta
        collection !
      </p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Cards",
  props: {
    pseudo: String,
    cards: Array,
  },
  methods: {
    backgroundImage(card) {
      return {
        "background-image": `url('${card.pictureUrl}')`,
      };
    },
  },
  mounted() {
    console.log("card is mounted");

    let animationDone = false;
    let cardAnim = anime.timeline();
    let ff7anim = anime.timeline();
    let valeurcarte = anime.timeline();
    // let cardCount = document.querySelectorAll(".achievement-card-box").length;
    let cardCount = 3;
    ff7anim.add({
      targets: ".second",
      translateY: [150, 0],
      transformOrigin: ["50% 100%", "50% 100%"],
      // easing: "easeOutQuad",
      specialEasing: {
        width: "linear",
        height: "easeInBounce",
      },
      scale: [0, 0.8],
      delay: 3000,
      opacity: 1,
      // easing: 'easeInOutExpo'
    });

    cardAnim
      .add({
        targets: ".achievement-card-box",
        rotateY: [180, 1080],
        translateY: [150, 0],
        transformOrigin: ["50% 100%", "50% 100%"],
        easing: "easeOutQuad",
        scale: [0, 0.8],
        delay: 1500,
        duration: 500,
      })
      .add({
        targets: "#achievement-info",
        scaleY: [0, 1],
        duration: 400,
        easing: "linear",
        offset: "-=500",
      })
      .add({
        targets: ["#achievement-header", "#achievement-title", "#achievement-description"],
        opacity: [0, 1],
        duration: 400,
        offset: "-=400",
      })

      // .add({
      //   targets: "#achievement-button",
      //   opacity: 1,
      //   bottom: "-75px",
      //   easing: "easeOutCirc",
      //   duration: 400,
      //   offset: "-=200",
      // })

      .add({
        targets: ".achievement-card-box",
        scale: [0.8, 1],
        rotateZ: function (el, i) {
          return ["0deg", Math.floor(cardCount / 2) * -15 + i * 15 + "deg"];
        },
        translateX: function (el, i) {
          return Math.floor(cardCount / 2) * -112 + i * 112 + "px";
        },
        complete: function () {
          animationDone = true;
          pulse();
        },
        elasticity: 100,
        duration: 800,
      });

    valeurcarte
      .add({
        targets: ".Rare",
        boxShadow: ["0 0 0px rgba(5,255,245,0)", "0 0 40px rgba(5,255,245,1)"],
        easing: "easeInOutCubic",
        loop: true,
      })
      .add({
        targets: ".Légendaire",
        boxShadow: ["0 0 0px rgba(255,184,67,0)", "0 0 40px rgba(255,184,67,1)"],
        easing: "easeInOutCubic",
        loop: true,
      });

    function pulse() {
      cardAnim = anime({
        targets: ".achievement-card-box",
        scale: [1, 0.95],
        rotateZ: function (el, i) {
          return [Math.floor(cardCount / 2) * -15 + i * 15 + "deg", Math.floor(cardCount / 2) * -17 + i * 17 + "deg"];
        },
        translateX: function (el, i) {
          return Math.floor(cardCount / 2) * -112 + i * 112 + "px";
        },
        easing: "easeInOutCubic",
        duration: 5000,
        loop: true,
        direction: "alternate",
      });
    }
  },
  unmounted() {
    console.log("card is unmounted");
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Readex+Pro:wght@600&display=swap");

div.boxFF7 {
  font-family: "Readex Pro", sans-serif;
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

div.boxFF7 * {
  /*color: #eff1ff;*/
  text-shadow: 2px 2px #212421, 1px 1px #212021;
  /*font-family: Verdana, sans-serif;*/
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
  background-image: url("src/assets/webp/back.webp");
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
  background-image: url("https://s3.eu-west-3.amazonaws.com/glutobucket/public/c7b9479d-8557-440c-a18c-e836cd3f372e");
}

.image-2 {
  background-image: url("https://s3.eu-west-3.amazonaws.com/glutobucket/public/27008992-dcc9-4499-89e6-13f998b2a2a3");
}

.image-3 {
  background-image: url("https://s3.eu-west-3.amazonaws.com/glutobucket/public/79257a7b-15cb-483c-b73f-a9e672d66720");
}

.image-4 {
  background-image: url("https://s3.eu-west-3.amazonaws.com/glutobucket/public/27008992-dcc9-4499-89e6-13f998b2a2a3");
}

.image-5 {
  background-image: url("https://s3.eu-west-3.amazonaws.com/glutobucket/public/014b5e3d-3201-46bb-8543-074357996eef");
}
</style>
