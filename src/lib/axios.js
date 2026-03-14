import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080'

export const axiosInstances = axios.create({
    baseURL: import.meta.env.MODE === "development" 
        ? "http://localhost:8080/api/v1" 
        : `${apiUrl}/api/v1`, 
    withCredentials: true,
    timeout: 30000
})