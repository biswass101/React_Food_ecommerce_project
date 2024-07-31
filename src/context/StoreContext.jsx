import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import { useLocalStorage } from "../Hooks/UseLocalStorage";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  // console.log(props);
  // const [cartItems, setCartItems] = useState({});
  const [cartItems, setCartItems] = useLocalStorage('cartItems', {});
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      // if items not available in the cart or adding item first time
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }

    return totalAmount  
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
