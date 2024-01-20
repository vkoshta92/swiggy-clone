// https://www.freecodecamp.org/news/how-to-up-a-react-app-with-parcel/

// https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino/related?hl=en
// https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en

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

import { useState } from "react";


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







// this is react fragment.
// in jsx only one parent element if multiple then we can warp in div.
// jsx have  one have a one parent
//  React.Fragement  used to use multiple 
// it comes from  react.
//   it us like aemopty tag
// const jsx={
//     <>
//     <h1>jsx</h1>
//     <h1>js1</h1>
    
//     </>
// }

// react.fragment
// jsx - one parent

// const styleObj={
//     backgroundColor: "red",
// }
// const jsx=(

//     // inline styling
//     <div style={styleObj}>
//     <h1>jsx</h1>
//     <h1>second jsx</h1>
//     </div>
// )

// const jsx=(

    //     // inline styling
    //     <>
    //     <h1>jsx</h1>
    //     <h1>second jsx</h1>
    //     </>
    // )
    
    
    //import *  as Obj from "./components/Header"
    // Obj.Title


    // React Fiber
    // config driven ui
    // microservices-
    // we are building onlu ui microservices.
    // monolyth
    //microservices written in golang
    // useefect-

// props and state dono change hone pr rerender hota hai.
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&page_type=DESKTOP_WEB_LISTING

// https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en

// shimmer ui effect- it is like scalon ui , when website loading

// it is using in normal js.
// loads=> api(300ms)=>render page(500ms)
// we use this i react thats why its fast
// loads=> render(100ms)=>api(300ms)=> update ui

// use  effect is called after the component is rendered.
// isme hm callback function and dependency array use kar sktea hai.
// after  rendring call back functio run krta hai .
// only once after rendring .
// if dont have dependcy array , it means are not dependent on every this , , every time component render useeffct called.

// use state ko kbhi bhi if else me nhi use krna hai.
// never use in for loop.
// if(){
//     const[restaurant,setrestorent]=useState("")
// }
// never use usesttae outside of functional component.
// we can use mulyople use effect
// swiggy use cdn to load images.
// images are optimed in cdn.
// shimer me nmpm shimmer package use nhi krna hai.


// https://formik.org/
// use forms use this library


// routing.............
// https://reactrouter.com/en/main
// npm i react-router-dom

// spa- single page applications
// two types of routing -client type and server type routing
// server side- all the pages comes from server.
//client side - without making any network call page refresh.
// all the children go into outlet

// dynamic routing

// useParam- dynamic id reading by thisfor dynamic id .
// useRouteError- for error

// code should be- moduler, reusuaable, maintable, cleaner, testable.


// interview
// first render phase- 
// commit phase- where actulayy react modify the dom.
// render  phse- constructer is called , render function is called 
// in commit phase- react actually update dom , then everythis happen behind the schene,  compomnet did mount.
// render phase is fast, commit phase dom update krta h time lgta ha



//  first child phle didmout hogi kyoki agar api call kr di chid 1 to vo patch kr degi first and second child ko.

// parent constrcurer
// parent render
// first child custructer
// first child render
// second child constructer
// second  child render

// dom updated for child
// first child didmount

// second child didmount
// parent  didmont mount

// useeffect me jo call back n function use kre hai vha par   async nahi use  kasr skte ha par , but in class component we cam us async function in component did  mount.



// on api  call

// parent constructer
// parent render
// child constructer
// child render
// kyoki child function  me async finction lga ke api clal kr rhe h to data load hone me time lagega pr tb tk parent did mount call hoga. bad me chid vala. usualy child phle mount hota h.
// parent component did mount
// dom is update
// api call
// json in logged in console
// child  componemt did mount
// child phir se render hega render mount ke bad.kyoki state function h.


// ....
// only child ke case me jab paent na ho

// child constructer
// child render
// child  componemt did mount
// api
// setstate- updating start call render again
// component did update.


// mount call- first render
// update is- every render

// ......
// in only  child case no parent
// child construvter
// child render
// child compomnet did mount
// aapi call
// set state
// update cycle
// render
// then compinnet did update.
// jb dusre page me jte h to unmount call hota h.
// as soon componnet unmounted  it will call.

// liecycle methd is - componet did update.- it will call after every update.

// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ogimage.png
// https://pbs.twimg.com/media/DZ-97vzW4AAbcZj.jpg:large

// koi state nhi hoga tp did update nhi hoga ak bar bhi.
// didunmount- for cleanup.

// ...............
// utiles ke andr function bnenge jo body ya khi use kiye hai.
// custom hooks- reusabllity , redablity, sepration of concern., testables.
// easy to debug.

// parcel create one js file.
// in production this js file size is small.

// chunking
// code splitting
// dynamic bundling
// lazy loading
// on demand loading
// dynamic import

// in system design interview
// makemytrip
// sare component ak st load nhi krne jispe click kre vo compinnet khule.
// i will make sure , bundle does on use random code
// all are diffrent bundle , train , flight.

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
// jiski chunking bna denge uski js file network me alag bn jegi aur isi trh bade apps fst hote halag alg file bn jti h aur expode nhi ho  pti site , smooth chlti hai.


// 12. jo dikhta h vo bikta hai.
// base ui
// obtimize css
// it saves time
// scss/saas is better then normal css.
// it is amodern way of scss.
// scss compiled to css.and converted to  your css.
// inline  - it is not good way
// reusiblity
// difficult to maintain
// https://mui.com/
// it is fully loded library
//https://baseweb.design/
//https://ant.design/
// multiple framework we can use.but its not a good practice.
// https://chakra-ui.com/getting-started

// cons of using css libraries
// bundle size heavy
// we loose a lot of control over how my design looks.
// libraty ristruct to someway.

/* other way */
/* https://styled-components.com/ */

// we can use css inside props
// const Button = styled.a`
//   /* This renders the buttons above... Edit me! */
//   display: inline-block;
//   border-radius: 3px;
//   padding: 0.5rem 0;
//   margin: 0.5rem 1rem;
//   width: 11rem;
//   background: transparent;
//   color: white;
//   border: 2px solid white;

//   /* The GitHub button is a primary button
//    * edit this to target it specifically! */
//   ${props => props.primary && css`
//     background: white;
//     color: black;
//   `}
// `

/* normal native css */
/* scss */
/* inline css */
/* component libraries -baseui material ui*/
/* tailwind css framwork */

/* https://github.com/orgs/Learn-React-With-Harshi/repositories?type=all */

/* other way */
/* https://styled-components.com/ */



// best way -
//https://tailwindcss.com/docs/installation

/* talwind- css on the go (in the same file) */
/* reusablity */
/* less bundle size */
/* very flexible ui(customble) , we can do lot of custmization*/
// it remove my basix css , it say right it in my way , i will overright everything
// every thinh i write in a new classname.
// post css- tranforming csss in avascript.


// mkdir my-project
// cd my-project
// npm init -y
// npm install -D parcel
// mkdir src
// touch src/index.html

// npm install -D tailwindcss postcss
// npx tailwindcss init

// postcssrc tell to parcel  to compile of tailwind css to normal css

     // ase [] custmosed chij elikh skte h talwind me.
        // its makes bundel of css very small. only those class we have used in .

// pros and cons of talwind
// pros- easy to deug
    // no duplicate css
    // easy to use
    // code less
    // budle size small
    // time is faster

// cons-there is a high learning curve
// it takes initial learning curve
// every new dovepler learn to take some time.
// its look ugly.
// compromises redablity.
// big code in documentry.
// https://tailwindui.com/components/preview
// 


// in system design round- we use talvind , we have to justify pros and cons.
// it takes initial learning curve

// diffrence between state and props-sttae is tye local variable , 

// it is called props drilling- one parnet to child and child and other child , this is prop drilling
// AppLayout
// state=user
// <Bosy user={user}/>
// <Resricontainer user=>
// RestrorentCard user={user}
// <h4> {user}<h4></h4>

// state variable agar parent me hoga to usko niche sri jgh pe props droling ki teh se usr kr skte hai.

// data under 10 level child then prop drilling is nit the good way.
//but custom hook bna ke child se parent me transfer kr skte hai.

// https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

// lifting the state up- sibling ki state ko change krna.

// mobex-ngrs-redux

// usecontext - iski madad se hme prop driling ki need nhi h hm khi se bhi kisi ko bhi update change kr skte hai.
// 


// ...............redux.......................
// advantages-to mangae are data layers of app
// redux handel data-
// usecontext- to avoid prop drilling

// it is use for data management
// complex to setup- huge complex
// app is small dont need redux.
// only use in lots aps and lots of data handling
// redux store-it like a big all object
// in redux single store to handle everything
// we create logical sepration/slices in store
// each store has diffrent slices.
// direct plus use krke cart me add nhi kr skte hai , uske liye dispatch and action ka use krte hai .
// action ak function ko call krta hai , function modify  krta hai cart ko.
// we can not modify the cart, we dispatch and action trhey call the function the we modify tha cart.
// ye function reducer  khlata hai.
//it call reducer function and it update the slice of store.
// selecter - read the cart, if i want to read cart . i have to call selecter , it wil give me to information to update the cart.
// selecter is a hook at the end ofthe day , and it sis normal function.
// selecterv subsribe kra h store ko means read krta hai and update krta hai.
// npm i @reduxjs/toolkit         - core library of redux
// npm i react-redux     - bridge beeween redux and react

// component me jo hoga vo react -redux se import hoga
// 

// ...............testing.......... test cases
// phle enzyme older way hai testing ka

// we use react testing library
// test driven dovelopment- we write test case besfre writig code. // company does not folow , but it is very good.but iski vjgh se dovelimpent process time increse ho jta hai.

//diffrent type of testing
// 1.manual testing- it requre human, not effecence
// 2.automation testing
//      Selenium testing 

// END 2 End testing /E2E testing- we will test the whole flow. etc saipress
// it is cover entire user journy., 
//headless browser- without ui browse like virtual, we can test cases faster, there wil be virtiual dom.

// unit Testing- core job of dovelopers, small cmponent feature testing.
//Integration Testing-integration of diffret component , jse kuch search krte h actual data change  integrate ho jata hai.
//others testing(unimportent)- regration testing , smoke testing  performence testing, load testing , blackbox testing

// testing is just like dovelopment.

// https://testing-library.com/docs/react-testing-library/intro/   
// testing libraey enzyme ki replacement hai
// https://jestjs.io/docs/tutorial-react
// https://www.browserstack.com/guide/selenium-react-tutorial

// npm install --save-dev @testing-library/react
// npm i -D jest

// install react testing library
// intall jest (it is javascript testing framework)
// configure jest  - npx jest --init    // npx because just want to use once, ak bar hi hme config file bannai hai
        // jsdom
        // coverage report yes
       // bable
// npm run test

// npm i -D jest-environment-jsdom             //because of error in test case.
// npm run test

// create my first test
// craete a foler __test__      , iske andr jo bnaenge jest use testinh fle me traet krega, ise dunder bhi bol skte hai.
// har test case expect use krta h , essursion

// configure babel , bale jest package
// npm install --save-dev babel-jest @babel/core @babel/preset-env
// npm i -D @babel/preset-react  // this is require for jsx
// https://jestjs.io/docs/28.x/getting-started#using-babel


// wrote expect sum tes
// gitignore coverage report

// alltest running in the diffrent enviroment.



// unit testing - small component test

// for image test , makesure image is in png
// on jest config
  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
//   moduleNameMapper: {
//     "\\(.jpg|png|svg)$":"./src/mocks/dummyLogo.js",
    
//   },

// e bhi kr skte hai phir jpg png kuch bhi kro koi problem nhi ayegi.

//   moduleNameMapper: {
//     "\\.png":"../mocks/dummyLogo.js",
//     // "\\.(.jpg|png|svg)$":"../mocks/dummyLogo.js",
//     "\\.jpg":"../mocks/dummyLogo.js",
    
//   },

// test me jb result ata h to virtial dom object ata hai.


// integration testing
// fetch readabse stream deta h phir vo use json me convert krta hai.

// npm run watch-test  (for fast testing) isse rukta nhi bar nar npn run test nnhi krna pdega
// npm i -D @testing-library/jest-dom









