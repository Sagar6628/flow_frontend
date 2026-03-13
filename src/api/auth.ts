import axios from "axios";
const API_URL = "http://localhost:8080/auth/login";
export const login  = async (email: string, password: string) => {

    const response = await axios.post(API_URL, {email, password});

    const token = response.data.token;
    if (token) {
        localStorage.setItem("token", token);
    }
    return response.data;
}

export const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return !!token;
}

export const logout = () => {
    localStorage.removeItem("token");
}