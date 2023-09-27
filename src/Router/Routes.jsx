import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Favorite from "../Pages/Favorite/Favorite";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PhoneDetails from "../components/PhoneDetails/PhoneDetails";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader: ()=> fetch('/public/phones.json')
            },
            {
                path: '/favorite',
                element: <Favorite></Favorite>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/phones/:id',
                element: <PhoneDetails></PhoneDetails>,
                loader: ()=> fetch('/public/phones.json')
            }
        ],
        errorElement: <ErrorPage></ErrorPage>,
    }
])
export default routes;