import { Component } from "react"
import UserInfo from "./UserInfo"

class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
        
    }

    componentDidMount(){
        console.log("Parent Component Did Mount");
    }
    render(){
        console.log("Parent Render");
        return <div>
        <h1>I am About Component</h1>
        <UserInfo name="abhishek" location="Agra"/>
    </div>
    }
}

export default About