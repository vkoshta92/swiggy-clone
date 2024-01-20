// body
// props-properties, it is object , all data 
import { useState,useEffect,useContext} from "react";
import { Link } from "react-router-dom";
import { restaurantList } from "../config";
import RestrorentCard from "./RestrorentCard";
import ShimmerUi from "./ShimmerUi";
import { filterData } from "../utiles/helper";
import useOnline from "../utiles/useOnline";
import UserContext from "../utiles/UserContext";



// what is state
// what is  React hooks?-functions,
// what is useState
// react has one way binding


// is function ko hmne alag se helper me  bnya h vha se use kr rhe h.
// function filterData(searchInput,allRestaurants){
// return allRestaurants.filter((res)=>res?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase()));
// }

// 2nd way 
// function filterData(searchInput,allRestaurants){
//     const filterData= allRestaurants.filter((res)=>res?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
//     );
// return filterData;
//     }
    



const Body=({user})=>{

// usercontext
const {user2,setUser2}=useContext(UserContext);

    // how  do you about redring component
    const[allRestaurants,setAllRestaurants]=useState([]);
    const [filterdRestaurants,setFilterdRestaurants]=useState([]);
    // const searchTxt="KFC";
    // search text is a local state variable.
    // searchtext ko direct use nhi kr skte isliye use stae set vla function deta h.
    // one way data binding
    const [searchInput,setSearchInput]=useState("");  // to create state variable, returns=[variable, function to update the variable.]
    // const searchClicked=false;
    // const [searchClicked,setSearchClicked]=useState("false");


// console.log(restaurants);
// search krne ke bad ak hi array rh jegi jo filter hui h.
// agar dusri shopka nam search krenge to nhi milega.


// use effect
useEffect(()=>{
// api call
getRestorents()


// console.log('useeffect');
 // agar bar bar render nhi krna h to dpendency array use krni hogi.
// },[searchInput]);
 },[]);
// },[restaurants]);
// useefftct render ke bad call hoga
// empty dedpency array once after render.
// dep array[searcText]=> once after initial render+eveerytime after rerender when searchtext changes.
// use effect ak br hi call hoga phli bar me.


async function getRestorents(){
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    console.log(json);
    // optional chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilterdRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    // agar hm initial me restaurantList use krenge to. PHLE PURANA DATA SHOW HOGA ak sec ke liye kyoki render hoga vo phle phir swiggy ki api ka data show hoha kykoki purane data ko initilise kiya h.
}

console.log('RENDER');

// created hook
// internet connection
// const offLine=false;
const isOnline=useOnline();
if(!isOnline){
    return <h1>🛑Offline,please check your internet connection</h1>
}






// conditional rendering
// if restorent is empty=>shimmer ui
// if restrorent has data => actual data ui


// error na aye sre restro na ho isliy use kiya h
// not render component(Early return)
if (!allRestaurants) return null;

// if(filterdRestaurants?.length===0) return <h1>No Restorent Match Your Filter.</h1>

// const searchBtnCss={
//     backgroundColor:"red"
// }

    return(allRestaurants?.length===0)?<ShimmerUi/>:(
<>
{/* search */}
<div className="search-container p-5 bg-pink-50 m-2">
    <input data-testid="search-input" type="text" className="search-input  focus:bg-green-200 p-2 m-2" placeholder="search" value={searchInput} onChange={(e)=>{
        // e.target.value-whatever you write in input.
        setSearchInput(e.target.value)
    }} />



    {/* searchIinput ko yha direct use kr skte h yha value change hogi. */}
    {/* <button className="search-btn">Search-{searchInput}</button> */}
    <button data-testid="search-btn" className="p-1 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md " onClick={()=>{
// if(searchClicked==="true"){
//     setSearchClicked("false");
// }
// else{
//     setSearchClicked("true");
// }
// need to filter the data
const data=filterData(searchInput,allRestaurants);
// update the state-restorents
setFilterdRestaurants(data);


    }}>Search</button>
    {/* it is two way bind i am updting data data change ho rha h. */}
    {/* <h1>{searchClicked}</h1> */}
    {/* <h1>{searchInput}</h1> */}

{/* for useContext */}
<input value={user2.name} onChange={
    e=>setUser2({
        ...user2,
        name:e.target.value,
      

})
} />

{/* for email usecontext */}
<input value={user2.email} onChange={
    e=>setUser2({
        ...user2,
        email:e.target.value,
      

})
} />


</div>


        <div className="restorent-list flex flex-wrap" data-testid="res-list">
            {
                // key isliye di jti h tki jisko change krna h ui ko change kre hr kisi ko nhi , jis reconsilation khte h jo def algoritj me  ata h.
                // index bhi ak key ho skti h jo map e milti h but ise use nhi krenge.
                // no key<indexkey<unique key

                // you have to write login norestro found here.
                filterdRestaurants.map((restaurant)=>{
                    return (<Link to={"/restorent/"+restaurant.data.id}><RestrorentCard {...restaurant.data} user={user} key={restaurant.data.id}/></Link>)
                })
            }
    {/* is bko alg alg likhne ki bajay ak jagh likha gya h uper map functiin se. */}
           {/* <RestrorentCard {...restaurantList[0].data}/>
           <RestrorentCard {...restaurantList[1].data}/>
           <RestrorentCard {...restaurantList[2].data}/>
           <RestrorentCard {...restaurantList[3].data}/>
           <RestrorentCard {...restaurantList[4].data}/>
           <RestrorentCard {...restaurantList[5].data}/> */}

           {/* ye use krenge to destructure vla method use  krenge. */}
           {/* <RestrorentCard restaurant={restaurantList[3]}/>
           <RestrorentCard restaurant={restaurantList[4]}/>
           <RestrorentCard restaurant={restaurantList[5]}/> */}
           

        </div>
        </>
    );
};

export default Body;



// use sttae array destructimg hota h.
// const searchVar=useState()
// cosnt[searchText,setSearchText]=searchVar


// https://bitbucket.org/namastedev/namaste-react-live/commits/

// https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event