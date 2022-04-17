<template>
  <section class="container mx-4 h-fit max-w-xl bg-gray-100 bg-opacity-50 shadow-md">
    <div class="w-full rounded-lg border-t-2 border-indigo-400 bg-gray-100 bg-opacity-5 p-4">
      <div class="w-full md:mx-0">
        <div class="flex inline-flex w-full items-center space-x-4">
          <a href="#" class="relative block" />
          <h1 class="text-gray-600">{{ dataName }}</h1>
          <div class="grow" />
          <select class="input-select" @change.prevent="this.onSelectChange" v-model="this.selectedValue">
            <option value="new">Nouvelle {{ dataName }}</option>
            <option disabled>-----------</option>
            <option v-for="data in datas" :value="data.name">Modifier: {{ data.name }}</option>
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
      <div v-if="configField.rate" class="input-section">
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
            placeholder="Le taux de drop V3  " />
          <span class="error-message">{{ errors.rate }}</span>
        </div>
      </div>
      <hr v-if="configField.rate" />
      <div v-if="configField.visible" class="input-section">
        <h2 class="form-label-section">Visibilité activé</h2>
        <div class="relative w-full">
          <div class="relative mr-auto inline-block w-10 select-none align-middle">
            <input type="checkbox" name="visible" v-model="visible" id="visible" class="input-checkbox" />
            <label for="visible" class="block h-6 cursor-pointer overflow-hidden rounded-full bg-gray-300"> </label>
            <span class="error-message">{{ errors.visible }}</span>
          </div>
        </div>
      </div>
      <hr v-if="configField.visible" />
      <div v-if="configField.dropEnabled" class="input-section">
        <h2 class="form-label-section">Drop activé</h2>
        <div class="relative w-full">
          <div class="relative mr-auto inline-block w-10 select-none align-middle">
            <input type="checkbox" name="dropEnabled" v-model="dropEnabled" id="dropEnabled" class="input-checkbox" />
            <label for="dropEnabled" class="block h-6 cursor-pointer overflow-hidden rounded-full bg-gray-300"> </label>
            <span class="error-message">{{ errors.dropEnabled }}</span>
          </div>
        </div>
      </div>
      <hr v-if="configField.dropEnabled" />
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
import Modal from "../../Modal.vue";
import SvgPlus from "../../../assets/svg/SvgPlus.vue";
import { ErrorMessage, Field, Form, useField, useForm } from "vee-validate";
import { notify } from "@kyvg/vue3-notification";
import * as yup from "yup";

export default {
  components: { Modal, SvgPlus, Form, Field, ErrorMessage },

  name: "FormCollectData",
  props: {
    createData: { type: Function, required: true },
    updateData: { type: Function, required: true },
    deleteData: { type: Function, required: true },
    getDatas: { type: Function, required: true },
    dataName: { type: String, required: true },
    configField: { type: Object, default: { rate: false, dropEnabled: false, visible: false } },
  },
  setup(props) {
    let schema = yup.object().shape({
      name: yup.string().required("Remplis moi :'("),
      description: yup.string().required("Moi aussi :("),
      order: yup.number().min(1, "Le minimum c'est 1").required("(ノ`Д ́)ノ"),
    });

    if (props.configField.rate) {
      schema = schema.shape({
        rate: yup.number().min(0.1, "Le minimum c'est 0.1%").max(99.9, "Le maximum c'est 99.9%").required("Eh oh !"),
      });
    }

    if (props.configField.dropEnabled) {
      schema = schema.shape({
        dropEnabled: yup.boolean().default(true),
      });
    }

    if (props.configField.visible) {
      schema = schema.shape({
        visible: yup.boolean().default(true),
      });
    }

    const { errors, handleSubmit, setValues, resetForm } = useForm({ validationSchema: schema });

    const { value: name } = useField("name");
    const { value: description } = useField("description");
    const { value: order } = useField("order");

    let formValues = { name, description, order };

    if (props.configField.rate) {
      const { value: rate } = useField("rate");
      formValues = { ...formValues, rate };
    }

    if (props.configField.dropEnabled) {
      const { value: dropEnabled } = useField("dropEnabled", {}, { initialValue: false });
      formValues = { ...formValues, dropEnabled };
    }

    if (props.configField.visible) {
      const { value: visible } = useField("visible", {}, { initialValue: false });
      formValues = { ...formValues, visible };
    }

    console.debug("Schema setup", schema);

    return {
      schema,
      errors,
      setValues,
      resetForm,
      handleSubmit,
      ...formValues,
    };
  },
  data() {
    return {
      selected: null,
      selectedValue: "new",
      datas: [],
      onSubmit: () => {},
      mounted: false,
    };
  },

  methods: {
    onSelectChange(event) {
      const value = event.target.value;
      console.log("onSelectChange", value);
      if ("new" === value) {
        this.selected = null;
        this.resetForm();
      } else {
        let selected = this.datas.filter(data => data.name === value)[0];
        console.debug("onSelectChange", selected);
        this.selected = selected;
        this.setValues({
          ...selected,
        });
      }
    },
    fetch() {
      this.getDatas().then(datas => {
        this.datas = datas;
        notify({ title: "Liste à jour.", type: "success" });
      });
    },
    delete() {
      this.deleteData(this.selected._id)
        .then(_ => {
          this.fetch();
          notify({ title: "Suppression réussi !", type: "success" });
          this.selectedValue = "new";
          this.selected = null;
          // Remplissage des champs du formulaire
          this.resetForm();
        })
        .catch(_ => notify({ title: "Suppression échoué !", type: "error" }));
    },
    onCancelModal() {
      this.$refs.modal.closeModal();
    },
    onConfirmModal() {
      this.$refs.modal.closeModal();
      this.delete();
    },
  },
  mounted() {
    this.fetch();
    this.onSubmit = this.handleSubmit(values => {
      console.info("Valeur du formulaire", values);

      let upsert;
      if (this.selected === null) {
        upsert = this.createData(values)
          .then(_ => notify({ title: "Création réussi !", type: "success" }))
          .catch(_ => notify({ title: "Création échoué :'(", type: "error" }));
      } else {
        upsert = this.updateData(this.selected._id, values)
          .then(_ => notify({ title: "Modification réussi !", type: "success" }))
          .catch(_ => notify({ title: "Modification échoué :'(", type: "error" }));
      }
      upsert.then(_ => this.fetch());
      this.selectedValue = values.name;
    });
    this.mounted = true;
    this.resetForm();
  },
  computed: {
    descriptionModal() {
      return `T'es sûr de supprimer : ${this.dataName} ${this.selected?.name || ""}`;
    },
  },
};
</script>

<style scoped></style>
