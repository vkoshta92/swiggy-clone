import { configureStore } from "@reduxjs/toolkit";
// dare reducer stooreme aa jenge
import cartSlice from "./cartSlice";

const store=configureStore({
reducer:{
    cart:cartSlice,
},
});

export default store;


// recall all thinds
// first create store- 
// configurestore()- RTK
// Provide my store to app
// <Provider store={store}></Provider>        - import from react-redux

// Slice
// createSlice()      react toolkit
// createSlice({
//     name:"",
//     initialState:
//     reducers:{
//         addItem:(sttae,action)=>{
//             state=actin.payload
//         }
//     }
// })
// export const {addItem , removeItem}=cartSlice.actions;

// export default cartSlice.reducer

// // put that slice in store
// {
//     reducer:{
//         cart:cartSlice,
//         use:userSlice
//     }
// }
