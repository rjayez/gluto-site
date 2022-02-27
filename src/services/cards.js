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

  return axios.post(presignedPost.url, formData).then(res => {
    const location = res.headers["location"];
    return decodeURIComponent(location);
  });
}

export function createAndUploadCard(formData) {
  const file = formData.file[0];
  const body = {
    ...formData,
  };

  return uploadCards(file).then(location => {
    body.pictureUrl = location;
    return axios.post(HOST + "/cards", body);
  });
}

export function getCards() {
  return axios
    .get(URL)
    .then(data => data.data)
    .catch(_ => []);
}

export function updateCard(id, updatedCard) {
  return axios.put(URL + "/" + id, updatedCard);
}

export function deleteCard(card) {
  return axios.delete(URL + "/" + card._id);
}
