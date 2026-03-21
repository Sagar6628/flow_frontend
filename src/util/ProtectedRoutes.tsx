 import { isAuthenticated } from "../api/auth";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
    const token = isAuthenticated();
    if (!token) {
        return <Navigate to="/login" replace />;
     }
    
     return <Outlet/>

}