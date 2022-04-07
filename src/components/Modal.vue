<template>
  <div
    v-if="open"
    class="fixed left-0 top-0 z-10 h-full w-full overflow-auto bg-black bg-opacity-75"
    @click.self="backdrop">
    <div
      class="mx-1.5 mt-28 rounded-lg border-2 border-indigo-950 bg-white px-5 pt-5 pb-5 text-gray-800 shadow-lg shadow-indigo-850 dark:bg-gray-800 dark:text-gray-50 md:mx-auto md:w-[500px]">
      <div class="z-10 ml-auto block flex justify-end">
        <button class="borderborder-indigo-950 place-self-end justify-self-end bg-transparent" @click="closeButton">
          <CloseCross />
        </button>
      </div>
      <div class="mb-10 w-full pt-1">
        <p class="px-5 text-center text-xl font-bold text-gray-600 dark:text-gray-100">{{ titre }}</p>
        <p class="mt-5 px-5 text-center text-lg text-gray-600 dark:text-gray-100">
          {{ description }}
        </p>
      </div>
      <div class="flex w-full">
        <div class="grow" />
        <button class="form-button-cancel" @click="$emit('cancel')">Annuler</button>
        <button class="form-button ml-2.5" @click="$emit('confirm')">Confirmer</button>
      </div>
    </div>
  </div>
</template>

<script>
import CloseCross from "../assets/svg/CloseCross.vue";

export default {
  name: "Modal",
  components: { CloseCross },
  expose: ["openModal", "closeModal"],
  props: {
    titre: { type: String },
    description: { type: String },
    closeOnBackdrop: { type: Boolean, default: false },
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    openModal() {
      this.open = true;
    },
    closeModal() {
      this.open = false;
    },
    backdrop() {
      console.log("coucou backdrop");
      this.closeOnBackdrop && this.$emit("cancel");
    },
    closeButton() {
      this.$emit("cancel");
    },
  },
};
</script>

<style scoped></style>
