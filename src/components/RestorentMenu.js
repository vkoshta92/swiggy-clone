import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import{ IMG_CDN_URL } from "../config";
import useRestorent from "../utiles/useRestorent";
import ShimmerUi from "./ShimmerUi";
import useRestorentName from "../utiles/useRestorent";
import { addItem } from "../utiles/cartSlice";
import { useDispatch } from "react-redux";



const RestorentMenu=()=>{
    // const params=useParams();
    // const {id}=params;
    // console.log(params);
    // any  looks destructuring like this.
    // how to read the dynamic urls
    // useparams nested roting me use hota hai.
    const {resId}=useParams();

    // make use state
    // initial render pe null rhega kyoki empty object hega to error ayeaa.kyoki if condition lgai h ki restorent me shimmer aa jega starting me. uske bd id vla khuega.
    // const [restorentName,setRestorentName]=useState(null);

    // hooks of restomenu detail
    const restorentName=useRestorentName(resId)




    // isko hmne new hooks bna ke use kr liya h 
// useEffect(()=>{
// getRestorentInfo();
// },[])

// async function getRestorentInfo(){
//     const data=await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=28.5355161&lng=77.3910265&menuId="+resId)
//     const json =await data.json();
// console.log(json);
// setRestorentName(json.data);
// }


// for early return shimmer aa jega.jse api cll hogi jb tk data na aye id se shimmar aa jega.
// if(!restorentName){
//     return <ShimmerUi/>
// }

// dispatch come from
const dispatch=useDispatch();


// const handleAddItem=()=>{
//     // disptach and action
//     dispatch(addItem("Grapes"));  //{payload:"Graprs"}
// }


const addFoodItem=(item)=>{
    dispatch(addItem(item));
};



// is trh lihe ya if lga ke likhe.
    return (!restorentName)?<ShimmerUi/>:(
<div className="flex">
<div>
<h1>Restorent id: {resId}</h1>
<h2>{restorentName.name}</h2>
<img src={IMG_CDN_URL + restorentName.cloudinaryImageId } />
<h3>{restorentName.area}</h3>
<h3>{restorentName.city}</h3>
<h3>{restorentName.avgRating}</h3>
<h3>{restorentName.costForTwoMsg}</h3>

</div>


{/* <div>
<button className="p-2 m-5 bg-green-100" onClick={()=>handleAddItem()}>Add Item</button>
</div> */}
<div className="p-5">

{/* json se data jo aa rha h  usme value me obj h to hme map krna h to array me change krna hoga.  */}
{/* {console.log(Object.values(restorentName.menu.items))} */}
<h1>Menu</h1>
{/* till the time restro nhi hoga isliye option chaning use kremge tki erroe naaye */}
<ul>{Object.values(restorentName?.menu?.items).map((item)=><li key={item.id}>{item.name}-<button className="p-1 bg-green-50"
onClick={()=>addFoodItem(item)}>Add</button></li>)}</ul>





</div>




</div>

    )
}
export default RestorentMenu;