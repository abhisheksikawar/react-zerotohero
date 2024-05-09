import { APP_LOGO_URL } from "../utils/Constants"
import {useContext, useState} from "react";
import { Link } from "react-router-dom";
import useUserStatus from "../utils/useUserStatus";
import UserContext from "../utils/UserContext";
const Header=()=>{
    const [loginButton,setLoginButton]=useState("login");

    const status=useUserStatus();
    const {loggedInUser}=useContext(UserContext)
   
    return <div className="flex justify-between items-center p-2 shadow-lg">
        <div className="w-20">
            <img className="logo" src={APP_LOGO_URL}/>
        </div>
        <div className="flex text-slate-700 font-semibold italic">
            <ul className="flex mx-6">
            <li className="px-6">Active Status: {status?"green":"red"}</li>
                <li className="px-6"><Link to="/">Home</Link></li>
                <li className="px-6" ><Link to="/about">About Us</Link></li>
                <li className="px-6" ><Link to="/contact">Contact Us</Link></li>
                <li className="px-6" ><Link to="/grocery">Grocery</Link></li>
                <li className="px-6" >Cart</li>
                <button className="px-6" onClick={()=>{
                     if(loginButton==="login"){
                         setLoginButton("logout");
                     }else{
                         setLoginButton("login")
                        }
                }} >{loginButton}</button>
                <li className="px-6" >{loggedInUser}</li>
            </ul>
        </div>

    </div>

}

export default Header