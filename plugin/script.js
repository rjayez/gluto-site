var animationDone = false;
var cardAnim = anime.timeline();
var ff7anim = anime.timeline();
var cardCount = $('.achievement-card-box').length;


ff7anim.add({
  targets: ".premier",
  translateY: [150,0],
  transformOrigin: ["50% 100%", "50% 100%"],
  easing: "easeOutQuad",
  scale: [0,0.8],
  delay: 1000,
  duration: 500,
})
.add({
  targets: ".second",
  translateY: [150,0],
  transformOrigin: ["50% 100%", "50% 100%"],
  easing: "easeOutQuad",
  scale: [0,0.8],
  delay: 3000,
  duration: 500,
})

cardAnim.add({
  targets: ".achievement-card-box",
  rotateY: [180,1080],
  translateY: [150,0],
  transformOrigin: ["50% 100%", "50% 100%"],
  easing: "easeOutQuad",
  scale: [0,0.8],
  delay: 1500,
  duration: 500
})
  .add({
  targets: "#achievement-info",
  scaleY: [0,1],
  duration: 400,
  easing: "linear",
  offset: "-=500"
})
  .add({
  targets: ["#achievement-header","#achievement-title","#achievement-description"],
  opacity: [0,1],
  duration: 400,
  offset: "-=400"
})
  .add({
  targets: "#achievement-button",
  opacity: 1,
  bottom: "-75px",
  easing: "easeOutCirc",
  duration: 400,
  offset: "-=200"
})



.add({
  targets: ".achievement-card-box",
  scale: [0.8,1],
  rotateZ: function(el, i) {
    return ["0deg", Math.floor((cardCount/2))*-15 + (i*15)+"deg"];
  },
  translateX: function(el, i) {
    return Math.floor((cardCount/2))*-112 + (i*112)+"px";
  },
  boxShadow: ['0 0 0px rgba(128,128,255,0)','0 0 40px rgba(128,128,255,1)'],
  elasticity: 100,
  duration: 800,
  complete: function () {
    animationDone = true;
    pulse();
  }
})



function pulse() {
  cardAnim = anime({
    targets: ".achievement-card-box",
    scale: [1,0.95],
    rotateZ: function(el, i) {
      return [Math.floor((cardCount/2))*-15 + (i*15)+"deg", Math.floor((cardCount/2))*-17 + (i*17)+"deg"];
    },
    translateX: function(el, i) {
      return Math.floor((cardCount/2))*-112 + (i*112)+"px";
    },
    boxShadow: ['0 0 40px rgba(128,128,255,1)','0 0 60px rgba(128,128,255,1)'],
    easing: "easeInOutCubic",
    duration: 5000,
    loop: true,
    direction: 'alternate'
  })
}


