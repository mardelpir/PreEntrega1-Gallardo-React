import "./NavBar.css";
import ImagenLogo from "../../assets/logo.jpg";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = ()=>{
    return(
        <nav className="navegacionPrincipal">
            <div className="tituloLogo">
                <img className="logo" src={ImagenLogo} alt="logo" />
                <h1>Aviation Store</h1>
            </div>
            
            <div className="enlacesCarrito">
                <ul className="enlaces">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Nosotros</a></li>
                    <li><a href="/">Productos</a></li>
                    <li><a href="/">Contacto</a></li>
                </ul>
                <CartWidget className="carrito"/>
            </div>
        </nav>
    )
}