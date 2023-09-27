import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { CircularProgress } from "@mui/material";


const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useAuth();
    if(loading){
        return <CircularProgress className="h-8 w-8 mx-auto mt-8" />
    }
    if(user){
        return children
    }
    
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;