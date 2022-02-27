import axios from "axios";
import { HOST } from "../constants";

export function getRarities() {
  return axios
    .get(HOST + "/rarities")
    .then(result => result.data)
    .catch(err => []);
}

export function createRarity(name, description, rate) {
  const body = {
    name,
    description,
    rate,
  };
  return axios
    .post(HOST + "/rarities", body)
    .then(result => result.data)
    .catch(err => []);
}
