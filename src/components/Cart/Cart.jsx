import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Cart = () => {
  const value = useContext(CartContext);
  const {
    productosCarrito,
    getTotalPrice,
    getTotalProducts,
    removeItem,
    clearCart,
  } = value;
  console.log(productosCarrito);
  return (
    <div>
      <p>Cart</p>
      <div style={{ width: "500px" }}>
        {productosCarrito.map((producto) => (
          <div style={{ border: "1px solid black" }}>
            <h3>{producto.title}</h3>
            <p>Precio Unitario {producto.price}</p>
            <p>Cantidad Seleccionada {producto.quantity}</p>
            <p>Monto Total ${producto.quantityPrice} </p>
            <button onClick={() => removeItem(producto.id)}>
              Eliminar Producto
            </button>
          </div>
        ))}
        <button onClick={() => clearCart()}>Vaciar Carrito</button>
        <p>
          <strong>Precio Total:</strong> {getTotalPrice()}
        </p>
        <p>
          <strong>Total de Productos:</strong> {getTotalProducts()}
        </p>
      </div>
    </div>
  );
};
