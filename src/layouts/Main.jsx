import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {

    const location = useLocation()
    const isLoginPage = location.pathname
    // console.log(isLoginPage);

    return (
        <div>
            {isLoginPage == '/login' || isLoginPage == '/signup' ? '' : <Navbar></Navbar>}
            <Outlet></Outlet>
            {isLoginPage == '/login' || isLoginPage == '/signup' ? '' : <Footer></Footer>}
        </div>
    );
};

export default Main;