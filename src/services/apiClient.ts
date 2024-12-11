import axios from "axios";

export const controller = new AbortController();

export default axios.create({baseURL:"https://api.rawg.io/api",params:{
    key:"1f6141cfe287439c91cab929ea9521a5"
}})