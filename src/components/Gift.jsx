import React, { useState } from "react";
import { useContext } from "react";

import { CartContext } from "../Context";

// Componente de regalo individual
const Gift = ({ gift, handleRemove, inCart, setGifts, giftsList }) => {
  const [quantity, setQuantity] = useState(1); // Inicializar la cantidad con un valor predeterminado de 1
  const { handleAdd } = useContext(CartContext); // Acceder al contexto y obtener el método handleAdd

  if (gift.cantidad <= 0) {
    return null; // Si la cantidad es igual a cero, no se muestra el componente
  }

  if (inCart) {
    return (
      <main
        style={{ width: "200px", height: "300px", border: "1px solid black" }}
      >
        <img
          src={gift.imagen}
          alt={gift.titulo}
          style={{ width: "100px", height: "100px" }}
        />
        <h2>{gift.titulo}</h2>
        <p>{gift.descripcion}</p>
        <p>Precio: ${gift.precio}</p>
        <p>
          Cantidad: {gift.cantidad}
          <button onClick={() => handleRemove(gift.id)}>Eliminar</button>
        </p>
      </main>
    );
  } else {
    return (
      <main
        style={{ width: "200px", height: "300px", border: "1px solid black" }}
      >
        <img
          src={gift.imagen}
          alt={gift.titulo}
          style={{ width: "100px", height: "100px" }}
        />
        <h2>{gift.titulo}</h2>
        <p>{gift.descripcion}</p>
        <p>Precio: ${gift.precio}</p>
        <p>
          Cantidad:{" "}
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(gift.cantidad).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <button onClick={() => handleAdd(gift, quantity)}>Añadir</button>
        </p>
      </main>
    );
  }
};

export default Gift;
