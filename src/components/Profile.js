import { useEffect, useState } from "react"
const Profile=(props)=>{

const[count,setCount]=useState(0);
// console.log('render function');
// const[count2,setCount2]= useState(0);

// we can  ot use async in usefect .
useEffect(()=>{
    // in useeffect first we rende tehn update it
    //  for api call it is best place
    // 
    // const timer=setInterval(()=>{
    //     console.log('namste react op');
    // },1000);
    // console.log('use effect');
    return()=>{
        //jo km hm unmount ke liye class me kr rhe the clear set interwal band ho jega.
        // when we unmount function called.,kyoki settimeout krne pr page chnge krne me   settimeout chl rha tha to use bnd krne ke liye clear use kiya hai.
// console.log('use effect return');
// clearInterval(timer);
    }

// console.log('useeffect');
},[count]);
console.log('render');

    return (
<div>
    <h2>Profile Component</h2>
    <h3>Name:{props.name}</h3>
    <h3>Count:{count}</h3>
    <button onClick={()=>{
        setCount(1);
        // setCount2(2);
    }
    }
    >Count</button>
</div>



    )
}
export default Profile
