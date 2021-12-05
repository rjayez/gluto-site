import axios from "axios";

const URL = `${import.meta.env.VITE_APP_HOST_API}/twitch`;

export function getSchedule() {
  return axios.get(`${URL}/schedule`).then(res => res.data);
}

export function getIsLive() {
  return axios.get(`${URL}/stream`).then(res => res.data?.isLive);
}