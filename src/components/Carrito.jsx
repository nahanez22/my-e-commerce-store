import React from "react";
import { Link } from "react-router-dom";
import Gift from "./Gift";

const Carrito = ({ cart, handleRemove }) => {
  return (
    <div>
      <Link to="/">Volver a la tienda</Link>
      <h1>Carrito</h1>
      {cart.map((gift) => (
        <Gift key={gift.id} gift={gift} inCart handleRemove={handleRemove} />
      ))}
    </div>
  );
};

export default Carrito;
