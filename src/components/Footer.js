// footer
import UserContext from "../utiles/UserContext";
import { useContext } from "react";


const Footer=()=>{
    const{user2}=useContext(UserContext)
    return (
        <h4 className="p-10 m-10 font-bold">
            This site is doveloped by {user2.name}-{user2.email}
        </h4>
    )
};

export default Footer;