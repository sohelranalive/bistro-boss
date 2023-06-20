import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layouts/Dashboard";
import MyCart from "../pages/Dashboard/MyCart";
import AllUser from "../pages/Dashboard/AllUser";
import AddItem from "../pages/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../pages/ManageItem/ManageItem";
import Payment from "../pages/Payment/Payment";
import Userhome from "../pages/Userhome/Userhome";
import Adminhome from "../pages/Adminhome/Adminhome";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'myCart',
                element: <MyCart></MyCart>,
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'userhome',
                element: <Userhome></Userhome>
            },
            // admin route
            {
                path: 'allUser',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>,
            },
            {
                path: 'addItem',
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: 'manageItem',
                element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
            },
            {
                path: 'adminhome',
                element: <AdminRoute><Adminhome></Adminhome></AdminRoute>
            }
        ]
    }
])

export default router