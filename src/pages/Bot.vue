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
            GlutoBot Présentation en une ligne de Glutobot, parceque il est important le bougre !
          </p>
        </div>
      </div>
      <table class="table bg-indigo-950 text-white p-2 mt-10 text-sm w-full">
        <thead class="border-4 border-indigo-950">
          <tr>
            <th class="w-1/5">Commande</th>
            <th class="w-4/5">Description</th>
          </tr>
        </thead>
        <tbody class="border-indigo-950 m-4">
          <tr class="table-row m-2">
            <td class="table-cell bg-indigo-850 border-indigo-950 border-4 p-2">!digestif</td>
            <td class="table-cell bg-indigo-850 border-indigo-950 border-4 p-2">
              Un précieux conseil pour vos fin de soirée
            </td>
          </tr>
          <tr class="table-row">
            <td class="table-cell bg-indigo-850 border-indigo-950 border-4 m-2 p-2">!enfant</td>
            <td class="table-cell bg-indigo-850 border-indigo-950 border-4 m-2 p-2">Peux servir à tout compter !</td>
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

<style scoped></style>
