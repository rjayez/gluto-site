import axios from "axios";

const URL = `${import.meta.env.VITE_APP_HOST_API}/cards`;

async function getPresignedUploadUrl(type) {
  console.log({ URL });
  return await axios.post(URL, { type: type }).then(res => res.data);
}

export async function uploadCards(file) {
  const { type } = file;
  const presignedPost = await getPresignedUploadUrl(type);

  const formData = new FormData();
  formData.append("Content-Type", file.type);
  Object.entries(presignedPost.fields).forEach(([key, value]) => {
    console.log({ key, value });
    formData.append(key, value);
  });
  formData.append("file", file);

  return axios.post(presignedPost.url, formData).then(res => {
    const location = res.headers["Location"];
    console.log({ location });
    return decodeURIComponent(location);
  });
}
