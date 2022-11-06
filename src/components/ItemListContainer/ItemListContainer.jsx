/* eslint-disable react-hooks/exhaustive-deps */
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { arregloProductos } from "../BaseDatos/BaseDatos";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "productos");

    if (categoryId) {
      const queryFilter = query(
        queryCollection,
        where("categoria", "==", categoryId)
      );
      getDocs(queryFilter).then((res) =>
        setProductos(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setProductos(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    }
  }, [categoryId]);

  return (
    <div className="contenedor">
      <div>
        <ItemList items={productos} />
      </div>
    </div>
  );
};
