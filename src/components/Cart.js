import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utiles/cartSlice';
import FoodItem from './FoodItem';





const Cart = () => {
    // jo subscribe krenge utna hi hoga pura store nhi krna h subscribe
    // osubcribe only smal portion.
    const cartItems=useSelector(store=>store.cart.items)

    // isse bar bar store render ho jega kyoki pure store ko subcribe kiya hai.
    // const store=useSelector((store)=>store);


    const dispatch=useDispatch();
    const handleClearCart=()=>{
dispatch(clearCart());
    }



  return (
    <div>
   

<h1 className='font-bold text-3xl'> Cart Items-{cartItems.length}</h1>
<button className='bg-green-100 p-2 m-5' onClick={()=>handleClearCart()}>Clear Cart</button>
<div className='flex'> {cartItems.map(item=><FoodItem key={item.id} {...item}/>)}</div>
     

    
      {/* <FoodItem {...cartItems[0]}/> */}
    
    </div>
  )
}

export default Cart;

// https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
