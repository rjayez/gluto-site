import axios from "axios";
import { HOST } from "../constants";

const URL = `${HOST}/cards`;

async function getPresignedUploadUrl(type) {
  return await axios.post(URL + "/upload", { type: type }).then(res => res.data);
}

export async function uploadCards(file) {
  const { type } = file;
  const presignedPost = await getPresignedUploadUrl(type);

  const formData = new FormData();
  formData.append("Content-Type", file.type);
  Object.entries(presignedPost.fields).forEach(([key, value]) => {
    formData.append(key, value);
  });
  formData.append("file", file);

  return axios
    .post(presignedPost.url, formData)
    .then(res => {
      const location = res.headers["location"];
      return decodeURIComponent(location);
    })
    .catch(err => {
      console.debug(err);
      throw err;
    });
}

export function createAndUploadCard(formData) {
  const file = formData.fileInput[0];
  const body = {
    ...formData,
  };

  delete body.fileInput;

  return uploadCards(file)
    .then(location => {
      body.pictureUrl = location;
      return axios.post(HOST + "/cards", body);
    })
    .catch(err => {
      console.debug(err);
      throw err;
    });
}

export function getCards() {
  return axios
    .get(URL)
    .then(data => data.data)
    .catch(err => {
      console.debug(err);
      throw err;
    });
}

export function updateCard(id, updatedCard) {
  return axios.put(URL + "/" + id, updatedCard).catch(err => {
    console.debug(err);
    throw err;
  });
}

export function deleteCard(card) {
  return axios.delete(URL + "/" + card._id).catch(err => {
    console.debug(err);
    throw err;
  });
}
