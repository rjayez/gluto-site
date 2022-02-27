import axios from "axios";
import { HOST } from "../constants";

export function getSubCategories() {
  return axios
    .get(HOST + "/sub-categories")
    .then(result => result.data)
    .catch(err => []);
}

export function createSubCategorie(name, description) {
  const body = {
    name,
    description,
  };
  return axios
    .post(HOST + "/sub-categories", body)
    .then(result => result.data)
    .catch(err => []);
}
