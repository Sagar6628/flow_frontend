import axios from "axios";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "./auth";
import { toast } from "sonner";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

export const apiClient = axios.create({
    baseURL: BASE_API_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
},
(error) => Promise.reject(error)
);

apiClient.interceptors.response.use((response) => response,
(error) => {
    if (error.response && error.response.status === 401) {
        handleLogout();
         window.location.href = "/login";
         toast.error("Session expired. Please log in again.",{
                description: "Your session has expired. Please log in again to continue.",
                closeButton: true,
                position: "top-right",
         });
    }
    return Promise.reject(error);
}
);