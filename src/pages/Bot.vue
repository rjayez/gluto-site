<template>
  <div>
    <h1 class="page-title">Glutobot</h1>
    <h2 class="page-subtitle">pour vous servir !</h2>
    <!--    <h2 class="text-5xl mt-20 text-center align-item-center">Bientôt sur votre écran !</h2>-->
    <div class="bg-indigo-950 p-4 mt-8 border-t-4 border-indigo-750 rounded-sm">
      <div class="flex flex-col lg:flex-row justify-center align-middle">
        <img src="../assets/webp/Glutobot.webp" class="w-40 h-40 mb-5 lg:mb-0 mx-auto lg:mx-0" alt="Glutobot" />
        <div class="lg:my-auto">
          <p
            class="bg-gradient-to-r from-indigo-775 to-indigo-650 rounded-md ring-2 ring-gray-200 p-2 lg:p-4 text-white md:mx-10"
          >
            Salut, moi, c'est GlutoBot. J’ai été créé pour vous aider à vous divertir de la meilleure des manières. Je
            dors beaucoup.
          </p>
        </div>
      </div>
      <h3 class="text-indigo-150 font-bold mt-10">Point de chaine</h3>
      <table class="table bg-indigo-950 text-white p-2 text-sm w-full">
        <thead class="border-4 border-indigo-950">
          <tr>
            <th class="w-1/5">Nom</th>
            <th class="w-4/5">Description</th>
          </tr>
        </thead>
        <tbody class="border-indigo-950 m-4">
          <tr class="table-row m-2">
            <td>Ceci ne fait absolument rien</td>
            <td>C’est vrai, ne vous donnez pas la peine de l’utiliser. Ça met GlutoBot de mauvaise humeur.</td>
          </tr>
          <tr class="table-row">
            <td>Mettre mon message en avant</td>
            <td>
              Élevez le débat en surlignant votre message. Si c’est marqué plus gros, c'est forcément que vous avez
              raison, non ?
            </td>
          </tr>
          <tr class="table-row">
            <td>Choisir une émoticône à débloquer</td>
            <td>
              Une émote de qualité faite à la main avec amour est débloquée, si vous êtes déjà un des héros de la chaîne
              via un Sub vous avez déjà accès à tout !
            </td>
          </tr>
          <tr class="table-row">
            <td>Intense Réflexion</td>
            <td>On a tous besoin d’un petit coup de pouce dans les moments où réfléchir c’est compliqué.</td>
          </tr>
          <tr class="table-row">
            <td>Modifier une émoticône</td>
            <td>
              Allez-y dites le que les émotes ne vous plaisent pas ! Vous voulez le faire à sa place ? Eh bien faites le
              !
            </td>
          </tr>
          <tr class="table-row">
            <td>Succès débloqué</td>
            <td>
              Vous voulez récompenser Tétryl ou au contraire vous moquer gentiment de lui ? Passez un succès spécial
              pendant le stream !
            </td>
          </tr>
        </tbody>
      </table>
      <h3 class="text-indigo-150 font-bold mt-10">Commandes</h3>
      <table class="table bg-indigo-950 text-white p-2 text-sm w-full">
        <thead class="border-4 border-indigo-950">
          <tr>
            <th class="w-1/5">Commande</th>
            <th class="w-4/5">Description</th>
          </tr>
        </thead>
        <tbody class="border-indigo-950 m-4">
          <tr class="table-row m-2">
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
  name: "Bot!",
};
</script>

<style scoped>
td:first-child {
  @apply font-bold;
}

td {
  @apply table-cell bg-indigo-850 border-indigo-950 border-4 m-2 p-2;
}
</style>
