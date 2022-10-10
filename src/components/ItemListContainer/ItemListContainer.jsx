/* eslint-disable react-hooks/exhaustive-deps */
import "./ItemListContainer.css";
import {useState, useEffect} from "react";
import { ItemList } from "../ItemList/ItemList";
import { arregloProductos } from "../BaseDatos/BaseDatos";
import {useParams} from "react-router-dom";


export const ItemListContainer = ()=>{
    
    const {categoryId} = useParams();
    const [productos, setProductos] = useState([]);
    const promesa = new Promise((resolve, reject)=>{
        setTimeout(() =>{
            resolve(arregloProductos);
        }, 2000)
    });

    useEffect(()=>{
        promesa.then(respuesta=>{
            if(categoryId){
                const productosFiltrados = respuesta.filter(elm=>elm.categoria === categoryId);
                setProductos(productosFiltrados);
            } else{
                setProductos(respuesta);
            }
        })
    },[categoryId]);
    console.log("productos", productos);
    return(
        <div className="contenedor">
            <div>
                
                <ItemList items={productos}/>
            </div>
            
            
        </div>
    )
}