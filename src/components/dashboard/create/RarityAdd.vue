<template>
  <section class="container mx-4 h-fit max-w-xl bg-gray-100 bg-opacity-50 shadow-md">
    <div class="w-full rounded-lg border-t-2 border-indigo-400 bg-gray-100 bg-opacity-5 p-4">
      <div class="w-full md:mx-0">
        <div class="flex inline-flex w-full items-center space-x-4">
          <a href="#" class="relative block" />
          <h1 class="text-gray-600">Rareté</h1>
          <div class="grow" />
          <select class="input-select" @change="this.onSelectChange">
            <option value="new">Nouvelle rareté</option>
            <option disabled>-----------</option>
            <option v-for="rarity in rarities" :value="rarity.name">Modifier: {{ rarity.name }}</option>
          </select>
        </div>
      </div>
    </div>
    <Form :validation-schema="schema" @submit="onSubmit" class="space-y-3.5 bg-white">
      <div class="input-section pt-6">
        <h2 class="form-label-section">Nom</h2>
        <div class="relative w-full">
          <Field name="name" v-model="this.local.name" class="input-text" placeholder="Remplis moi" />
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
            v-model="this.local.description"
            id="description"
            class="input-text"
            placeholder="Remplis moi aussi" />
          <ErrorMessage name="description" class="error-message" />
        </div>
      </div>
      <hr />
      <div class="input-section">
        <h2 class="form-label-section">Taux de drop</h2>
        <div class="relative w-full">
          <Field
            as="input"
            type="number"
            name="rate"
            v-model="this.local.rate"
            id="rate"
            class="input-text"
            step="0.1"
            min="0.1"
            max="99.9"
            placeholder="Le taux de drop" />
          <ErrorMessage name="rate" class="error-message" />
        </div>
      </div>
      <hr />
      <div class="input-section">
        <h2 class="form-label-section">Ordre</h2>
        <div class="relative w-full">
          <Field
            as="input"
            type="number"
            min="1"
            name="order"
            id="order"
            v-model="this.local.order"
            class="input-text"
            placeholder="C'est un chiffre ici" />
          <ErrorMessage name="order" class="error-message" />
        </div>
      </div>
      <hr />
      <div class="flex justify-end px-4 pb-4 text-gray-500">
        <button v-if="this.selected" type="button" class="form-button bg-red-600 hover:bg-red-700" @click="deleteCard">
          Supprimer
        </button>
        <button type="reset">Reset</button>
        <div class="grow" />
        <button v-if="this.selected" type="submit" class="form-button">Modifier</button>
        <button v-if="!this.selected" type="submit" class="form-button">
          <SvgPlus />
        </button>
      </div>
    </Form>
  </section>
</template>

<script>
import { ErrorMessage, Field, Form, useResetForm, useFieldError } from "vee-validate";
import * as yup from "yup";
import SvgPlus from "../../../assets/svg/SvgPlus.vue";
import { createRarity, getRarities, updateRarity } from "../../../services/rarities";

const reset = useResetForm();

export default {
  name: "RarityAdd",
  components: { SvgPlus, Form, Field, ErrorMessage },
  data() {
    const schema = yup.object().shape({
      name: yup.string().required("Remplis moi :'("),
      description: yup.string().required("Moi aussi :("),
      rate: yup.number().min(0.1, "Le minimum c'est 0.1%").max(99.9, "Le maximum c'est 99.9%").required("Eh oh !"),
      order: yup.number().min(1, "Le minimum c'est 1").required("(ノ`Д ́)ノ"),
    });

    return {
      rarities: [],
      selected: null,
      schema,
    };
  },
  methods: {
    onSubmit(values) {
      console.info(values);
      if (this.selected === null) {
        createRarity(values);
      } else {
        updateRarity(this.selected.id, values);
      }
    },
    getRarities() {
      getRarities().then(rarities => (this.rarities = rarities));
    },
    onSelectChange(event) {
      const value = event.target.value;
      console.log(value);
      event.preventDefault();
      if ("new" === value) {
        this.selected = null;
      } else {
        this.selected = this.rarities.filter(rarity => rarity.name === value)[0];
        reset();
      }
      event.preventDefault();
    },
  },
  computed: {
    local() {
      if (this.selected === null) {
        return {
          name: "",
          description: "",
          rate: undefined,
          order: undefined,
        };
      } else {
        return this.selected;
      }
    },
  },
  mounted() {
    this.getRarities();
  },
};
</script>

<style scoped></style>
