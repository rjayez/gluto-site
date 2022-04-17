<template>
  <section class="container mx-4 h-fit max-w-xl bg-gray-100 bg-opacity-50 shadow-md">
    <div class="w-full rounded-lg border-t-2 border-indigo-400 bg-gray-100 bg-opacity-5 p-4">
      <div class="w-full md:mx-0">
        <div class="flex inline-flex w-full items-center space-x-4">
          <a href="#" class="relative block" />
          <h1 class="text-gray-600">Sous Catégorie</h1>
          <div class="grow" />
          <select class="input-select" @change.prevent="this.onSelectChange" v-model="this.selectedValue">
            <option value="new">Nouvelle Sous catégorie</option>
            <option disabled>-----------</option>
            <option v-for="rarity in subCategories" :value="rarity.name">Modifier: {{ rarity.name }}</option>
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
        <h2 class="form-label-section">Catégorie</h2>
        <div class="relative w-full">
          <div class="flex">
            <select
              name="category"
              class="input-select inline-block"
              @change.prevent="this.onSelectChangeCategorie"
              v-model="category">
              <option disabled value="">Sélectionne une catégorie</option>
              <option v-for="category in categories" :value="category.name">{{ category.name }}</option>
            </select>
            <button type="button" class="form-button ml-auto" @click="getCategories">
              <SvgRefresh />
            </button>
          </div>
          <span class="error-message">{{ errors.category }}</span>
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
import {
  createSubCategorie,
  deleteSubCategorie,
  getSubCategories,
  updateSubCategorie,
} from "../../../services/subcategories";
import { getCategories } from "../../../services/categories";
import * as yup from "yup";
import { useField, useForm } from "vee-validate";
import SvgPlus from "../../../assets/svg/SvgPlus.vue";
import { notify } from "@kyvg/vue3-notification";
import SvgRefresh from "../../../assets/svg/SvgRefresh.vue";
import { toRaw } from "vue";
import Modal from "../../Modal.vue";

export default {
  name: "SubCategoryForm",
  components: { Modal, SvgRefresh, SvgPlus },
  setup() {
    const schema = yup.object().shape({
      name: yup.string().required("Remplis moi :'("),
      description: yup.string().required("Moi aussi :("),
      category: yup.string().min(1, "Déroule moi !").required("Déroule moi !"),
      order: yup.number().min(1, "Le minimum c'est 1").required("(ノ`Д ́)ノ"),
    });
    const { errors, handleSubmit, setValues, resetForm, meta } = useForm({ validationSchema: schema });

    const { value: name } = useField("name");
    const { value: description } = useField("description");
    const { value: category } = useField("category", {}, { initialValue: "" });
    const { value: order } = useField("order");

    return {
      schema,
      meta,
      errors,
      name,
      description,
      category,
      order,
      setValues,
      resetForm,
      handleSubmit,
    };
  },
  data() {
    return {
      subCategories: [],
      categories: [],
      selected: null,
      selectedValue: "new",
      selectedCategorie: "",
      onSubmit: () => {},
    };
  },
  methods: {
    deleteSubCategory() {
      console.debug(this.subCategories.indexOf(this.selected));
      deleteSubCategorie(this.selected._id)
        .then(e => {
          this.getSubCategories();
          notify({
            title: "Suppression réussi !",
            text: "La sous catégorie fût supprimé et la liste à jour",
            type: "success",
          });
          this.selectedValue = "new";
          this.selected = null;
          // Remplissage des champs du formulaire
          this.resetForm();
        })
        .catch(_ => notify({ title: "Suppression échoué !", type: "error" }));
    },
    getSubCategories() {
      getSubCategories().then(subCategories => {
        this.subCategories = subCategories;
        notify({ title: "Liste à jour.", type: "success" });
      });
    },
    getCategories() {
      return getCategories()
        .then(categories => (this.categories = categories))
        .then(_ =>
          notify({
            title: "Catégorie à jour !",
            type: "success",
          })
        );
    },
    onSelectChange(event) {
      const value = event.target.value;
      console.log("onSelectChange", value);
      if ("new" === value) {
        this.selected = null;
        this.resetForm();
      } else {
        let selected = this.subCategories.filter(subCategory => subCategory.name === value)[0];
        this.selected = selected;
        console.debug({ selected });
        this.setValues({
          ...selected,
          category: toRaw(selected).category.name,
        });
      }
    },
    onSelectChangeCategorie(event) {
      const value = event.target.value;
      console.log("onSelectChangeCategorie", value);
      this.selectedCategorie = value;
    },
    onCancelModal() {
      this.$refs.modal.closeModal();
    },
    onConfirmModal() {
      this.$refs.modal.closeModal();
      this.deleteSubCategory();
    },
  },
  computed: {
    descriptionModal() {
      return `T'es sûr de supprimer la sous catégorie ${this.selected?.name || ""}`;
    },
  },
  mounted() {
    this.getSubCategories();
    this.getCategories().then(_ => {
      // this.category = this.categories?.[0]?.name || "";
    });
    this.onSubmit = this.handleSubmit(values => {
      console.info("Valeur du formulaire", values);
      let upsert;
      if (this.selected === null) {
        upsert = createSubCategorie(values)
          .then(_ => notify({ title: "Création réussi !", type: "success" }))
          .catch(_ => notify({ title: "Création échoué :'(", type: "error" }));
      } else {
        upsert = updateSubCategorie(this.selected._id, values)
          .then(_ => notify({ title: "Modification réussi !", type: "success" }))
          .catch(_ => notify({ title: "Modification échoué :'(", type: "error" }));
      }
      upsert.then(_ => this.getSubCategories());
      this.selectedValue = values.name;
    });
  },
};
</script>

<style scoped></style>