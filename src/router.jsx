import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from './layouts/Layout'
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Cities from "./pages/Cities"
import Login from "./pages/Login";
import CityDetails from "./pages/CityDetails"

const router = createBrowserRouter([
    {
        path: '/', 
        element: <Layout />,
        children: [
            {path: '/', element: <Home />},
            {path: '/index', element: <Home />},
            {path: '/home', element: <Home />},
            {path: '/login', element: <Login />},
            {path: '/signin', element: <SignIn />},
            {path: '/signup', element: <SignUp />},
            {path: '/cities', element: <Cities />},
            {path:'/city/:city_id', element: <CityDetails />},
        ]
    }
])

export default router