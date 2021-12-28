<template>
  <div id="page" class="block">
    <h1 class="block page-title">Bonjour</h1>
    <h2 class="text-lg mt-7 md:mt-1 text-center text-indigo-950 font-bold">
      Ici c'est la fête tous les jours (sauf le lundi)
    </h2>
    <div class="grid lg:grid-cols-2 lg:gap-16 justify-items-center">
      <img
        class="my-3 md:my-16 border-2 border-solid rounded-md border-indigo-150"
        src="../assets/webp/millie-bg.webp"
        height="985"
        width="739"
        alt="Millie La BG"
      />
      <div
        class="shadow-2xl my-3 lg:my-16 bg-indigo-950 p-5 text-left border-2 border-solid rounded-md text-indigo-150"
      >
        <h2 class="font-semibold mb-8">Salut c'est Tétryl</h2>

        <p>
          Ça se prononce [Té-Trille] Moi, c'est Tetryl, je joue aux jeux vidéo depuis fort longtemps. J'aime beaucoup
          les RPG, et c'est même le thème principal de cette chaîne, mais je joue à beaucoup de choses.
        </p>

        <p>
          Pourquoi Twitch ? J'ai créé cette chaîne Twitch pour partager ma passion du RPG et ma bonne humeur. C'est une
          façon sympa d'être au plus proche des gens et, je l'espère, partager ma passion avec vous ! J’ai autant
          d’envie de faire découvrir / découvrir des jeux, mais aussi des gens. Je pense que Twitch est un lieu de
          rencontre et d’échange formidable.
        </p>

        <p>
          Tout ce que vous verrez comme Overlay, emote, alerte est réalisée avec amour par moi-même ! J’ai envie que
          cette chaîne me ressemble, c’est pour cela que je cherche à faire un maximum de choses avec mes petites mains.
          Vous comprenez donc que chaque soutien, peu importe la forme, est d’autant plus gratifiant pour moi.
        </p>
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
