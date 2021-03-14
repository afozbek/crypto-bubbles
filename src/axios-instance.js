import axios from "axios";

const nomics = axios.create({
  baseURL: "https://api.nomics.com/v1",
});


export default nomics;
