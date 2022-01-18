<template>
  <div id="page" class="block lg:h-screen">
    <h1 class="block page-title">Bonjour</h1>
    <h2 class="mt-7 text-lg font-bold text-center md:mt-1 text-indigo-950">
      Ici c'est la fête tous les jours (sauf le lundi)
    </h2>
    <div class="xl:flex xl:flex-row lg:justify-center justify-items-center h-4/5 mt-5">
      <img
        class="my-3 rounded-md border-2 border-solid md:my-4 border-indigo-150 mx-auto xl:mx-0 max-w-1/2"
        src="../assets/webp/millie-bg.webp"
        alt="Millie La BG"
      />

      <div class="flex flex-col xl:-ml-20 xl:w-1/2 lg:h-4/5">
        <img
          src="../assets/accueil/gluants-accueil.svg"
          alt="paire de gluants"
          class="z-10 ml-auto -mb-2 mr-5 max-h-28 justify-self-end"
        />
        <div
          class="p-5 mb-3 text-left rounded-md border-2 border-solid shadow-xl lg:mb-16 bg-indigo-950 text-indigo-150"
        >
          <h3 class="mb-3 text-2xl font-bold">Ça se prononce [Té&#8209;Trille]</h3>
          <p>
            Moi, c'est Tetryl, je joue aux jeux vidéo depuis fort longtemps. J'aime beaucoup les RPG, et c'est même le
            thème principal de cette chaîne, mais je joue à beaucoup de choses.
          </p>
          <p class="flex flex-row justify-center">
            <img
              class="my-2 mx-4"
              src="../assets/emotes/Emote_Salut.svg"
              width="32"
              height="32"
              alt="emote salut les glutos"
            />
            <img
              class="my-2 mx-4"
              src="../assets/emotes/Emote_Salut.svg"
              width="32"
              height="32"
              alt="emote salut les glutos"
            />
            <img
              class="my-2 mx-4"
              src="../assets/emotes/Emote_Salut.svg"
              width="32"
              height="32"
              alt="emote salut les glutos"
            />
          </p>
          <h3 class="mt-5 mb-3 text-2xl font-bold">Pourquoi Twitch&nbsp;?</h3>
          <p>
            J'ai créé cette chaîne Twitch pour partager ma passion du RPG et ma bonne humeur. C'est une façon sympa
            d'être au plus proche des gens et, je l'espère, partager ma passion avec vous ! J’ai autant d’envie de faire
            découvrir / découvrir des jeux, mais aussi des gens. Je pense que Twitch est un lieu de rencontre et
            d’échange formidable.
          </p>

          <p>
            Tout ce que vous verrez comme Overlay, emote, alerte est réalisée avec amour par moi-même&nbsp;! J’ai envie
            que cette chaîne me ressemble, c’est pour cela que je cherche à faire un maximum de choses avec mes petites
            mains. Vous comprendez donc que chaque soutien, peu importe la forme, est d’autant plus gratifiant pour moi.
          </p>
          <p class="flex flex-row justify-center">
            <img class="my-2 mx-4" src="../assets/emotes/GGEZ.svg" width="32" height="32" alt="emote GG Easy" />
            <img class="my-2 mx-4" src="../assets/emotes/GGEZ.svg" width="32" height="32" alt="emote GG Easy" />
            <img class="my-2 mx-4" src="../assets/emotes/GGEZ.svg" width="32" height="32" alt="emote GG Easy" />
          </p>
          <p>J'espère que vous apprécierez le contenu que je crée, j'espère à bientôt sur le Tchat de Twitch&nbsp;!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhoIAm",
  props: {
    titre: String,
  },
};
</script>

<style scoped>
p {
  @apply mb-4;
}
</style>
