import axios from "axios";
import { HOST } from "../constants";

export function getCategories() {
  return axios
    .get(HOST + "/categories")
    .then(result => result.data)
    .catch(err => {
      console.debug(err);
      throw err;
    });
}

export function createCategorie({ name, description, order }) {
  const body = {
    name,
    description,
    order,
  };
  return axios
    .post(HOST + "/categories", body)
    .then(result => result.data)
    .catch(err => {
      console.debug(err);
      throw err;
    });
}

export function updateCategorie(id, { name, description, order }) {
  const body = {
    name,
    description,
    order,
  };
  return axios
    .put(HOST + `/categories/${id}`, body)
    .then(result => result.data)
    .catch(err => {
      console.debug(err);
      throw err;
    });
}

export function deleteCategorie(id) {
  return axios.delete(HOST + `/categories/${id}`).catch(err => {
    console.debug(err);
    throw err;
  });
}
