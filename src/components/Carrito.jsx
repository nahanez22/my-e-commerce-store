import React from "react";
import { Link } from "react-router-dom";
import Gift from "./Gift";

const Carrito = ({ saco, handleRemove }) => {
  return (
    <div>
      <Link to="/">Volver a la tienda</Link>
      <h1>Carrito</h1>
      {saco.map((gift) => (
        <Gift key={gift.id} gift={gift} inCart handleRemove={handleRemove} />
      ))}
    </div>
  );
};

export default Carrito;
