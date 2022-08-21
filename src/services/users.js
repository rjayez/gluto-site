import axios from "axios";
import { HOST } from "../constants";

const URL = `${HOST}/users/`;

export function getCollection(twitchId) {
  return axios
    .get(URL + `${twitchId}/collection`)
    .then(data => data.data)
    .catch(err => {
      console.debug(err);
      throw err;
    });
}

export default getCollection;
