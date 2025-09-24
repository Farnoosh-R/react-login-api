import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { Navigate } from "react-router-dom";
import type { JSX } from "react";
import type React from "react";

interface ProtectedRouteProps {
    children: JSX.Element
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {

    const isLoggedIn = useSelector((state: RootState) => !!state.auth.token)
    if (!isLoggedIn) {
        return <Navigate to="/login" replace/>
    }
    return children;
    
}
export default ProtectedRoute;