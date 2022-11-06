import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import { db } from "../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

export const Cart = () => {
  const value = useContext(CartContext);
  const {
    productosCarrito,
    getTotalPrice,
    getTotalProducts,
    removeItem,
    clearCart,
  } = value;
  const [compraId, setCompraId] = useState("");
  const sendOrder = (evt) => {
    evt.preventDefault();
    //console.log(evt.target[1].value);
    const compra = {
      buyer: {
        name: evt.target[1].value,
        phone: evt.target[2].value,
        email: evt.target[3].value,
      },
      items: productosCarrito,
      total: getTotalPrice(),
    };
    const queryRef = collection(db, "orders");
    addDoc(queryRef, compra).then((res) => setCompraId(res.id));
  };

  if (productosCarrito.length === 0) {
    return (
      <>
        <p>No hay productos en el carrito</p>
        <Link to="/">
          <button className="botonVolverComprar">Vamos a comprar!</button>
        </Link>
      </>
    );
  }
  return (
    <div className="parent">
      <p>Carrito</p>

      <div className="divCart child" style={{ width: "500px" }}>
        {productosCarrito.map((producto) => (
          <div className="tarjetaCart">
            <h3>{producto.title}</h3>
            <p>Precio Unitario {producto.price}</p>
            <p>Cantidad Seleccionada {producto.quantity}</p>
            <p>Monto Total ${producto.quantityPrice} </p>
            <button
              className="botonRemove"
              onClick={() => removeItem(producto.id)}
            >
              Eliminar Producto
            </button>
          </div>
        ))}
        <button className="botonClear" onClick={() => clearCart()}>
          Vaciar Carrito
        </button>
        <p>
          <strong>Precio Total:</strong> {getTotalPrice()}
        </p>
        <p>
          <strong>Total de Productos:</strong> {getTotalProducts()}
        </p>
      </div>
      {compraId && (
        <p className="numeroOrden">
          La compra fue procesada! Su número de orden es {compraId}.{" "}
        </p>
      )}
      <form id="msform" onSubmit={sendOrder}>
        {/* fieldsets  */}
        <fieldset>
          <h2 class="fs-title">Finalizar compra</h2>

          <input
            type="text"
            name="nombre"
            placeholder="Ingrese Su Nombre"
            required
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Ingrese su Teléfono"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Ingrese su Email"
            required
          />
          <button className="botonForm" type="submit">
            Finalizar Compra
          </button>
        </fieldset>
      </form>
    </div>
  );
};
