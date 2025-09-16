import Home from './Component/Pages/Home'
import Countries from './Component/Pages/Countries'
import AboutUs from './Component/Pages/AboutUs'
import { createBrowserRouter } from 'react-router'


export const router = createBrowserRouter([
    {
        path : "/",
        element : <Home />
    },
    {
        path : "/countries",
        element : <Countries />
    },
    {
        path : "/about",
        element : <AboutUs />
    }
])