import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import AuthLayout from './Layout/AuthLayout'
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword ";
import ResetPassword from "./components/ResetPassword ";
import Admin from "./view/Admin";
import Clientes from "./view/Clientes";
import Soporte from "./view/Soporte";


const router  = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>
    },
    {
        path:'/auth',
        element:<AuthLayout/>,
        children:[
            {
                path:'/auth/login',
                element: <Login/>
            },
            {
                path:'/auth/registro',
                element:<Register/>
            },
            {
                path:'/auth/olvidar',
                element:<ForgotPassword/>
            },
            {
                path:'/auth/restablecer',
                element:<ResetPassword/>
            },
            {
                path:'/auth/admin-dashboard',
                element:<Admin/>
            },
            {
                path:'/auth/clientes',
                element:<Clientes/>
            },
            {
                path:'/auth/soporte',
                element:<Soporte/>
            }
          
        ]
    }
])

export default router
