import axios from "axios";
const BASE_URL = import.meta.env.VITE_AXIOS_BASE_URL;
const axiosInstance = axios.create({
    baseURL: BASE_URL, // Replace with your API base URL
    //baseURL: "http://localhost:3000/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;