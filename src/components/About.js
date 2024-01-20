import { Outlet } from "react-router-dom"
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile"
import { Component } from "react";
import UserContext from "../utiles/UserContext";

class About extends Component{

    constructor(props){
        // constructer me iskiye hm log sttae bante hai kyoi phle constructer call hota hai.
        super(props);
        
// this.state={
// userInfo:{
//     name:"Dummy Name",
//     location:"Dummy Location",
// }
// }
console.log(' parent constructer');

    }

  componentDidMount(){
// best place to api call
// jse useeffect me functional component me hota h. same as it is class compiment me ase  karte hai.




        console.log('parent compinent did mount');

    }


    render(){
        console.log(' parent render');
        return(

            <div>
                <h1>About Us Page.</h1>

{/* class base me is trh use context state hook ko use karte hai. */}
                <UserContext.Consumer>
                    {/* {(value)=>console.log(value)} */}
                    {({user2})=><h4 className="font-bold text-xl p-10">{user2.name}-{user2.email}</h4>}
                </UserContext.Consumer>


                <p>This is the Project of food website.</p>
                <Outlet/>
                {/* hm outlet ue kr skte h child me ya phir hm  sidha profile ko call kra skte hai, */}
                {/* <ProfileFunctionalComponent name={"Vk function props"}/> */}

                {/* <Profile name={"Vk Class props  child1"} xyz="abc"/> */}
                {/* <Profile name={"Vk Class props child2"} xyz="abc"/> */}
            
            </div>
            
            )
            }
    }



export default About


//  first child phle didmout hogi kyoki agar api call kr di chid 1 to vo patch kr degi first and second child ko.

// parent constrcurer
// parent render
// first child custructer
// first child render
// second child constructer
// second  child render

// dom updated for child
// first child didmount

// second child didmount
// parent  didmont mount












// functional base

// import { Outlet } from "react-router-dom"
// import Profile from "./ProfileClass";
// import ProfileFunctionalComponent from "./Profile"

// const About=()=>{
// return(

// <div>
//     <h1>About Us Page.</h1>
//     <p>This is the Project of food website.</p>
//     {/* <Outlet/> */}
//     {/* hm outlet ue kr skte h child me ya phir hm  sidha profile ko call kra skte hai, */}
//     <ProfileFunctionalComponent name={"Vk function props"}/>
//     <Profile name={"Vk Class props"}/>

// </div>

// )
// }

// export default About