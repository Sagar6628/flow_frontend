import axios from "axios";
const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;
export const login  = async (email: string, password: string) => {

    const response = await axios.post(BASE_API_URL, {email, password});

    const token = response.data.token;
    if (token) {
        localStorage.setItem("token", token);
    }
    console.log("token",token);

    return response.data;
}

export const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return !!token;
}

export const handleLogout = () => {
    localStorage.removeItem("token");
}