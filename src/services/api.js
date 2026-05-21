import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_SERVER_URL + "/api" ||
    "https://server-two-xi-91.vercel.app/api",

  withCredentials: true,
});

export default api;

..