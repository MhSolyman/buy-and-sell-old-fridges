import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Product from "../../Pages/Home/Product/Product";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [{
            path: '/',
            loader: () => fetch('http://localhost:5000/categories'),
            element: <Home></Home>
        },
        {
            path: '/category/:id',
            loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),

            element: <Product></Product>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/Register',
            element:<Register></Register>
        }
    
    
    ]
    }
])

export default router