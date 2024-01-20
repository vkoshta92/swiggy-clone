// // ## Namaste React Course by Akshay Saini
// // # Chapter 03 - Laying the Foundation
// /**
//          Header
//             logo
//             nav items(right)
//             -cart
//          Body
//          Search Bar
//          Restrorent List
//          Restrorent Card
//             -Image
//             -Name
//             -Rating
//             -Cusines


//         footer
//             -links
//             -copyright


//         */

// /*
//  * This are the feature of Parcel
//  * Created A Server
//  * HMR - Hot Module Replacement
//  * File Watcher algorithm - C++
//  * BUNDLING
//  * MINIFY
//  * Cleaning our Code
//  * Dev abd Production Build
//  * Super Fast build algorithm
//  * Image Optimization
//  * Caching while development
//  * Compression
//  * Compatible with older version of browser
//  * HTTPS on dev
//  * port Number
//  * Consistent Hashing Algorithm
//  * Zero Config
//  * Tree shaking
//  *
//  *
//  * Transitive Dependencies
//  */

// // imported react and reactdom from nodemodule folder
// // import {React, createElement as ce} from 'react';
// import React from "react";
// import ReactDOM from "react-dom/client";

// // Create Header element like navbar using createElement
// /*
//  * 
// <div class="header">
// <h1>Title</h1>
// <ul>
// <li>Home</li>
// <li>About Us</li>
// </ul>
//  * 
//  * 
//  */
// // const heading = ce(
// //   "div",
// //   {
// //     className: "header",
// //     key: "header",
// //   },
// //   [ce(
// //     "h1",
// //     {
// //       key: "Title",
// //     },
// //   "Title"), ce(
// //     "ul",
// //     {
// //       key: "ul",
// //     },
// //   [ce(
// //     "li",
// //     {
// //       key: "Home",
// //     },
// //   "Home"),ce(
// //     "li",
// //     {
// //       key: "About Us",
// //     },
// //   "About Us")])]
// // )

// // create header element using JSX
// // JSX => React.createElement => Object => HTML (DOM) (babel does all the conversion)
// // jsx is html like sentex in js not html.
// // is code console nhi smagh pta h bable smgh pata hai.
// // react elememt , it render like just root.render(heading)
// // const heading = (
// //   <h1 id="h1" key="h1" tabIndex="">
// //    Namaste React
// //   </h1>
 
// // );

// const Title =()=>(
//     <h1 id="h1" key="h1" tabIndex="">
//      Food Villa React
//     </h1>
   
//   );


// // component  composition
// // composing component - nested component
// // React Component-
// // functional- New way
// // class Bases Complonent- old way

// // name of component start with capital letter.its not mandatory.

// var abc=10
// // jsx me data secure rhta h hacker attack nhi kr pyenge.
// // jsx , esc , typescript is not mandatrory.
// // safe rhega hamara api ka data
// // const data=api.getData()
// const HeaderComponent=()=>{
//     return( <div>
//         {/* {heading} */}
//         {/* in teno trh se likh skte h functonal component ko. */}
//         {/* <Title/> */}
//        {Title()}
//        {/* <Title></Title> */}
       
//        {abc}
//        {/* {data} */}
//        {console.log('Any Js Code')};
//         <h2>Namaste React Fnctional Component</h2>
//         <h2>My Name is Vishnu</h2>
//     </div>
//     )
// }


// // both are same
// // const HeaderComponent2=()=>(
// //      <div>
// //         <h1>Namaste React Fnctional Component</h1>
// //         <h2>My Name is Vishnu</h2>
// //     </div>
// //     )


// // app start here
// const AppLayout=()=>{
//     return(

        
 
//     )
// }














// // create root using createRoot
// const root = ReactDOM.createRoot(document.getElementById("root"));
// // passing react element inside root
// // root.render(heading);
// root.render(<HeaderComponent/>);
// // root.render(HeaderComponent());


// ............here start



import React, { lazy,Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
// default import
// hm nee apna khud ka  koi nm bhi likh skte h title ki jgh prpr use title ki jgh jha call krya h change krna hoga.but good practice me yhi use krenge.
import Header from "./components/Header";
// is trh bhu likh slte h but niche hme <ABC.Header/> krna hoga.
// import * as ABC from "./components/Header";
// named import
// import {Title }from "./components/Title";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
// import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";
import RestorentMenu from "./components/RestorentMenu";
import Profile from "./components/Profile";
import ShimmerUi from "./components/ShimmerUi";
// import Instamart from "./components/Instamart";

const Instamart=lazy(()=>import("./components/Instamart"));
const About=lazy(()=>import("./components/About"));
import UserContext from "./utiles/UserContext";
import { useContext } from "react";
import {Provider} from "react-redux";
import store from "./utiles/store";
import Cart from "./components/Cart";

// chunking
// code splitting
// dynamic bundling
// lazy loading
// on demand loading
// dynamic import

// lazy comes from react library
// dynamic import
// instramast pe click krte hi network me new js file bn jegi
// when upon on demand loding , react trying to suspend it.
// phli bar me error eyega uske bad jb page change krene instrmaret pe click krenge to khul jega. kyoki ye single page application hai.gar supence use krenge to asa nhi hoga.
// suspence se react smgh jega ki ye jo promise h ye lazyloded hai.
// react is promise ka wait krega resolve hone ka untill componnet loads.
//it is still on SPA.
// app  bundle size is huge then use chunking.
// upon on demand loading-> upon render-> suspend loading
// jiski chunking bna denge uski js file network me alag bn jegi aur isi trh bade apps fast hote h alag alg file bn jti h aur expode nhi ho  pti site , smooth chlti hai.

// lazy ko applayout me nhi bnenge alag bnenge.kyoki ye every render cycle pe lazyload hoga.






const AppLayout=()=>{

// usercontext me dummy data rkhne ki  jghh hm usecontext provider me value me pss kr denge to vo user2 change hoga to uske hisab se change hoga sb.
// i can pss diffrent data from the difffrent portion of the apps.
const [user2,setUser2]=useState({
    name:"vishnukant",
    email:"vkoshta92@gmail.com",
});


    return(
        // react fragemt or <> </> ke  andar h use dobara se use kar skte hai.
        
        // never create new component in component.
        // const Food=()=>{

        // }

// hm logo ko context apne app me hr jgh use krna hai to isme sbko wrap kr dengr khi bhi use krbskte hai.isse bhar kuch khenge jse header to usme value nhi print hogi dummy data ayaega jo usercontext me hai.

// provider store ke liye hai
<Provider store={store}>
<UserContext.Provider value={{
    // usercontext me jo value h vo default value hai aur jo ye value h uverrighting kr rhi hai.
      user2:user2,
      setUser2:setUser2,
}}>
<Header/> 
{/* <About/>
<Body/>
<Contact/> */}
{/* outlet for children configration */}
{/* outlet headr and footer ke bich me ayega agar hm body bad me use krenge to about page  ya contact opage body ke phlr aa jega. */}
<Outlet/>
<Footer/>
</UserContext.Provider>
</Provider>
 )
    
}

// routing - always below applayout
// it takes path of array , each path take object.
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            // all the children go into outlet
            // agar / h to outlet ki jgh pr bodyaa jegi 
            // agar /about h to outlet ki jgh about aa jega
            // agar /Contact h to outlet ki jgh pr contact aa jega.
            {
                path:"/",
                element:<Body user={{
                    name: "namaste vishnu",
                    email:"vishnu@hmail.com",
                }}/>,
            },
            {
                path:"/about",
                element:<Suspense fallback={<h1>loading...</h1>}><About/></Suspense>,
                children:[
                    {
                    path:"profile",  // agar / lgenge to localhost:1234/profile  khul jega. parentpath/path
                    element:<Profile/>,
                },
            ],
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restorent/:resId",
                element:<RestorentMenu/>
            },
            {
                path:"/instamart",
                element:(
                    <Suspense fallback={<ShimmerUi/>}>
                    <Instamart/>
                    </Suspense>
                    ),
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            
        
        ],
    },
    // {
    //     path:"/about",
    //     element:<About/>,
    // },
    


]);






const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header/>);
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>);
// root.render(jsx);

















// import React, { lazy,Suspense, useState} from "react";
// import ReactDOM from "react-dom/client";
// // default import
// // hm nee apna khud ka  koi nm bhi likh skte h title ki jgh prpr use title ki jgh jha call krya h change krna hoga.but good practice me yhi use krenge.
// import Header from "./components/Header";
// // is trh bhu likh slte h but niche hme <ABC.Header/> krna hoga.
// // import * as ABC from "./components/Header";
// // named import
// // import {Title }from "./components/Title";
// import Body from "./components/Body";
// import Footer from "./components/Footer";
// import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
// // import About from "./components/About";
// import ErrorPage from "./components/ErrorPage";
// import Contact from "./components/Contact";
// import RestorentMenu from "./components/RestorentMenu";
// import Profile from "./components/Profile";
// import ShimmerUi from "./components/ShimmerUi";
// // import Instamart from "./components/Instamart";

// const Instamart=lazy(()=>import("./components/Instamart"));
// const About=lazy(()=>import("./components/About"));

// // chunking
// // code splitting
// // dynamic bundling
// // lazy loading
// // on demand loading
// // dynamic import

// // lazy comes from react library
// // dynamic import
// // instramast pe click krte hi network me new js file bn jegi
// // when upon on demand loding , react trying to suspend it.
// // phli bar me error eyega uske bad jb page change krene instrmaret pe click krenge to khul jega. kyoki ye single page application hai.gar supence use krenge to asa nhi hoga.
// // suspence se react smgh jega ki ye jo promise h ye lazyloded hai.
// // react is promise ka wait krega resolve hone ka untill componnet loads.
// //it is still on SPA.
// // app  bundle size is huge then use chunking.
// // upon on demand loading-> upon render-> suspend loading
// // jiski chunking bna denge uski js file network me alag bn jegi aur isi trh bade apps fast hote h alag alg file bn jti h aur expode nhi ho  pti site , smooth chlti hai.

// // lazy ko applayout me nhi bnenge alag bnenge.kyoki ye every render cycle pe lazyload hoga.






// const AppLayout=()=>{


// const [user,setUser]=useState();

//     return(
//         // react fragemt or <> </> ke  andar h use dobara se use kar skte hai.
        
//         // never create new component in component.
//         // const Food=()=>{

//         // }


// <React.Fragment>
// <Header/> 
// {/* <About/>
// <Body/>
// <Contact/> */}
// {/* outlet for children configration */}
// {/* outlet headr and footer ke bich me ayega agar hm body bad me use krenge to about page  ya contact opage body ke phlr aa jega. */}
// <Outlet/>
// <Footer/>
// </React.Fragment>
//  )
    
// }

// // routing - always below applayout
// // it takes path of array , each path take object.
// const appRouter=createBrowserRouter([
//     {
//         path:"/",
//         element:<AppLayout/>,
//         errorElement:<ErrorPage/>,
//         children:[
//             // all the children go into outlet
//             // agar / h to outlet ki jgh pr bodyaa jegi 
//             // agar /about h to outlet ki jgh about aa jega
//             // agar /Contact h to outlet ki jgh pr contact aa jega.
//             {
//                 path:"/",
//                 element:<Body user={{
//                     name: "namaste vishnu",
//                     email:"vishnu@hmail.com",
//                 }}/>,
//             },
//             {
//                 path:"/about",
//                 element:<Suspense fallback={<h1>loading...</h1>}><About/></Suspense>,
//                 children:[
//                     {
//                     path:"profile",  // agar / lgenge to localhost:1234/profile  khul jega. parentpath/path
//                     element:<Profile/>,
//                 },
//             ],
//             },
//             {
//                 path:"/contact",
//                 element:<Contact/>,
//             },
//             {
//                 path:"/restorent/:resId",
//                 element:<RestorentMenu/>
//             },
//             {
//                 path:"/instamart",
//                 element:(
//                     <Suspense fallback={<ShimmerUi/>}>
//                     <Instamart/>
//                     </Suspense>
//                     ),
//             },
            
            
        
//         ],
//     },
//     // {
//     //     path:"/about",
//     //     element:<About/>,
//     // },
    


// ]);






// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(<Header/>);
// // root.render(<AppLayout/>);
// root.render(<RouterProvider router={appRouter}/>);
// // root.render(jsx);
