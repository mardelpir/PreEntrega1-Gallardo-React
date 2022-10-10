import "./ItemList.css";
import {Item} from "../Item/Item";

export const ItemList = ({items})=>{
    return(
        <div className="estilos-listado">
            <div style={{width:"100%"}}>
                <h2>Lista de Productos</h2>
            </div>
            {items.map(producto=>(
                <Item key={producto.id} item={producto}/>
            ))}
        </div>
    )
}