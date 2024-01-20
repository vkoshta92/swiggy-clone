import React from "react";
// extends isliye use kiuya h kyoki it need inharite some properties.
class Profile extends React.Component{

    // for state hook in class base
    constructor(props){
        // imp i have to know why super use.
super(props);
//  create state variable here
 this.state={
    // count is variable 0 is initial value
    // count:0,
    // count2:0,
    

    // create state

   
        userInfo:{
            name:"Dummy Name",
            location:"Dummy Location",
        
        }



 };

 console.log(' child constructer'+this.props.name);
    }
// constructer->render->component did mount
    async componentDidMount(){

// react single page but hm change kr rhe h to settimeout  pageka component change ho rha h bs but page refresyy nhi ho rha h , means swith nhi ho rha h   bar bar change krne pe settimeiout cl rha h.isi liye hm logo ko unmount krna hota h nhi to dusre pagle me jane me ye phir se run krna strt kr dega.unmount krne ke bad bar bar settimeout nhi chlta rhega.uske liye hm logo ko claer interval unmount me lagana hoga.
        // this.timer=setInterval(()=>{
        //     console.log('namste react op');
        // },1000);

        // console.log('child componnet did mount');

        // api call
        const data= await fetch(" https://api.github.com/users/akshaymarch7")
        const json= await data.json()
        console.log(json);
        this.setState({
            userInfo:json,
        })



        // besr place to api call because fisrt render it then update the component.
        console.log(' child component did mount after render.'+this.props.name);
    }

componentDidUpdate(preProps,prevState){
    // function compoent me use starrer me hm log depency arrau me likhte h vo class me is trh likha jat hai.
    if(this.state.count != prevState.count ||this.state.count2!= prevState.count2){
        // code
    }

// agar dusra statr varible use krna h jse new use effect bante the to  class compone m edobara if use krenge.
if(this.state.count2!= prevState.count2){
    // code
}



    console.log('componnet did update.');
}

// jb dusre page me jte h to unmount call hota h.
// as soon componnet unmounted  it will call.
componentWillUnmount(){
    // clearInterval(this.timer);
    console.log('componnet will unmount');
}

    // can not create without render
render(){
// state destructure
const {count2}=this.state
console.log(' child render'+this.props.name);

return(
    <div>
        <h1>Profile Class Component Vishnu</h1>
        
        {/* <h2>Name:{this.props.name}</h2>
        <h2>XYZ:{this.props.xyz}</h2> */}
<img src={this.state.userInfo.avatar_url} alt="" />
        <h2>Name:{this.state.userInfo.name}</h2>
        <h2>Location:{this.state.userInfo.location}</h2>



        {/* <h2>Count:{this.state.count}</h2> */}
        {/* destructure kr diya h to count ase likh skte hai. */}




        {/* <h2>Count:{count2}</h2>
        <button onClick={()=>{
            // we do not mutate state directly
            // never do this.state=something
            // multiple function set vle ase banate hai.
            this.setState({
                count:1,
                count2:2,
            });
            // this.state.count=1  // not good way
        }}>Class set Function</button> */}
    </div>
    
)
}

}
export default Profile


// in only  child case no parent
// child construvter
// child render
// child compomnet did mount
// aapi call
// set state
// update cycle
// render
// then compinnet did update.







// parent constructer
// parent render
// child constructer
// child render
// kyoki child function  me async finction lga ke api clal kr rhe h to data load hone me time lagega pr tb tk parent did mount call hoga. bad me chid vala. usualy child phle mount hota h.
// parent component did mount
// dom is update
// api call
// json in logged in console
// child  componemt did mount
// child phir se render hega render mount ke bad.kyoki state function h.








// fisrt cobstructer then render.
// first render phase- 
// commit phase- where actulayy react modify the dom.


// this order  is call life cycle.
// parent constructer
// About.js:21  parent render
// ProfileClass.js:16  child constructer
// ProfileClass.js:28  child render
// ProfileClass.js:21  child component did mount after render.
// About.js:16 parent compinent did mount
