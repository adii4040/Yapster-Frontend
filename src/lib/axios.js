import axios from 'axios'

export const axiosInstances = axios.create({
    baseURL: import.meta.env.MODE === "development" 
        ? "http://localhost:8080/api/v1" 
        : `${import.meta.env.VITE_API_URL}/api/v1`, 
    withCredentials: true
})