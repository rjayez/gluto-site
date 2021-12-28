<template>
  <input type="button" value="coucou" @click="test" />
  <form enctype="multipart/form-data" id="uploadForm" @submit="upload">
    <label>File:</label>
    <input type="file" name="file" required /> <br />
    <input type="submit" name="submit" value="Upload to Amazon S3" />
  </form>
</template>

<script>
import { uploadCards } from "../services/cards";

export default {
  name: "Dashboard",
  methods: {
    upload: function (event) {
      event.preventDefault();
      const file = event.target.elements.file.files[0];
      uploadCards(file).then(res => console.log(res));
    },
    test: function () {
      // uploadCards();
      console.log("coucou");
    },
  },
};
</script>

<style scoped></style>
