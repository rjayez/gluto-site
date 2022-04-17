<template>
  <section class="container mx-4 h-fit max-w-xl bg-gray-100 bg-opacity-50 shadow-md">
    <div class="w-full rounded-lg border-t-2 border-indigo-400 bg-gray-100 bg-opacity-5 p-4">
      <div class="w-full md:mx-0">
        <div class="flex inline-flex w-full items-center space-x-4">
          <a href="#" class="relative block" />
          <h1 class="text-gray-600">Rareté</h1>
          <div class="grow" />
          <select class="input-select" @change.prevent="this.onSelectChange" v-model="this.selectedValue">
            <option value="new">Nouvelle rareté</option>
            <option disabled>-----------</option>
            <option v-for="rarity in rarities" :value="rarity.name">Modifier: {{ rarity.name }}</option>
          </select>
        </div>
      </div>
    </div>
    <form @submit="onSubmit" class="space-y-3.5 bg-white">
      <div class="input-section pt-6">
        <h2 class="form-label-section">Nom</h2>
        <div class="relative w-full">
          <input name="name" v-model="name" class="input-text" placeholder="Remplis moi" />
          <span class="error-message">{{ errors.name }}</span>
        </div>
      </div>
      <hr />
      <div class="input-section">
        <h2 class="form-label-section">Description</h2>
        <div class="relative w-full">
          <textarea
            type="text"
            name="description"
            v-model="description"
            id="description"
            class="input-text"
            placeholder="Remplis moi aussi" />
          <span class="error-message">{{ errors.description }}</span>
        </div>
      </div>
      <hr />
      <div class="input-section">
        <h2 class="form-label-section">Taux de drop</h2>
        <div class="relative w-full">
          <input
            type="number"
            name="rate"
            v-model="rate"
            id="rate"
            class="input-text"
            step="0.1"
            min="0.1"
            max="99.9"
            placeholder="Le taux de drop" />
          <span class="error-message">{{ errors.rate }}</span>
        </div>
      </div>
      <hr />
      <div class="input-section">
        <h2 class="form-label-section">Ordre</h2>
        <div class="relative w-full">
          <input
            type="number"
            min="1"
            name="order"
            id="order"
            v-model="order"
            class="input-text"
            placeholder="C'est un chiffre ici" />
          <span class="error-message">{{ errors.order }}</span>
        </div>
      </div>
      <hr />
      <div class="flex justify-end px-4 pb-4 text-gray-500">
        <button
          v-if="this.selected"
          type="button"
          class="form-button bg-red-600 hover:bg-red-700"
          @click="this.$refs.modal.openModal()">
          Supprimer
        </button>
        <div class="grow" />
        <button v-if="this.selected" type="submit" class="form-button">Modifier</button>
        <button v-if="!this.selected" type="submit" class="form-button">
          <SvgPlus />
        </button>
      </div>
    </form>
  </section>
  <Modal
    ref="modal"
    titre="Confirmation de suppression"
    :description="descriptionModal"
    close-on-backdrop
    @cancel="onCancelModal"
    @confirm="onConfirmModal" />
</template>

<script>
import { ErrorMessage, Field, Form, useField, useForm } from "vee-validate";
import * as yup from "yup";
import SvgPlus from "../../../assets/svg/SvgPlus.vue";
import { createRarity, deleteRarity, getRarities, updateRarity } from "../../../services/rarities";
import Modal from "../../Modal.vue";
import { notify } from "@kyvg/vue3-notification";

export default {
  name: "RarityAdd",
  components: { Modal, SvgPlus, Form, Field, ErrorMessage },
  setup() {
    const schema = yup.object().shape({
      name: yup.string().required("Remplis moi :'("),
      description: yup.string().required("Moi aussi :("),
      rate: yup.number().min(0.1, "Le minimum c'est 0.1%").max(99.9, "Le maximum c'est 99.9%").required("Eh oh !"),
      order: yup.number().min(1, "Le minimum c'est 1").required("(ノ`Д ́)ノ"),
    });
    const { errors, handleSubmit, setValues, resetForm } = useForm({ validationSchema: schema });

    const { value: name } = useField("name");
    const { value: description } = useField("description");
    const { value: rate } = useField("rate");
    const { value: order } = useField("order");

    return {
      schema,
      errors,
      name,
      description,
      rate,
      order,
      setValues,
      resetForm,
      handleSubmit,
    };
  },
  data() {
    return {
      rarities: [],
      selected: null,
      selectedValue: "new",
      onSubmit: () => {},
    };
  },
  methods: {
    deleteRarity() {
      console.debug(this.rarities.indexOf(this.selected));
      deleteRarity(this.selected._id)
        .then(e => {
          this.getRarities();
          notify({ title: "Suppression réussi !", text: "La rareté fût supprimé et la liste à jour", type: "success" });
          this.selectedValue = "new";
          this.selected = null;
          // Remplissage des champs du formulaire
          this.resetForm();
        })
        .catch(_ => notify({ title: "Suppression échoué !", type: "error" }));
    },
    getRarities() {
      getRarities().then(rarities => {
        this.rarities = rarities;
        notify({ title: "Liste à jour.", type: "success" });
      });
    },
    onSelectChange(event) {
      const value = event.target.value;
      console.log("onSelectChange", value);
      if ("new" === value) {
        this.selected = null;
        this.resetForm();
      } else {
        let selected = this.rarities.filter(rarity => rarity.name === value)[0];
        this.selected = selected;
        this.setValues({
          ...selected,
        });
      }
    },
    onCancelModal() {
      this.$refs.modal.closeModal();
    },
    onConfirmModal() {
      this.$refs.modal.closeModal();
      this.deleteRarity();
    },
  },
  computed: {
    descriptionModal() {
      return `T'es sûr de supprimer la rareté ${this.selected?.name || ""}`;
    },
  },
  mounted() {
    this.getRarities();
    this.onSubmit = this.handleSubmit(values => {
      console.info("Valeur du formulaire", values);
      console.debug(this.selected);
      let upsert;
      if (this.selected === null) {
        upsert = createRarity(values);
      } else {
        upsert = updateRarity(this.selected._id, values);
      }
      upsert.then(_ => this.getRarities());
    });
  },
};
</script>

<style scoped></style>
