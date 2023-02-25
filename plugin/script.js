let animationDone = false;
let cardAnim = anime.timeline();
let ff7anim = anime.timeline();
let valeurcarte = anime.timeline();
let cardCount = document.querySelectorAll(".achievement-card-box").length;

var myAudio = new Audio("card-sound.wav");

ff7anim
  // .add({
  //   targets: ".premier",
  //   translateY: [150, 0],
  //   transformOrigin: ["50% 100%", "50% 100%"],
  //   easing: "easeOutQuad",
  //   scale: [0, 0.8],
  //   delay: 1000,
  //   duration: 1000,
  //   opacity: 1,
  // })
  // .add({
  //   targets: ".premier",
  //   transformOrigin: ["50% 100%", "50% 100%"],
  //   easing: "easeOutQuad",
  //   scale: [0.8, 0],
  //   delay: 1000,
  //   duration: 1000,
  //   opacity: [1, 0],
  //   // easing: 'easeInOutExpo'
  // })
  .add({
    targets: ".second",
    translateY: [150, 0],
    transformOrigin: ["50% 100%", "50% 100%"],
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

      myAudio.play();
    },
    elasticity: 100,
    duration: 800,
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

  valeurcarte.add({
    targets: ".rare",
    boxShadow: ["0 0 0px rgba(5,255,245,0)", "0 0 40px rgba(5,255,245,1)"],
    easing: "easeInOutCubic",
    loop: true,
  });

  // .add({
  //   targets: ".legendaire",
  //   boxShadow: ["0 0 0px rgba(255,184,67,0)", "0 0 40px rgba(255,184,67,1)"],
  //   easing: "easeInOutCubic",
  //   easing:""
  //   loop: true,
  // })
}
