import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Detail from "../Pages/Detail/Detail";
import Favorites from "../Pages/Favorites/Favorites";
import Admin from "../Pages/Admin/Admin";
import Home from "../Pages/Home/Home";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/fav",
                element: <Favorites />
            },
            {
                path: "/",
                element: <Detail />
            }
        ]

    },
    {
        path: "/admin",
        element: <Admin />
    }
])

export default routes