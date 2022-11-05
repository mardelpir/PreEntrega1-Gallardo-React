import "./NavBar.css";
import ImagenLogo from "../../assets/logo.jpg";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navegacionPrincipal">
      <div className="tituloLogo">
        <Link to="/">
          <img className="logo" src={ImagenLogo} alt="logo" />
        </Link>
        <h1 className="tituloPrincipal">Aviation Store</h1>
      </div>

      <div className="enlacesCarrito">
        <Link to="/" className="enlaceInicioContacto">
          Inicio
        </Link>
        <Link to="/" className="enlaceInicioContacto">
          Contacto
        </Link>
        <NavLink
          className={({ isActive }) =>
            isActive === true ? "claseActiva" : "claseInactiva"
          }
          to="/category/accesorios"
        >
          Accesorios
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive === true ? "claseActiva" : "claseInactiva"
          }
          to="/category/herramientas"
        >
          Herramientas
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive === true ? "claseActiva" : "claseInactiva"
          }
          to="/category/insumos"
        >
          Insumos
        </NavLink>
        <Link className="carritoLink" to="/cart">
          <CartWidget className="carrito" />
        </Link>
      </div>
    </nav>
  );
};
