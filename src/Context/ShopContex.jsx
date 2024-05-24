import React, { createContext, useEffect } from "react";
import { useState } from "react";
import all_product from "../Components/Assets/all_products";

export const ShopContext = createContext(null);

const getDefaultCart = ()=> {

    let cart = {};
    for (let index = 0; index <= all_product.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    
    const [cartItems, setCartItems] = useState(getDefaultCart());

     // Add localStorage integration
  const loadCartFromLocalStorage = () => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCart) {
      setCartItems(storedCart);
    }
  };

  useEffect(() => {
    loadCartFromLocalStorage();
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    const cartString = JSON.stringify(cartItems);
    localStorage.setItem("cartItems", cartString);
  }, [cartItems]);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId] + 1}))

    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId] - 1}))
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}));
    }

    const removeAllFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId] = 0}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for(const item in cartItems)
        {
            if(cartItems[item] > 0)
            {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
               totalItem += cartItems[item]; 
            }
        }
        return totalItem
    }
    const contextValue = {
        getTotalCartItems, 
        all_product, 
        cartItems, 
        addToCart, 
        removeFromCart, 
        getTotalCartAmount,
        removeAllFromCart,
        updateCartItemCount,
        
    }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider> 
    )
}

export default ShopContextProvider;

