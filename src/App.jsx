import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import GiftsList from "./components/GiftsList";
import Carrito from "./components/Carrito";
import { gifts } from "./data/gifts";

const App = () => {
  // Estado del carrito de compras
  const [saco, setSaco] = useState([]);

  // Método para agregar un regalo al carrito de compras
  const handleAdd = (gift, quantity) => {
    const newGift = { ...gift, cantidad: quantity }; // Crear una copia del regalo y agregar la cantidad seleccionada
    setSaco([...saco, newGift]); // Agregar el regalo al carrito de compras
  };

  // Método para eliminar un regalo del carrito de compras
  const handleRemove = (id) => {
    setSaco(saco.filter((gift) => gift.id !== id));
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
        <Route
          path="/carrito"
          element={<Carrito saco={saco} handleRemove={handleRemove} />}
        />
      </Routes>
    </div>
  );
};

export default App;
