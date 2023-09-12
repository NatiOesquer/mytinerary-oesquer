import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from './layouts/Layout'
import Profile from "./pages/Profile";
import Cities from "./pages/Cities"
import Login from "./pages/Login";
import CityDetails from "./pages/CityDetails"
import FormSingUp from "./pages/FormSingUp";
import FormSignIn from "./pages/FormSignIn";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        path: '/', 
        element: <Layout />,
        children: [
            {path: '/', element: <Home />},
            {path: '/index', element: <Home />},
            {path: '/home', element: <Home />},
            {path: '/login', element: <Login />},
            {path: "/profile", element: <Profile />},            
            {path: '/cities', element: <Cities />},           
            {path:'/city/:city_id', element: <CityDetails />},
            {path:'/auth/signup',element:<FormSingUp />},
            {path:'/auth/signin',element:<FormSignIn />},
            {path: '/*', element: <NotFound />},
            
        ]
    }
])

export default router