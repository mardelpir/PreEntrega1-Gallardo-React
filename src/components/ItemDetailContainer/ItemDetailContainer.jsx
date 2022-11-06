import { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import { arregloProductos } from "../BaseDatos/BaseDatos";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "productos", productId);
    getDoc(queryDoc).then((res) => setItem({ id: res.id, ...res.data() }));
  }, []);
  return (
    <div className="item-detail-container">
      <ItemDetail item={item} />
    </div>
  );
};
