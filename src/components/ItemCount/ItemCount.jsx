import {useState} from 'react';
import './ItemCount.css';

export const ItemCount = ({stock, initial, onAdd})=>{
    const [contador, setContador] = useState(0);

    const incrementarContador = () => {
        setContador(contador + 1);
      };
    
      const disminuirContador = ()=>{
        if(contador >= 1){ 
        setContador(contador - 1);
        }
      };

    return(
        <div className='estilosContador'>
            <p>Stock disponible: {stock}</p>
            <div className='contenedorControles'>
                <button disabled={stock===0} onClick={disminuirContador} className='botonControl'>-</button>
                <p>{contador}</p>
                <button disabled={stock===0} onClick={incrementarContador} className='botonControl'>+</button>
            </div>
            <button disabled={stock === 0} className='botonAgregar'>Agregar al carrito</button>
        </div>
    )
}