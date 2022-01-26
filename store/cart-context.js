import React, { useState, createContext, useEffect} from "react"
import axios from "axios"

const CartContext = createContext({
  cart: [],
  cartLength: 0,
  addItemHandler: (item)=>{},
  incrementItem : (itemId)=>{},
  decrementItem : (itemId)=>{},
  placeOrder: ()=>{}
})

export const CartContextProvider = (props) => {

  // Add cart into local storage
  const initialItem = JSON.parse(window.localStorage.getItem('cart') || "[]") ;

    
  const [cart, setCart] = useState(initialItem);

  // Save to Local Storage
    useEffect(() => {
      window.localStorage.setItem('cart',JSON.stringify(cart));
    }, [cart]);


  const addItemHandler = (item) => {
    setCart((prevState) => {
      
      const isItemAvailable = prevState.some((cartItem)=>cartItem.id === item.id);

      //if two items are of same kind, this'll add them and combine into one number.

      if(isItemAvailable)
      {
        return prevState.map((cartItem)=> cartItem.id === item.id ? {...cartItem,qty: parseInt(cartItem.qty)+parseInt(item.qty)}:cartItem)
      }
      return [...prevState, item];
    })
  }

  const incrementQuantityHandler = (itemId)=>{
    setCart((prevState)=>{

      //button increment order
      return prevState.map((cartItem)=> cartItem.id === itemId ? {...cartItem, qty: parseInt(cartItem.qty)+1}:cartItem);
    })
  }

  const decrementQuantityHandler = (itemId)=>{
    setCart((prevState)=>{

      //button decrement order
      return prevState.map((cartItem)=> cartItem.id === itemId ? {...cartItem, qty: parseInt(cartItem.qty)-1}:cartItem);
    })
  }

  const placeOrderHandler = async() =>{
      await axios.post('http://localhost:8000/placeorder',{cart});
      
      setCart(()=>{
          return [];
      });
  }

  const context = {
    cart: cart,
    // Key : state
    cartLength: cart.length,
    addItemHandler: addItemHandler,
    incrementItem : incrementQuantityHandler,
    decrementItem : decrementQuantityHandler ,
    placeOrder: placeOrderHandler,
  }

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContext;
