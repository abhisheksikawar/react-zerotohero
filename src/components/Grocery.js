import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Grocery=()=>{

    const {loggedInUser,setUserName}=useContext(UserContext);
    console.log("dsfsd",loggedInUser);
    return <div>
        I am showing grocery list and i am also a complex component and i am having lots of child component.
        <div>
            <input type="text" className="border-2 border-gray-950" value={loggedInUser} onChange={(e)=>{
                setUserName(e.target.value);
            }} /> 
        </div>

    </div>
}

export default Grocery