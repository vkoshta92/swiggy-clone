import { useEffect, useState,useContext } from "react";
import Logo from "../assets/img/logo.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utiles/useOnline";
import UserContext from "../utiles/UserContext";
import { useSelector } from "react-redux";


// const loggedInUser=()=>{
//   // api call to check authentication
//   return true;
// };


// spa- single page applications
// two types of routing -client type and server type routing
// server side- all the pages comes from server.
//client side - without making any network call page refresh.



// is trh hm koi downloded logo use kr skte hai.
const Title =()=> (
  <a href="/">
    {/* ctrl+sce showing suggetion in tailwind */}
 <img data-testid="logo" className="h-28 p-2" src={Logo} alt="logo" />
 </a>
 
);


// const Title =()=> (
//     <a href="/">
//    <img className="logo" src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj" alt="logo" />
//    </a>
   
//   );


  const Header=()=>{

    const[isLoggedIn,setIsLoggedIn]=useState(false);
// console.log("render");
// useEffect(()=>{
// console.log('useeffect');
// },[isLoggedIn])
    // const[title,setTitle]=useState("Food Villa");
    // console.log("render()");

// use online hooks yha use kiya h
// const isLoggedIn=useAuth();   // bana skte h asa.
// we can create hook like this.
// const[getLocalVariables,setLocalVariables]=useLocalStorage();
const isOnline=useOnline();

// jase prop driliing me use krte the ak child ka data parent me vse hi  usecontext hook use krtre h but ye best way hai.
const {user2}=useContext(UserContext);


// for subsribe we use useselecter
const cartItems=useSelector(store=>store.cart.items);
console.log(cartItems);


    return( 
      // sm - media query small device limit
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-pink-50">
        <Title/>
      {/* <h1>{title}</h1>
      <button onClick={()=>setTitle("New Food App")}>Change Title</button> */}

       <div className="nav-items">
        <ul className="flex py-10">

            {/* <Link to="/"><li>Home</li></Link> */}
            <li className="px-2"><Link to="/">Home</Link></li>
            <li className="px-2"><Link to="/about">About</Link></li>
            <li className="px-2"><Link to="/contact">Contact</Link></li>
           
            <li className="px-2"><Link to="/instamart">Instamart</Link></li>
            <li className="px-2" ><Link to="/cart" data-testid="cart">Cart-{cartItems.length} items</Link></li>
        </ul>
       </div>
{/* login logout button */}

{/* hmne islonline hook ko yha use kr liya h onlinerhega to green nhi to red. */}
<h1 data-testid="online-status">{isOnline?"🧶":"🛑"}</h1>
<span className="p-10 font-bold text-red-900 ">{user2.name}</span>
{
  //  js expression & statement work here.
// ((a=10),console.log(a))
isLoggedIn? <button onClick={()=>setIsLoggedIn(false)}>Logout</button>:<button onClick={()=>setIsLoggedIn(true)}>Login</button>


}



    </div>
    )
};




  export default Header;

//   agar hm const ke phle export lagake export kre to import krne ke liye use {} ye use krenge.
