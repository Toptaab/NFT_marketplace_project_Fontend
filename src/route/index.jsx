import {createBrowserRouter, RouterProvider,Navigate  } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import Container from '../layout/Container'
import SettingPage from '../pages/SettingPage'
import RedirectRoute from './protectRoute/RedirectRoute'

const router = createBrowserRouter([
{
    path: "/",
    element: <Container />,
    children: [
        {
            path:"",
            element: (
                <RedirectRoute>
            <LoginPage />
                </RedirectRoute>
            )
        
        },
        {
            path: "/login",
            element: (
                <RedirectRoute>
            <LoginPage />
                </RedirectRoute>
            )
        },
        {
            path: "/register",
            element: (
                <RedirectRoute>
            <RegisterPage />
            </RedirectRoute>
            )
        },
        {
            path: '/setting',
            element: <SettingPage />
        },
        {
            path: '/homepage',
            element: <HomePage />
        },
        {
            path: '*',
            element: <Navigate to='/login' />
        }
    ]
},

])

export default function Router() {
    return <RouterProvider router={router} />
}