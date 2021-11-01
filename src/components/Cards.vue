<template>

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
      <p>Nous avons trouvé un nouveau booster de cartes pour {{ pseudo }} !</p>
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
</template>

<script>
import anime from "animejs";
import {defineComponent} from "vue";

export default ({
  name: "Cards",
  props: {
    pseudo: String
  },
  mounted() {
    console.log("card is mounted")
    let animationDone = false;
    let cardAnim = anime.timeline();
    let ff7anim = anime.timeline();
    let valeurcarte = anime.timeline();
    // let cardCount = document.querySelectorAll(".achievement-card-box").length;
    let cardCount = 5;
    ff7anim
        .add({
          targets: ".premier",
          translateY: [150, 0],
          transformOrigin: ["50% 100%", "50% 100%"],
          easing: "easeOutQuad",
          scale: [0, 0.8],
          delay: 1000,
          duration: 1000,
          opacity: 1,
        })
        .add({
          targets: ".premier",
          transformOrigin: ["50% 100%", "50% 100%"],
          easing: "easeOutQuad",
          scale: [0.8, 0],
          delay: 1000,
          duration: 1000,
          opacity: [1, 0],
          // easing: 'easeInOutExpo'
        })
        .add({
          targets: ".second",
          translateY: [150, 0],
          transformOrigin: ["50% 100%", "50% 100%"],
          easing: "easeOutQuad",
          scale: [0, 0.8],
          delay: 100,
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
          targets: [
            "#achievement-header",
            "#achievement-title",
            "#achievement-description",
          ],
          opacity: [0, 1],
          duration: 400,
          offset: "-=400",
        })
        .add({
          targets: "#achievement-button",
          opacity: 1,
          bottom: "-75px",
          easing: "easeOutCirc",
          duration: 400,
          offset: "-=200",
        })

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


    valeurcarte.add({
      targets: ".rare",
      boxShadow: ["0 0 0px rgba(5,255,245,0)", "0 0 40px rgba(5,255,245,1)"],
      easing: "easeInOutCubic",
      loop: true,
    })

        .add({
          targets: ".legendaire",
          boxShadow: ["0 0 0px rgba(255,184,67,0)", "0 0 40px rgba(255,184,67,1)"],
          easing: "easeInOutCubic",
          loop: true,
        })


    function pulse() {
      cardAnim = anime({
        targets: ".achievement-card-box",
        scale: [1, 0.95],
        rotateZ: function (el, i) {
          return [
            Math.floor(cardCount / 2) * -15 + i * 15 + "deg",
            Math.floor(cardCount / 2) * -17 + i * 17 + "deg",
          ];
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
    console.log("card is unmounted")
  }
})

</script>

<style scoped>

</style>