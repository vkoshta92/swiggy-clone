import {createSlice} from "@reduxjs/toolkit";
const cartSlice=createSlice({

    name:'cart',
    initialState:{
        // items:["Banana","Apples"]
        items:[]
    },
    reducers:{
        // reducer function
        // sttate - inial sttae hai 
        // action vo h jha se dat aa rha hai
        // ye function kuch retur nhi krta hai
        // addItem - action hai aur uske bad reducer function hai
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },

        removeItem:(state,action)=>{
            state.items.pop();
        },

        // clear kr rge h payload ki need nhi hogi kyoki hm log kuch bhej nhi rhe hai.
        clearCart:(state)=>{
            state.items=[];
        },
    },
});

// my component need to acces this  slce to hme is export krnna hoga.


// export const {addItems,removeItem,clearCart}=cartSlice.actions;
// export default cartSlice.reducer;

// cartslice ={
//     actions={
//         addItem,
//         removeItemclearCart
//     },
//     reducer:reducers
// }

// action export name se hote hai
export const {addItem,removeItem,clearCart}=cartSlice.actions;

// reducer export default se hote hai.
export default cartSlice.reducer;