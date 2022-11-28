import axios from "axios";

const API = axios.create({
    //https://sujeitoprogramador.com/r-api/?api=filmes
    baseURL: 'https://sujeitoprogramador.com/'
})
export default API;