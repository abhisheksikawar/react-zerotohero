import React,{Suspense, lazy, useState} from "react"
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

const Grocery=lazy(()=>import("./components/Grocery"));




const AppLayout=()=>{
    const [userName,setUserName]=useState("Abhishek");
    return( 
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}><div>
        <Header/>
        <Outlet/>
    </div>
    </UserContext.Provider>
    );
    }

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },{
                path:"/about",
                element:<About/>,
            },{
                path:"/contact",
                element:<Contact/>,
            },{
                path:"/grocery",
                element:(<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>),
            },{
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>,
            }

        ],
        errorElement:<Error/>
        
    }
]);    

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

