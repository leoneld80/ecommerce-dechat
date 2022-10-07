import { createContext, useState, useContext } from "react";



export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  const cartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0);
  };

  const cartTotal = () => {
    return cart.reduce((acc, item) => acc + item.cantidad * item.price, 0)
}
  
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const removeItem = (id) => {
    setCart( cart.filter((item) => item.id !== id) )
}

  const clearCart = () => {
    setCart([])}

  return (
    <CartContext.Provider value={{
        cart,
        addToCart,
        isInCart,
        cartQuantity,
        clearCart,
        cartTotal,
        // emptyCart,
        removeItem,
        // terminarCompra,
        // terminarCompraConSwal
      }}>
        {children}
    </CartContext.Provider>
)

};

export const useCartContext = () => {
  return useContext(CartContext);
};
