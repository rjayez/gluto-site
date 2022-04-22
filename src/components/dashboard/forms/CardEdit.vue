<template>
  <div>
    <section class="h-fit bg-gray-100 bg-opacity-50 shadow-md">
      <div class="rounded-lg border-t-2 border-indigo-400 bg-gray-100 bg-opacity-5 p-4">
        <div class="mx-auto max-w-sm md:mx-0 md:w-full">
          <div class="inline-flex items-center space-x-4">
            <a href="#" class="relative block"> </a>
            <h1 class="text-gray-600">Edition de cartes</h1>
          </div>
        </div>
      </div>
      <hr />
      <div v-if="selectedCard === undefined" class="p-5 text-center">Pas de carte sélectionnée</div>

      <form v-if="selectedCard !== undefined" @submit="onSubmit" class="space-y-6 bg-white pt-3">
        <div class="input-section">
          <img :src="selectedCard.pictureUrl" alt="image card selectionné" class="mx-auto h-[350px]" />
        </div>
        <div class="input-section">
          <h2 class="form-label-section">Rareté</h2>
          <div class="relative w-full">
            <select id="rarete" class="input-select" name="rarity" v-model="rarity">
              <option disabled value="">Sélectionne une rareté</option>
              <option v-for="rarity in rarities" :value="rarity.name">
                {{ rarity.name }}
              </option>
            </select>
            <ErrorMessage name="rarity" class="error-message" />
          </div>
        </div>
        <hr />
        <div class="input-section">
          <h2 class="form-label-section">Set</h2>
          <div class="relative w-full">
            <select id="series" class="input-select" name="serie" v-model="serie">
              <option disabled value="">Sélectionne une série</option>
              <option v-for="serie in series" :value="serie.name">{{ serie.name }}</option>
            </select>
            <ErrorMessage name="serie" class="error-message" />
          </div>
        </div>
        <hr />
        <div class="input-section">
          <h2 class="form-label-section">Nom</h2>
          <div class="relative w-full">
            <input name="name" v-model="name" id="name" class="input-text" placeholder="Remplis moi" />
            <ErrorMessage name="name" class="error-message" />
          </div>
        </div>
        <hr />
        <div class="input-section">
          <h2 class="form-label-section">Description</h2>
          <div class="relative w-full">
            <textarea
              v-model="description"
              name="description"
              id="description"
              class="input-text"
              placeholder="Remplis moi aussi" />

            <ErrorMessage name="description" class="error-message" />
          </div>
        </div>
        <hr />
        <div class="input-section">
          <h2 class="form-label-section">Catégorie</h2>
          <div class="relative w-full">
            <select id="category" class="input-select" name="category" v-model="category">
              <option disabled value="">Sélectionne une catégorie</option>
              <option v-for="category in categories" :value="category.name">{{ category.name }}</option>
            </select>
            <ErrorMessage name="category" class="error-message" />
          </div>
        </div>
        <hr />
        <div class="input-section">
          <h2 class="form-label-section">Sous-catégorie</h2>
          <div class="relative w-full">
            <select id="subCategory" class="input-select" name="subCategory" v-model="subCategory">
              <option disabled value="">Sélectionne une sous-catégorie</option>
              <option v-for="subCategory in subCategories" :value="subCategory.name">{{ subCategory.name }}</option>
            </select>
            <ErrorMessage name="subCategory" class="error-message" />
          </div>
        </div>
        <div class="flex justify-end px-4 pb-4 text-gray-500">
          <button type="button" class="form-button bg-red-600 hover:bg-red-700" @click="this.$refs.modal.openModal()">
            Supprimer
          </button>
          <div class="grow" />
          <button type="submit" class="form-button">Modifier</button>
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
  </div>
</template>

<script>
import * as yup from "yup";
import { ErrorMessage, Field, Form, useField, useForm } from "vee-validate";
import { getSeries } from "../../../services/series";
import { getRarities } from "../../../services/rarities";
import { getCategories } from "../../../services/categories";
import { getSubCategories } from "../../../services/subcategories";
import { deleteCard, updateCard } from "../../../services/cards";
import Modal from "../../Modal.vue";
import { notify } from "@kyvg/vue3-notification";
import { toRaw } from "vue";

export default {
  name: "CardEdit",
  props: {
    selectedCard: Object,
  },
  emits: ["refresh"],
  components: { Form, Field, ErrorMessage, Modal },
  setup(props) {
    const schema = yup.object().shape({
      rarity: yup.string().required("Tu m'as oublié"),
      serie: yup.string().required("Faut cliquez ici !"),
      name: yup.string().required("Remplis moi :'("),
      description: yup.string().required("Moi aussi :("),
      category: yup.string().required("___*( ￣皿￣)/#____"),
      subCategory: yup.string().required("(╯°□°）╯︵ ┻━┻"),
    });

    const { selectedCard } = props;

    const { errors, handleSubmit, setValues, setFieldValue } = useForm({ validationSchema: schema });

    console.debug({ selectedCard });
    const { value: rarity } = useField("rarity", {}, { initialValue: selectedCard?.rarity?.name || "" });
    const { value: serie } = useField("serie", {}, { initialValue: selectedCard?.serie?.name || "" });
    const { value: name } = useField("name", {}, { initialValue: selectedCard?.name || "" });
    const { value: description } = useField("description", {}, { initialValue: selectedCard?.description || "" });
    const { value: category } = useField("category", {}, { initialValue: selectedCard?.category?.name || "" });
    const { value: subCategory } = useField("subCategory", {}, { initialValue: selectedCard?.subCategory?.name || "" });

    return {
      rarity,
      serie,
      name,
      description,
      category,
      subCategory,
      errors,
      handleSubmit,
      setValues,
    };
  },
  data(props) {
    console.debug("data", { props });

    return {
      series: [],
      rarities: [],
      categories: [],
      subCategories: [],
      onSubmit: () => {},
    };
  },
  methods: {
    deleteCard() {
      deleteCard(this.selectedCard).then(() => {
        notify({ title: "Carte supprimée !", type: "success" });
        this.$emit("refresh");
      });
    },
    getSeries() {
      getSeries().then(series => (this.series = series));
    },
    getRarities() {
      getRarities().then(rarities => (this.rarities = rarities));
    },
    getCategories() {
      getCategories().then(categories => (this.categories = categories));
    },
    getSubCategories() {
      getSubCategories().then(subCategories => (this.subCategories = subCategories));
    },
    log(value) {
      console.info(value);
    },
    onCancelModal() {
      this.$refs.modal.closeModal();
    },
    onConfirmModal() {
      this.$refs.modal.closeModal();
      this.deleteCard();
    },
  },
  computed: {
    descriptionModal() {
      return `T'es sûr de supprimer la carte ${this.selectedCard?.name || ""}`;
    },
  },
  watch: {
    selectedCard(oldSelectedCard, newSelectedCard) {
      const card = toRaw(oldSelectedCard) || toRaw(newSelectedCard);
      this.setValues({
        rarity: card?.rarity?.name || "",
        serie: card?.serie?.name || "",
        name: card?.name || "",
        description: card?.description || "",
        category: card?.category?.name || "",
        subCategory: card?.subCategory?.name || "",
      });
    },
  },
  mounted() {
    this.getRarities();
    this.getSeries();
    this.getCategories();
    this.getSubCategories();

    this.onSubmit = this.handleSubmit(values => {
      console.info("Valeur du formulaire", values);
      updateCard(this.selectedCard._id, value);
    });
  },
};
</script>

<style scoped></style>
