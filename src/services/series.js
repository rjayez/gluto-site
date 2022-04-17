import axios from "axios";
import { HOST } from "../constants";

export function getSeries() {
  return axios
    .get(HOST + "/series")
    .then(result => result.data)
    .catch(err => {
      console.debug(err);
      throw err;
    });
}

export function createSerie({ name, description, dropEnabled, order }) {
  const body = {
    name,
    description,
    dropEnabled,
    order,
  };
  return axios
    .post(HOST + "/series", body)
    .then(result => result.data)
    .catch(err => {
      console.debug(err);
      throw err;
    });
}

export function updateSerie(id, { name, description, dropEnabled, order }) {
  const body = {
    name,
    description,
    dropEnabled,
    order,
  };
  return axios
    .put(HOST + `/series/${id}`, body)
    .then(result => result.data)
    .catch(err => {
      console.debug(err);
      throw err;
    });
}

export function deleteSerie(id) {
  return axios.delete(HOST + `/series/${id}`).catch(err => {
    console.debug(err);
    throw err;
  });
}
