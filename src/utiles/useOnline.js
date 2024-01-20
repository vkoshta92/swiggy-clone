import { useEffect, useState } from "react";

const useOnline=()=>{
    
    const [isOnline,setIsOnline]=useState(true);

useEffect(()=>{

const handleOnline=()=>{
    setIsOnline(true)
}

const handleOffline=()=>{
    setIsOnline(false)
}

// online one time run krega.
// window.addEventListener("online",()=>{
// setIsOnline(true);
// });
// window.addEventListener("offline",()=>{
//     setIsOnline(false);
// });
window.addEventListener("online",handleOnline);
window.addEventListener("offline",handleOffline);
   

// remove event listner isliye  kiya h kyoki agar hm about page me jenge to bhi event lister work krega. jb net on hoga tb.
// on onmounting phase jb jase class component me page chnge krne me clear interval krte the vase hi unmounting phase me ise remove krenge.
return ()=>{
    window.removeEventListener("online",handleOnline)
    window.removeEventListener("offline",handleOffline)
}

},[]);

    return isOnline; // returns true or fals  boolian
};
export default useOnline;
















// junior doveloper way

// import { useEffect, useState } from "react";

// const useOnline=()=>{
    
//     const [isOnline,setIsOnline]=useState(true);

// useEffect(()=>{
// // online one time run krega.
// window.addEventListener("online",()=>{
// setIsOnline(true);
// });
// window.addEventListener("offline",()=>{
//     setIsOnline(false);
// });


// },[]);

//     return isOnline; // returns true or fals  boolian
// };
// export default useOnline;