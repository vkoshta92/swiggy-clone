
// // npm i -D @testing-library/jest-dom
// // toBeTeDocument isi library se aa rha hai.

import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store.js";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";



global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Shimmer should load on Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmer");

  expect(shimmer.children.length).toBe(8);

  console.log(shimmer);
});




test("Restaurants should load on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(function (){

    const resList = body.getByTestId("res-list");
    expect(resList.children.length).toBe(15);
  });

  

});




test("Search for string(food) on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const input = body.getByTestId("search-input");

  fireEvent.change(input, {
    target: {
      value: "food",
    },
  });

  const searchBtn = body.getByTestId("search-btn");

  fireEvent.click(searchBtn);


  const resList = body.getByTestId("res-list");

  expect(resList.children.length).toBe(4);
});










// import Body from "../Body";
// import { render, waitFor,fireEvent} from "@testing-library/react";
// import { Provider } from "react-redux";
// import store from "../../utiles/store";
// import { StaticRouter } from "react-router-dom/server";
// import { RESTORENT_DATA } from "../../mocks/data";

// // npm i -D @testing-library/jest-dom
// // toBeTeDocument isi library se aa rha hai.
// import "@testing-library/jest-dom";

// // fetch promise return krta hai.
// // we have creat own dummy fetch.
// // ase jest fetch ko nhi smgtab h dumy fetch mock me krna hoga.
// global.fetch=jest.fn(()=>{
// return Promise.resolve({
//     json: ()=>{
//         Promise.resolve(RESTORENT_DATA)
//     },
// });
// });

// // ..................for shimmer
// // jest api fetch ko nhi smghta hai.kyoki jest broser nhi virtula brower ki tr krta h.
// test("Shimmer should load on Hompage",()=>{
//  const body=render(<StaticRouter><Provider store={store}><Body/></Provider></StaticRouter>);




// // console.log(body);
// // we should test shimmer 

// // const searchBtn=body.getByTestId("search-btn");
// const shimmer=body.getByTestId("shimmer");

// // expect(shimmer).toBeInTheDocument();
// // expect(shimmer.innerHTML).toBeInTheDocument();
// // this is good way kyoki shmmer ke anadr shimmer card bhi h vo ak arraya me hai to usko test krnr kr liye hm children  and array ka leth functuon use kremge children shimmer  card ke  liye hai.
// expect(shimmer.children.length).toBe(10);
// console.log(shimmer);

// });


// // ..........................................search btn


// // jest api fetch ko nhi smghta hai.kyoki jest broser nhi virtula brower ki tr krta h.
// test("Restorent should load on Hompage", async ()=>{
//     const body=render(<StaticRouter><Provider store={store}><Body/></Provider></StaticRouter>);
   
   
//    // shimmer load hone  tk wait krna pdega uske liye
   
//    await waitFor(()=>{
//     // expect(body.getByTestId("res-list"))
//    const resList=body.getByTestId("res-list");
   
 
//    expect(resList.children.length).toBe(15);
// //    console.log(resList);
   
//    });

// });

// //   .............. search for food string on hoomepage

// test("Search for string(food) on Homepage", async ()=>{
//     const body=render(<StaticRouter><Provider store={store}><Body/></Provider></StaticRouter>)
   
   
//    // shimmer load hone  tk wait krna pdega uske liye
   
//    await waitFor(()=>expect(body.getByTestId("search-btn")));
   
   

//    const input=body.getByTestId("search-input");

// //    fireevent onchange ke liye input  jb use krte h tab use hota hai.
// // synthatic event
//    fireEvent.change(input,{target:{
//     value:"food",
//    },
// });

// const searchBtn=body.getByTestId("search-btn");
//    fireEvent.click(searchBtn);
 

//    const resList=body.getByTestId("res-list");
   
 
//    expect(resList.children.length).toBe(4);
// //    console.log(resList);
   
//    });


