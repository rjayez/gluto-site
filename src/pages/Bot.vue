<template>
  <div>
    <h1 class="page-title">Glutobot</h1>
    <h2 class="page-subtitle">pour vous servir !</h2>
    <div class="mt-8 rounded-sm border-t-4 border-indigo-750 bg-indigo-950 p-4 lg:mx-8">
      <div class="flex flex-col justify-center align-middle lg:flex-row">
        <img src="../assets/webp/Glutobot.webp" class="mx-auto mb-5 h-40 w-40 lg:mx-0 lg:mb-0" alt="Glutobot" />
        <div class="lg:my-auto">
          <p
            class="rounded-md bg-gradient-to-r from-indigo-775 to-indigo-650 p-2 text-white ring-2 ring-gray-200 md:mx-10 lg:p-4">
            Salut, moi, c'est GlutoBot. J’ai été créé pour vous aider à vous divertir de la meilleure des manières. Je
            dors beaucoup.
          </p>
        </div>
      </div>
      <h3 class="mt-10 text-lg font-bold text-indigo-150">Point de chaine</h3>
      <table class="table w-full bg-indigo-950 p-2 text-sm text-white">
        <thead class="border-4 border-indigo-950">
          <tr>
            <th class="w-1/5">Nom</th>
            <th class="w-4/5">Description</th>
          </tr>
        </thead>
        <tbody class="m-4 border-indigo-950">
          <tr class="m-2 table-row">
            <td class="">
              <div class="flex flex-col lg:flex-row">
                <img
                  class="mr-3 mb-2 mb-2 place-self-center lg:place-self-start lg:place-self-center"
                  src="../assets/rewards/ne_fait_rien.svg"
                  alt="logo Ne fait rien"
                  width="32"
                  height="32" />
                <label class="place-self-center">Ceci ne fait absolument rien</label>
              </div>
            </td>
            <td>C’est vrai, ne vous donnez pas la peine de l’utiliser. Ça met GlutoBot de mauvaise humeur.</td>
          </tr>
          <tr class="table-row">
            <td>
              <div class="flex flex-col lg:flex-row">
                <img
                  class="mr-3 mb-2 place-self-center lg:place-self-start"
                  src="../assets/rewards/message_avant.svg"
                  alt="logo Ne fait rien"
                  width="32"
                  height="32" />
                <span class="place-self-center">Mettre mon message en avant</span>
              </div>
            </td>
            <td>
              Élevez le débat en surlignant votre message. Si c’est marqué plus gros, c'est forcément que vous avez
              raison, non ?
            </td>
          </tr>
          <tr class="table-row">
            <td>
              <div class="flex flex-col lg:flex-row">
                <img
                  class="mr-3 mb-2 place-self-center lg:place-self-start"
                  src="../assets/rewards/emote_unlock.svg"
                  alt="logo Ne fait rien"
                  width="32"
                  height="32" /><span class="place-self-center">Choisir une émoticône à débloquer</span>
              </div>
            </td>
            <td>
              Une émote de qualité faite à la main avec amour est débloquée, si vous êtes déjà l'un des héros de la
              chaîne via un Sub vous avez déjà accès à tout !
            </td>
          </tr>
          <tr class="table-row">
            <td>
              <div class="flex flex-col lg:flex-row">
                <img
                  class="mr-3 mb-2 place-self-center lg:place-self-start"
                  src="../assets/rewards/Intense_reflexion.svg"
                  alt="logo Ne fait rien"
                  width="32"
                  height="32" /><span class="place-self-center">Intense Réflexion</span>
              </div>
            </td>
            <td>On a tous besoin d’un petit coup de pouce dans les moments où réfléchir c’est compliqué.</td>
          </tr>
          <tr class="table-row">
            <td>
              <div class="flex flex-col lg:flex-row">
                <img
                  class="mr-3 mb-2 place-self-center lg:place-self-start"
                  src="../assets/rewards/modif_emote.svg"
                  alt="logo Ne fait rien"
                  width="32"
                  height="32" /><span class="place-self-center">Modifier une émoticône</span>
              </div>
            </td>
            <td>
              Allez-y dites-le que les émotes ne vous plaisent pas ! Vous voulez le faire à sa place ? Eh bien faites-le
              !
            </td>
          </tr>
          <tr class="table-row">
            <td>
              <div class="flex flex-col lg:flex-row">
                <img
                  class="mr-3 mb-2 place-self-center lg:place-self-start"
                  src="../assets/rewards/Succes.svg"
                  alt="logo Ne fait rien"
                  width="32"
                  height="32" /><span class="place-self-center">Succès débloqué</span>
              </div>
            </td>
            <td>
              Vous désirez récompenser Tétryl ou au contraire vous moquer gentiment de lui ? Passez un succès spécial
              pendant le stream !
            </td>
          </tr>
        </tbody>
      </table>
      <h3 class="mt-10 text-lg font-bold text-indigo-150">Commandes</h3>
      <table class="table w-full bg-indigo-950 p-2 text-sm text-white">
        <thead class="border-4 border-indigo-950">
          <tr>
            <th class="w-1/5">Commande</th>
            <th class="w-4/5">Description</th>
          </tr>
        </thead>
        <tbody class="m-4 border-indigo-950">
          <tr class="m-2 table-row">
            <td>!chaise</td>
            <td>
              N’hésitez pas à prévenir Tétryl que ce qu’il regarde depuis 2 minutes est en réalité un meuble destiné à
              s'asseoir
            </td>
          </tr>
          <tr class="table-row">
            <td>!digestif</td>
            <td>
              Besoin d’un conseil pour ambiancer vos fins de soirée ? Cette commande est sponsorisée par @Romanus89
            </td>
          </tr>
          <tr class="table-row">
            <td>!enfant</td>
            <td>
              Au début, cette commande servait à compter le nombre de victoires aux cartes sur un pauvre enfant qui
              n’avait rien demandé. Avec le temps cette commande est devenue un moyen de tout compter
            </td>
          </tr>
          <tr class="table-row">
            <td>!bot</td>
            <td>Tu veux en savoir un peu plus sur moi ?</td>
          </tr>
          <tr class="table-row">
            <td>!banc</td>
            <td>Si la commande !chaise ne suffit pas</td>
          </tr>
          <tr class="table-row">
            <td>!zireael</td>
            <td>Si la modération est trop sévère</td>
          </tr>
          <tr class="table-row">
            <td>!frites</td>
            <td>
              Cette commande vous donne la possibilité de savoir si à cette heure-ci il est légal de consommer de
              délicieuses frites
            </td>
          </tr>
          <tr class="table-row">
            <td>!joue</td>
            <td>
              Si Tetryl raconte un peu trop sa vie, n’hésitez pas à spammer cette commande afin de recentrer le débat
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bot",
};
</script>

<style scoped>
td:first-child {
  @apply font-bold;
}

td {
  @apply m-2 border-4 border-indigo-950 bg-indigo-850 p-2;
}
</style>
