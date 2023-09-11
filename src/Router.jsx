import { RouterProvider,createBrowserRouter } from "react-router-dom";
import {Another} from "./another.jsx";
import App from'./App.js'
import { ErrorPage } from "./error";
import { API } from "./open.jsx";
import { SimpleAPI } from "./ai_fetch.jsx";

export function Router(){
    const router=createBrowserRouter([
        {
          path:'/',
          element:<App/>,
          errorElement:<ErrorPage/>
        },
        {
          path:"/another",
          element:<Another/>,
        },
        {
            path:"/another/fetch",
            element:<API/>
        },
        {
            path:"/another/ai_fetch",
            element:<SimpleAPI/>
        }
        // {
        //   path:"/another/anotherone",
        //   element:<Anotherone/>
        // }
       
      ]);
      return <RouterProvider router={router}/>
}
