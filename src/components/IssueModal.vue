<template>
  <div class="fixed left-0 top-0 z-10 h-full w-full overflow-auto bg-black bg-opacity-75">
    <div
      class="mx-1.5 mt-28 rounded-lg border-2 border-indigo-950 bg-white px-5 pt-5 pb-10 text-gray-800 shadow-lg shadow-indigo-850 dark:bg-gray-800 dark:text-gray-50 md:mx-auto md:w-[500px]">
      <div class="-mt-20 flex w-full justify-center pt-1 text-center">
        <div class="relative flex">
          <img
            alt="profil"
            src="../assets/svg/probleme-technique.svg"
            class="mx-auto h-24 w-24 rounded-full border-indigo-950 object-fill" />
        </div>
      </div>
      <div class="z-10 ml-auto mr-0 -mt-8 block flex justify-end">
        <button class="borderborder-indigo-950 place-self-end justify-self-end bg-transparent" @click="$emit('close')">
          <CloseCross />
        </button>
      </div>
      <div class="mb-10 w-full pt-10">
        <p class="px-5 text-center text-lg text-gray-600 dark:text-gray-100">Un problème ou des suggestions ?</p>
        <p class="mt-5 px-5 text-center text-lg text-gray-600 dark:text-gray-100">
          Venez en parler sur le discord dans le channel <strong>#LeGlutoSite</strong>
        </p>
      </div>
      <div class="w-full">
        <p class="text-md text-center font-bold text-indigo-500">
          <a href="discord://discord.com/channels/702225866075275317/936288740450656316">
            <img class="inline-block" src="../assets/rs-discord.png" alt="logo discord" /> Le discord</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CloseCross from "../assets/svg/CloseCross.vue";

export default {
  name: "IssueModal",
  components: { CloseCross },
};
</script>

<style scoped></style>
