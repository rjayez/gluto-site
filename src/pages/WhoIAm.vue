<template>
  <title>Je suis LeTetryl, streamer pour votre plus grand plaisir</title>
  <div id="page" class="mx-0 block lg:mx-2 lg:h-screen">
    <h1 class="page-title block">Le Tétryl</h1>
    <h2 class="mt-7 text-center text-lg font-bold text-indigo-950 md:mt-1">Steamer RPG et pas que&nbsp;!</h2>
    <div class="mt-4 justify-items-center lg:justify-center xl:flex xl:flex-row">
      <img
        class="max-w-1/2 mx-auto mx-auto mt-3 flex h-[400px] w-[513px] rounded-md border-solid border-indigo-150 object-contain md:mt-3 md:h-[600px] lg:h-[800px] lg:w-[685px] lg:border-2 xl:mx-0"
        src="../assets/accueil/Angoisse_V2.webp"
        alt="Millie La BG"
        height="942"
        width="806" />

      <div class="flex flex-col lg:h-4/5 xl:-ml-20 xl:w-1/2">
        <img
          src="../assets/accueil/gluants-accueil.svg"
          alt="paire de gluants"
          class="z-0 ml-auto -mb-2 mr-5 max-h-28 justify-self-end"
          width="213"
          height="112" />
        <div
          class="mb-3 rounded-md border-2 border-solid bg-indigo-950 p-5 text-left text-indigo-150 shadow-xl lg:mb-16">
          <h3 class="mb-3 text-2xl font-bold">Ça se prononce [Té&#8209;Trille]</h3>
          <p>
            Moi, c'est LeTetryl ou Tetryl, je joue aux jeux vidéo depuis fort longtemps. J'aime beaucoup les RPG. C'est
            d’ailleurs le thème principal de cette chaîne, mais je joue à beaucoup de choses. J’ai grandi avec les Final
            Fantasy, les premières générations de Pokémon, Kingdom Hearts et j’en passe... Voilà dans l’idée ce que je
            suis et ce à quoi vous pouvez vous attendre&nbsp;!
          </p>
          <p class="flex flex-row justify-center">
            <img
              class="my-0.5 mx-4"
              src="../assets/emotes/Emote_Salut.svg"
              width="32"
              height="32"
              alt="emote salut les glutos" />
            <img
              class="my-0.5 mx-4"
              src="../assets/emotes/Emote_Salut.svg"
              width="32"
              height="32"
              alt="emote salut les glutos" />
            <img
              class="my-0.5 mx-4"
              src="../assets/emotes/Emote_Salut.svg"
              width="32"
              height="32"
              alt="emote salut les glutos" />
          </p>
          <h3 class="mb-3 text-2xl font-bold">Pourquoi Twitch&nbsp;?</h3>
          <p>
            Vous l’aurez compris je suis donc un streamer Français, et j’ai créé mon Twitch pour partager ma passion du
            RPG et ma bonne humeur. Je joue sur tous supports, mais majoritairement sur Switch, si vous aimez ce que
            fait Nintendo ça devrait vous plaire&nbsp;!
          </p>

          <p>
            J’ai autant d’envie de vous faire découvrir et découvrir des jeux, mais aussi des gens. Je pense que Twitch
            est un lieu de rencontre et d’échange formidable.
          </p>

          <p>
            Tout ce que vous verrez comme overlay, emote, alerte est réalisé avec amour par moi-même ! J’ai envie que
            cette chaîne me ressemble, c’est pour cela que je cherche à faire un maximum de choses avec mes petites
            mains. Vous comprendrez ainsi que chaque soutien, peu importe la forme, me fait ultra plaisir&nbsp;!
          </p>

          <p class="flex flex-row justify-center">
            <img class="my-0.5 mx-4" src="../assets/emotes/GGEZ.svg" width="32" height="32" alt="emote GG Easy" />
            <img class="my-0.5 mx-4" src="../assets/emotes/GGEZ.svg" width="32" height="32" alt="emote GG Easy" />
            <img class="my-0.5 mx-4" src="../assets/emotes/GGEZ.svg" width="32" height="32" alt="emote GG Easy" />
          </p>
          <p>J'espère que vous apprécierez le contenu que je crée, j'espère à bientôt sur le Tchat de Twitch&nbsp;!</p>

          <a class="mt-51 flex justify-center" href="https://twitch.tv/letetryl">
            <button
              type="button"
              class="flex w-full items-center justify-center rounded-lg bg-indigo-750 py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-200">
              <img src="../assets/rs-twitch.png" alt="icone twitch" class="mr-3 h-6" /> Venez me découvrir !
            </button>
          </a>
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
