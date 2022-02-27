import axios from "axios";
import { HOST } from "../constants";

export function getCategories() {
  return axios
    .get(HOST + "/categories")
    .then(result => result.data)
    .catch(err => []);
}

export function createCategorie(name, description) {
  const body = {
    name,
    description,
  };
  return axios
    .post(HOST + "/categories", body)
    .then(result => result.data)
    .catch(err => []);
}
