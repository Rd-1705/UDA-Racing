import { Navigate } from "react-router-dom";
import { useAuth } from "../conteks/Autentication";

export default function ProtectedRouter({children}) {
    const {user} = useAuth();

    return user ? children : <Navigate to="/login" replace />;
}