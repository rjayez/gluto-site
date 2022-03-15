import axios from "axios";
import { HOST } from "../constants";

export function getRarities() {
  return axios
    .get(HOST + "/rarities")
    .then(result => result.data)
    .catch(err => {
      console.debug(err);
      throw err;
    });
}

export function createRarity({ name, description, rate, order }) {
  const body = {
    name,
    description,
    rate,
    order,
  };
  return axios
    .post(HOST + "/rarities", body)
    .then(result => result.data)
    .catch(err => {
      console.debug(err);
      throw err;
    });
}

export function updateRarity(id, { name, description, rate, order }) {
  const body = {
    name,
    description,
    rate,
    order,
  };
  return axios
    .put(HOST + "/rarities", body)
    .then(result => result.data)
    .catch(err => {
      console.debug(err);
      throw err;
    });
}
