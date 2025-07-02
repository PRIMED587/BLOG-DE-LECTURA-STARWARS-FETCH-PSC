import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Botón hamburguesa visible solo en móvil */}
      <button
        className="burger-toggle d-md-none"
        onClick={toggleMenu}
        aria-label="Toggle sidebar"
      >
        ☰ Menú
      </button>

      {/* Sidebar visible en escritorio o cuando burger está abierto */}
      <div
        className={`sidebar bg-dark ${
          isOpen ? "d-block" : "d-none d-md-flex"
        } flex-column align-items-center justify-content-start sticky-top`}
      >
        <ul id="sidebarOptions" className="nav flex-column w-100 mt-3">
          <li className="nav-item mb-3">
            <Link
              id="PersonajesButtons"
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              } text-light`}
              to={"/"}
              onClick={() => setIsOpen(false)} // Cierra burger al navegar
            >
              <p className="m-0">PERSONAJES</p>
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link
              id="PlanetasButtons"
              className={`nav-link ${
                location.pathname === "/PlanetsWars" ? "active" : ""
              } text-light`}
              to={"/PlanetsWars"}
              onClick={() => setIsOpen(false)}
            >
              <p className="m-0">PLANETAS</p>
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link
              id="VehiculosButtons"
              className={`nav-link ${
                location.pathname === "/VehiclesWars" ? "active" : ""
              } text-light`}
              to={"/VehiclesWars"}
              onClick={() => setIsOpen(false)}
            >
              <p className="m-0">VEHÍCULOS</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
