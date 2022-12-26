import React, { useState } from "react";
import Gift from "./Gift";
import { Link } from "react-router-dom";

// Componente de lista de regalos
const GiftsList = ({ giftsData, handleAdd }) => {
  const [giftsList, setGifts] = useState(giftsData); // Inicializar el estado con la matriz de regalos importada

  return (
    <div>
      <Link to="/carrito">Ver carrito</Link>
      {giftsList.map((gift) => {
        if (gift.cantidad > 0) {
          // Solo se renderiza el componente Gift si la cantidad es mayor a cero
          return (
            <Gift
              key={gift.id}
              gift={gift}
              handleAdd={handleAdd}
              setGifts={setGifts}
              giftsList={giftsList}
            />
          );
        }
      })}
    </div>
  );
};
export default GiftsList;
