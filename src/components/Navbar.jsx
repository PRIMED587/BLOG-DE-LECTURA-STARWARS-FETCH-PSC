import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { misFavoritos } from "../store";
import { useRef, useEffect, useState } from "react";

const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let timeout;

    if (!hovering && store.favoritos.length === 0) {
      timeout = setTimeout(() => {
        if (dropdownRef.current) {
          const dropdown =
            bootstrap.Dropdown.getInstance(dropdownRef.current) ||
            new bootstrap.Dropdown(dropdownRef.current);
          dropdown.hide();
        }
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [hovering, store.favoritos.length]);

  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => setHovering(false);

  return (
    <nav id="navbarBack" className="navbar navbar-dark bg-black">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        <div className="order-1 order-md-0 col-12 col-md-auto d-flex justify-content-center justify-content-md-start mb-2 mb-md-0">
          <Link to="/">
            <img
              id="warsLogo"
              src="https://brandemia.org/contenido/subidas/2021/05/portada-starwars-imagenes-brandemia-blog-1000x670.jpg"
              alt="Star Wars Logo"
              className="logo-navbar"
            />
          </Link>
        </div>

        <div
          id="HeaderTextBlog"
          className="text-white fw-bold text-center col-12 col-md"
        >
          <h1 className="m-0"></h1>
        </div>

        <div className="ml-auto order-2 col-12 col-md-auto d-flex justify-content-center justify-content-md-end mt-2 mt-md-0">
          <div className="dropdown">
            <button
              ref={dropdownRef}
              className="btnNavbarFav btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <i className="fa-solid fa-star"></i>{" "}
              <span className="ms-1">Favoritos</span>
            </button>
            <ul
              id="DropDownFavs"
              className="dropdown-menu"
              aria-labelledby="dropdownMenu2"
              ref={menuRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {store.favoritos.length === 0 ? (
                <li className="dropdown-item text-center text-warning">
                  Sin favoritos
                </li>
              ) : (
                store.favoritos.map((item, index) => (
                  <li
                    key={index}
                    className="dropdown-item d-flex justify-content-between align-items-center"
                  >
                    {item}
                    <button
                      onClick={() => misFavoritos(dispatch, item, store)}
                      className="btnEliminarFav btn btn-dark"
                    >
                      <i className="fa-solid fa-user-slash"></i>
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
