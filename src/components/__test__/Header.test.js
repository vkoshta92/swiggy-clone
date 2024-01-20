import { render } from "@testing-library/react"
import Header from "../Header";
import {Provider} from "react-redux";
import store from "../../utiles/store";


// unit testing
// create browse router yha use nhi kr skte h kyoki ye broser pe nhi hota h.ye without browser work krega.
import {StaticRouter} from "react-router-dom/server"

test ("Logo should load on rendring header",()=>{

    //Load Header
    //provide redux ki error ke liye use kiya staticrouter router ki vgh se use kiya .aur img ke liye dummy img bnai
    const header = render(<StaticRouter><Provider store={store}><Header/></Provider></StaticRouter>);

console.log(header);



   // check if logo is loded
const logo= header.getAllByTestId("logo");
// kyoki image me  ak array ati h isliye hm direct likh rhe the  error aa rha tha [] ki trh treat krna hoga.
// console.log(logo[0]);

expect(logo[0].src).toBe("http://localhost/dummy.jpg");


  
});



// for online status

test ("Online Satus  sholud be green on rendring header",()=>{

const header = render(<StaticRouter><Provider store={store}><Header/></Provider></StaticRouter>);

console.log(header);

// ye getelementsbyclassid ke similer hai.
// const onlineStatus= header.getAllByTestId("online-status");

// get bytestid means only one lega
const onlineStatus= header.getByTestId("online-status");

console.log(onlineStatus);
expect(onlineStatus.innerHTML).toBe("🧶");


  
});


// for cart

test ("cart should have 0 items",()=>{

    const header = render(<StaticRouter><Provider store={store}><Header/></Provider></StaticRouter>);
    
    console.log(header);
    
    // agar ye cart ki jgh kuch error krdenge to test case run krenge to puri html dikhega.
    const cart= header.getByTestId("cart");
    
  
    expect(cart.innerHTML).toBe("Cart-0 items");
    

    });
