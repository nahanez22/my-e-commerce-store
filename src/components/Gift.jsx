import React, { useState } from "react";

// Componente de regalo individual
const Gift = ({
  gift,
  handleAdd,
  handleRemove,
  inCart,
  setGifts,
  giftsList,
}) => {
  const [quantity, setQuantity] = useState(1); // Inicializar la cantidad con un valor predeterminado de 1

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
        <p>Cantidad disponible: {gift.cantidad}</p>
        <form
          onSubmit={(event) => {
            event.preventDefault(); // Prevenir el envío del formulario
            handleAdd(gift, quantity); // Pasar el regalo y la cantidad seleccionada a la función handleAdd
            // Actualizar la cantidad disponible en el regalo
            const updatedGift = { ...gift, cantidad: gift.cantidad - quantity };
            setGifts(
              giftsList.map((g) => (g.id === updatedGift.id ? updatedGift : g))
            );
          }}
        >
          <label htmlFor="quantity">Cantidad a comprar:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
          <button type="submit">Agregar al carrito</button>
        </form>
      </main>
    );
  }
};
export default Gift;
