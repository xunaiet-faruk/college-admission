import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Homepages/Navbar/Navbar";
import Footer from "../Pages/Homepages/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;