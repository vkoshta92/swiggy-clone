import { createContext } from "react";
const UserContext=createContext({
    user2:{
        name:"Dumy Name",
        email:"dummy@gmail.com"
    }
})
//  hm log jb jyda context bnenge to nam de denge tki debug krne me problem na ho.
UserContext.displayName="User33Context";
export default UserContext;


// isme kewal data rkhna imoport jo alag alg jagh use krna h , it is like central data place.
// it is like usestate for whole app.
// data store or user store.