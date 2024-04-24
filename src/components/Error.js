import {useRouteError} from "react-router-dom"
const Error=()=>{
    const error=useRouteError();
    console.log(error);
    return <div>
        Error Occurred
    </div>
}

export default Error