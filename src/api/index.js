import axios from 'axios';

const api = axios.create({
    baseURL: "https://fakestoreapi.com",
    headers: {
        'Content-Type': 'application/json',
    }
})

api.interceptors.request.use((config) => {
    if (config.data instanceof FormData) {
        delete config.headers['Content-Type'];
    }
    return config;
})

export default api;