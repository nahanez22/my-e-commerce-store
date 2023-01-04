import React, { useState } from "react";
import Gift from "./Gift";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../Context";

// Componente de lista de regalos
const GiftsList = ({ giftsData }) => {
  const [giftsList, setGifts] = useState(giftsData); // Inicializar el estado con la matriz de regalos importada
  const { handleAdd } = useContext(CartContext); // Acceder al contexto y obtener el método handleAdd

  return (
    <div>
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
