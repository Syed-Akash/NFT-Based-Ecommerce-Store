
import AboutUs from './Pages/AboutUs'
import Categories from './Pages/Categories'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import Register from './Pages/Register';
import Products from './Pages/Products';
import Profile from './Pages/Profile';
import AddProduct from './Pages/AddProduct';
import {
    createBrowserRouter,
    RouterProvider
  } from "react-router-dom";


const router = createBrowserRouter([

            {
                 path:'/',
                  element:<Home/>,
            },
            {
                path:'/Categories', element:<Categories/>
             },

            {
                path:'/AboutUs', element:<AboutUs/>
            },
            {
                path:'/SignIn', element:<SignIn/>
                },
            {
                path:'/Register', element:<Register/>
                },
            {
                path:"/Product/:idproducts", element:<Products/>
                },
            {
                 path:"/AddProduct", element:<AddProduct/>
                },
                {
                path:"/Profile", element:<Profile/>
                   },
            ])
            function App(){
                return(
                    <div>
                        <RouterProvider router={router}/>
                    </div>
                );
            }
export default App;