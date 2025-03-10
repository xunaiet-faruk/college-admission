import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Homepages/Home";
import LoginAndRegister from "../../Pages/Autentication/Login/LoginAndRegister";
import College from "../../Pages/College/College";
import AdmisitionCollege from "../../Pages/AdmisitionCollege/AdmisitionCollege";
import CollegeDetails from "../../Pages/College/CollegeDetails";
import Mycollege from "../../Pages/Mycollege/Mycollege";
import Error from "../../Error";
import Privateroute from "./Privateroute";
import ProfileDetails from "../../Pages/ProfileDetails/ProfileDetails";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<LoginAndRegister/>
            },
            {
                path:'/college',
                element:<College/>
            },
            {
                path:'/college/:id',
                element: <Privateroute><CollegeDetails /></Privateroute>
            },
            {
                path:'/admission',
                element:<AdmisitionCollege/>
            },
            {
                path:'/mycollege',
                element:<Mycollege/>
            },
            {
                path:'/profile',
                element:<ProfileDetails/>
            },
            {
                path:'/edit',
                element:<ProfileDetails/>
            }
        ]
    },
]);