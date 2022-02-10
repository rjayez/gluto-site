import axios from "axios";

const HOST = import.meta.env.VITE_APP_HOST_API;
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

export function getRarities() {
  return axios
    .get(HOST + "/rarities")
    .then(result => result.data)
    .catch(err => []);
}

export function getSeries() {
  return axios
    .get(HOST + "/series")
    .then(result => result.data)
    .catch(err => []);
}
