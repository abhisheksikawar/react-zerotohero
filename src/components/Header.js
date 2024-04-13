import { APP_LOGO_URL } from "../utils/Constants"
const Header=()=>{
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
            </ul>
        </div>

    </div>

}

export default Header