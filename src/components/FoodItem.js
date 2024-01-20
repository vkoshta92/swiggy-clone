import { IMG_CDN_URL } from "../config";
import { useContext } from "react";
import UserContext from "../utiles/UserContext";
// ?  optional chaning h agar data nhi mila to us case me
// props ki jagh pr hm {restorent } is trh destructure bhi kr skte hai, phir niche props nhi likhna hoga.
const FoodItem=({name,description,cloudinaryImageId,price,user,})=>{
    // console.log(props);
    // const {name,cuisines,cloudinaryImageId,lastMileTravelString}=restaurant.data;
    
// 
// const {user2}=useContext(UserContext)


    return (
        // ase [] custmosed chij elikh skte h talwind me.
        // its makes bundel of css very small. only those class we have used in .
        <div className="card w-[200px] p-2 m-2 shadow-lg bg-pink-50">
            <img src={IMG_CDN_URL+cloudinaryImageId} alt="" />
            <h2 className="font-bold text-xl">{name}</h2>
            {/* <h3>{restaurant.data?.cuisines.join(", ")}</h3> */}
            <h3>{description}</h3>
            <h4>rupees:{price}</h4>
            {/* ye user phle app se phir body se phir restrocard ke props se aya hai. */}
            {/* ye props ak chain ki trh work krega phle appa layout se body body se restrorent card. */}
            {/* <h4>{user.name}</h4> */}
            {/* <h5 className="font-bold">{user2.name}</h5>
            <h5 className="font-bold">{user2.email}</h5> */}
            
        </div>
    )
}

export default FoodItem;




// it is called props drilling
// AppLayout
// state=user
// <Bosy user={user}/>
// <Resricontainer user=>
// RestrorentCard user={user}
// <h4> {user}<h4></h4>

