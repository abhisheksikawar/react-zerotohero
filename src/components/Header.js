import { APP_LOGO_URL } from "../utils/Constants"
import {useState} from "react";
import { Link } from "react-router-dom";
import useUserStatus from "../utils/useUserStatus";
const Header=()=>{
    const [loginButton,setLoginButton]=useState("login");

    const status=useUserStatus();
   
    return <div className="header">
        <div className="logo-container">
            <img className="logo" src={APP_LOGO_URL}/>
        </div>
        <div className="header-contents">
            <ul>
            <li>Active Status: {status?"green":"red"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li>Cart</li>
                <button className="login-logout" onClick={()=>{
                     if(loginButton==="login"){
                         setLoginButton("logout");
                     }else{
                         setLoginButton("login")
                        }
                }} >{loginButton}</button>
            </ul>
        </div>

    </div>

}

export default Header