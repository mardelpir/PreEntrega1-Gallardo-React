import "./ItemListContainer.css"

export const ItemListContainer = ({bienvenida, title})=>{
    return(
        <div className="contenedor">
            {bienvenida} - {title}
        </div>
    )
}