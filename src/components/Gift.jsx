import React, { useState } from "react";

// Componente de regalo individual
const Gift = ({ gift, handleAdd, handleRemove, inCart }) => {
  const [quantity, setQuantity] = useState(1); // Inicializar la cantidad con un valor predeterminado de 1

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
        <h2>{gift.Titulo}</h2>
        <p>{gift.precio}</p>
        <p>Cantidad: {gift.cantidad}</p>
        <button onClick={() => handleRemove(gift.id)}>
          Eliminar del carrito
        </button>
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
        <h2>{gift.Titulo}</h2>
        <p>{gift.precio}</p>
        <p>Cantidad: {gift.cantidad}</p>
        <form
          onSubmit={(event) => {
            event.preventDefault(); // Prevenir el envío del formulario
            handleAdd(gift, quantity); // Pasar el regalo y la cantidad seleccionada a la función handleAdd
            handleRemove(gift.id); // Eliminar el regalo de la lista de regalos
          }}
        >
          <label htmlFor="quantity">Cantidad:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
          <button type="submit">Agregar al saco</button>
        </form>
      </main>
    );
  }
};
export default Gift;
