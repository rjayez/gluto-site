import axios from "axios";


const URL = "http://localhost:5000/twitch"

export function getSchedule() {

    return axios.get(`${URL}/schedule`)
        .then(res => res.data);
    
}