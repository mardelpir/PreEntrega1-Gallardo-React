import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
  const { addProduct } = useContext(CartContext);
  const agregarProducto = (quantity) => {
    addProduct(item, quantity);
  };

  return (
    <div className="detail-container">
      <p style={{ width: "100%" }}>Item Detail</p>
      <div className="img-container">
        <img className="imgDetail" src={item.pictureUrl} alt={item.title} />
      </div>
      <div className="img-container">
        <h4>{item.title}</h4>
        <h5>{item.price}</h5>
      </div>
      <ItemCount stock={10} initial={1} onAdd={agregarProducto} />
    </div>
  );
};
