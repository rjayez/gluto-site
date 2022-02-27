<template>
  <section class="container mx-4 h-fit max-w-xl bg-gray-100 bg-opacity-50 shadow-md">
    <div class="rounded-lg border-t-2 border-indigo-400 bg-gray-100 bg-opacity-5 p-4">
      <div class="mx-auto max-w-sm md:mx-0 md:w-full">
        <div class="inline-flex items-center space-x-4">
          <a href="#" class="relative block"> </a>
          <h1 class="text-gray-600">Rareté</h1>
        </div>
      </div>
    </div>
    <Form :validation-schema="schema" @submit="onSubmit" class="space-y-6 bg-white">
      <div class="input-section pt-6">
        <h2 class="form-label-section">Nom</h2>
        <div class="relative w-full">
          <Field name="name" v-model="name" id="name" class="input-text" placeholder="Remplis moi" />
          <ErrorMessage name="name" class="error-message" />
        </div>
      </div>
      <hr />
      <div class="input-section">
        <h2 class="form-label-section">Description</h2>
        <div class="relative w-full">
          <Field
            as="textarea"
            type="text"
            name="description"
            id="description"
            class="input-text"
            placeholder="Remplis moi aussi" />
          <ErrorMessage name="description" class="error-message" />
        </div>
      </div>
      <hr />
      <div class="flex justify-end px-4 pb-4 text-gray-500">
        <button type="submit" class="form-button">
          <SvgPlus />
        </button>
      </div>
    </Form>
  </section>
</template>

<script>
import { ErrorMessage, Field, Form } from "vee-validate";
import * as yup from "yup";
import SvgPlus from "../../../assets/svg/SvgPlus.vue";

export default {
  name: "RarityAdd",
  components: { SvgPlus, Form, Field, ErrorMessage },
  data() {
    const schema = yup.object().shape({
      name: yup.string().required("Remplis moi :'("),
      description: yup.string().required("Moi aussi :("),
      rate: yup.number().required("Eh oh !"),
    });

    return {
      schema,
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>

<style scoped></style>
