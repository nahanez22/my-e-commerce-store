import { createContext } from "react";
import { useState } from "react";

// Inicializar el contexto
const CartContext = createContext();

// Proporcionar el Provider
const CartProvider = ({ children }) => {
  // Estado del carrito de compras
  const [cart, setCart] = useState([]);

  // Método para agregar un regalo al carrito de compras
  const handleAdd = (gift, quantity) => {
    const newGift = { ...gift, cantidad: quantity }; // Crear una copia del regalo y agregar la cantidad seleccionada
    setCart([...cart, newGift]); // Agregar el regalo al carrito de compras
  };

  // Método para eliminar un regalo del carrito de compras
  const handleRemove = (id) => {
    setCart(cart.filter((gift) => gift.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleAdd,
        handleRemove,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
