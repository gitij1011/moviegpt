import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

const Body=()=>{
 const approute=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browse",
      element:<Browse/>
    }
 ])

 return(
    <div>
       <RouterProvider router={approute}/> 
    </div>
 )  
}

export default Body;