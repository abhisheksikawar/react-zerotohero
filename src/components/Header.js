import { APP_LOGO_URL } from "../utils/Constants"
import {useState} from "react";
const Header=()=>{
    const [loginButton,setLoginButton]=useState("login");
   
    return <div className="header">
        <div className="logo-container">
            <img className="logo" src={APP_LOGO_URL}/>
        </div>
        <div className="header-contents">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
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