import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";
export const CartWidget = () => {
  const { getTotalProducts } = useContext(CartContext);
  return (
    <div className="iconoCarrito">
      <FontAwesomeIcon icon={faCartShopping} />
      <span
        style={{
          backgroundColor: "white",
          borderRadius: "10%",
          width: "auto",
          height: "auto",
          fontSize: "1rem",
          color: "black",
        }}
      >
        {getTotalProducts() || ""}
      </span>
    </div>
  );
};
