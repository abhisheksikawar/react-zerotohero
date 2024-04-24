import { Component } from "react"
class UserInfo extends Component{

    constructor(props){
        super(props);
        console.log(this.props);
        console.log("Child Constructor");
        this.state={
            count:0,
            userInfo:{
                name:"Default Name",
                location:" default location",
                

            }
        }
        
    }
    async componentDidMount(){
        const data=await fetch('https://api.github.com/users/abhisheksikawar');
        const json=await data.json();
        this.setState({
            userInfo:json
        })
        console.log("Chile Component Did Mount");
    }


    render(){
       // const {name,location}=this.props;
        const count=this.state;
        const {name,location,avatar_url}=this.state.userInfo;
        console.log("Child Render");
        return <div>
            I am working
            <h1>{name}</h1>
            <h2>{location}</h2>
            <input type="text" value={this.state.count} readOnly ></input>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                    
                });
                console.log(count);
            }}>Increase Count</button>
        </div>
    }
}

export default UserInfo