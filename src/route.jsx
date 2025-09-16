import Home from './Component/Pages/Home'
import Countries from './Component/Pages/Countries'
import AboutUs from './Component/Pages/AboutUs'
import { createBrowserRouter } from 'react-router'


export const router = createBrowserRouter([
    {
        path: '/',
        Element: <Home />
    },
    {
        path: '/countries',
        Element: <Countries />
    },
    {
        path: '/aboutus',
        Element: <AboutUs />
    }
])