import axios from "axios";
import { HOST } from "../constants";

export function getSubCategories() {
  return axios
    .get(HOST + "/sub-categories")
    .then(result => result.data)
    .catch(err => {
      console.debug(err);
      throw err;
    });
}

export function createSubCategorie({ name, description, category, order }) {
  const body = {
    name,
    description,
    category,
    order,
  };
  return axios
    .post(HOST + "/sub-categories", body)
    .then(result => result.data)
    .catch(err => {
      console.debug(err);
      throw err;
    });
}

export function updateSubCategorie(id, { name, description, order, category }) {
  const body = {
    name,
    description,
    order,
    category,
  };
  return axios
    .put(HOST + `/sub-categories/${id}`, body)
    .then(result => result.data)
    .catch(err => {
      console.debug(err);
      throw err;
    });
}

export function deleteSubCategorie(id) {
  return axios.delete(HOST + `/sub-categories/${id}`).catch(err => {
    console.debug(err);
    throw err;
  });
}
