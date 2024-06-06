import axios from "axios";

const BaseApi = axios.create({
  baseURL: "https://helpdesk-k3ho.onrender.com",
});

export default BaseApi;
