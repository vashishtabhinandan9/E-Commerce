import axios from "axios";

const BASE_URL = import.meta.env.VITE_AXIOS_BASE_URL;

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export default axiosInstance;
