import React, { createContext, useContext, useReducer } from "react";
import toast from 'react-hot-toast';

// 1. Creamos el Contexto en este caso carrito
const CartContext = createContext();

// 2. Reducer para manejar las acciones del carrito
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const exist = state.find(item => item.id === action.payload.id);
      if (exist) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Agregar nuevo producto con cantidad 1
      return [...state, { ...action.payload, quantity: 1 }];

    case "REMOVE_ITEM":
      return state.filter(item => item.id !== action.payload.id);

    case "INCREASE_QUANTITY":
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREASE_QUANTITY":
      return state.map(item =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

// 3. Provider con mayúscula para usar hooks y JSX correctamente
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  
  // Funciones para modificar el carrito
  
 const addToCart = product => {
    dispatch({ type: "ADD_ITEM", payload: product });
    toast.success(`${product.title} agregado al carrito! 🎉`);
  };
  const removeFromCart = product => dispatch({ type: "REMOVE_ITEM", payload: product });
  const increaseQuantity = product => dispatch({ type: "INCREASE_QUANTITY", payload: product });
  const decreaseQuantity = product => dispatch({ type: "DECREASE_QUANTITY", payload: product });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  // Calcular total
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 4. Hook para usar el contexto fácilmente
export const useCartContext = () => useContext(CartContext);
