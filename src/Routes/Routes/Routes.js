import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import AllPhones from "../../Pages/PhoneCategories/AllPhones/AllPhones";
import Register from "../../Pages/Register/Register";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allPhones/:id',
                element: <AllPhones></AllPhones>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
        ]
    }
]);

export default router;