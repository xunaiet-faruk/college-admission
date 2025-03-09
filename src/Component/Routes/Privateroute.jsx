import { useContext } from "react";
import { Authcontext } from "../../Pages/Autentication/Providers/Authprovider";
import { Navigate } from "react-router-dom";
import Loading from "../Loading";


const Privateroute = ({children}) => {
    
    const {user,loading} =useContext(Authcontext)

    if(loading){
        return <Loading/>
    }

    if(user){
        return children;
    }

    return <Navigate to={'/login'}></Navigate>
};

export default Privateroute;