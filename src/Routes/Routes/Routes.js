import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllSellers from "../../Pages/Admin/AllSellers";
import BuyersList from "../../Pages/Allbuyers/BuyersList";

import Home from "../../Pages/Home/Home/Home";
import Product from "../../Pages/Home/Product/Product";
import Login from "../../Pages/Login/Login";
import Myorder from "../../Pages/Myorder/Myorder";
import Register from "../../Pages/Register/Register";
import ReportedItems from "../../Pages/ReportedItems/ReportedItems";
import Addproduct from "../../Pages/Sellers/Addproduct/Addproduct";
import Mybyers from "../../Pages/Sellers/MyByers/Mybyers";

import MyProducts from "../../Pages/Sellers/MyProducts/MyProducts";
import SellerRoutes from "./Seller/SellerRoutes";
import BuyerRoutes from "./Buyer/BuyerRoutes";
import PrivateRoutes from "./Private/PrivateRoutes";
import AdminRoutes from "./Admin/AdminRoutes";

import Blog from "../../Pages/Home/Home/Blog/Blog";
import Error from "../../Pages/Home/Home/Error/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [{
            path: '/',
            loader: () => fetch('https://y-hay6nry43-mhsolyman.vercel.app/categories'),
            element: <Home></Home>
        },
        {
            path: '/category/:id',
            loader: ({ params }) => fetch(`https://y-hay6nry43-mhsolyman.vercel.app/category/${params.id}`),

            element: <PrivateRoutes><Product></Product></PrivateRoutes>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/Register',
            element: <Register></Register>
        },
        {
            path: '/reporteditems',
            element: <AdminRoutes><ReportedItems></ReportedItems></AdminRoutes>
        },
        {
            path: '/allSellers',
            element: <AdminRoutes><AllSellers></AllSellers></AdminRoutes>
        }
            ,
        {
            path: '/allbuyers',
            element: <AdminRoutes><BuyersList></BuyersList></AdminRoutes>
        },
        {
            path: '/MyProducts',
            element: <SellerRoutes><MyProducts></MyProducts></SellerRoutes>
        },
      
        
        {
            path:'/Addproduct',
            element:<SellerRoutes><Addproduct></Addproduct></SellerRoutes>
        },
        {
            path:'/Mybuyers',
            element:<SellerRoutes><Mybyers></Mybyers></SellerRoutes>
        },
        {
            path:'/Myorder',
            element:<BuyerRoutes><Myorder></Myorder></BuyerRoutes>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/report',
            eliment:<ReportedItems></ReportedItems>
        }
        


        ]
    },
    {
        path:"*",
        element:<Error></Error>
      }
])

export default router