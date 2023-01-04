import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import GiftsList from "./components/GiftsList";
import Carrito from "./pages/Carrito";
import { gifts } from "./data/gifts";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const App = () => {
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
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Tienda de regalos</h1>
              <GiftsList giftsData={gifts} handleAdd={handleAdd} />{" "}
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/carrito"
          element={<Carrito cart={cart} handleRemove={handleRemove} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
