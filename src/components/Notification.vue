<template>
  <div
    v-if="show"
    class="absolute top-5 right-5 w-72 border-l-4 border-green-600 bg-green-200 p-4 text-green-600 transition"
    role="alert">
    <p class="font-bold">
      {{ title }}
    </p>
    <p>
      {{ message }}
    </p>
  </div>
</template>

<script>
import { render } from "vue";

export default {
  name: "Notification",
  props: ["title", "message"],
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = false;
      render(null, this.$refs.root);
    }, 5000);
  },
};
</script>

<style scoped></style>