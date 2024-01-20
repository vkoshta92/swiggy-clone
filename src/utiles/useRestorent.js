import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestorentName=(resId)=>{
const [restorentName,setRestorentName]=useState(null);

// get data from api
useEffect(()=>{
    getRestorentInfo();
    },[])
    
    async function getRestorentInfo(){
        const data=await fetch(FETCH_MENU_URL+resId)
        const json =await data.json();
    console.log(json);
    setRestorentName(json.data);
    }
    

    //ye return me khud ka reconsolation krega.
// return restorent data
return restorentName;

}

export default useRestorentName;