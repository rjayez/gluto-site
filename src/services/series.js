import axios from "axios";
import { HOST } from "../constants";

export function getSeries() {
  return axios
    .get(HOST + "/series")
    .then(result => result.data)
    .catch(err => []);
}

export function createSerie(name, description, dropEnabled) {
  const body = {
    name,
    description,
    dropEnabled,
  };
  return axios
    .post(HOST + "/series", body)
    .then(result => result.data)
    .catch(err => []);
}
