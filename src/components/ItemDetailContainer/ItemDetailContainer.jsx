import { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import { arregloProductos } from "../BaseDatos/BaseDatos";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {ItemCount} from "../ItemCount/ItemCount"

export const ItemDetailContainer = ()=>{
    const {productId} = useParams();
    const [item, setItem] = useState({});

    const getItem = (id)=>{
        return new Promise((resolve, reject)=>{
            const item = arregloProductos.find(item=>item.id === parseInt(id));
            resolve(item)
        })
    }

    useEffect(()=>{
        const getProducto = async()=>{
            const producto = await getItem(productId);
            console.log('producto', producto)
            setItem(producto);
        }
        getProducto();
    },[productId])

    console.log('item:', item)
    return(
        <div className="item-detail-container">
            <ItemDetail item={item}/>
            <ItemCount/>
        </div>
    )
}