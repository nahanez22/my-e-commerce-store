import React, { useState } from "react";
import Gift from "./Gift";
import { Link } from "react-router-dom";

// Componente de lista de regalos
const GiftsList = ({ giftsData, handleAdd }) => {
  const [giftsList, setGifts] = useState(giftsData); // Inicializar el estado con la matriz de regalos importada

  // Método para eliminar un regalo de la lista
  const handleRemove = (id) => {
    setGifts(giftsList.filter((gift) => gift.id !== id));
  };

  return (
    <div>
      <Link to="/carrito">Ver carrito</Link>
      {giftsList.map((gift) => (
        <Gift
          key={gift.id}
          gift={gift}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
          inCart={false}
        />
      ))}
    </div>
  );
};

export default GiftsList;
