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

export function createSubCategorie({ name, description, order }) {
  const body = {
    name,
    description,
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

export function updateSubCategorie(id, { name, description, order }) {
  const body = {
    name,
    description,
    order,
  };
  return axios
    .put(HOST + "/sub-categories", body)
    .then(result => result.data)
    .catch(err => {
      console.debug(err);
      throw err;
    });
}
