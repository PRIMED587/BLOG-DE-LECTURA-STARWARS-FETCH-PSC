import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="sidebar bg-dark px-3 py-4 h-100">
            <ul id="sidebarOptions" className="nav flex-column">
                <li className="nav-item mb-3">
                    <Link id="PersonajesButtons" className="nav-link text-light" to={"/"}>
                        <p>PERSONAJES</p>
                    </Link>
                </li>
                <li className="nav-item mb-3">
                    <Link id="PlanetasButtons" className="nav-link text-light" to={"/PlanetsWars"}>
                        <p>PLANETAS</p>
                    </Link>
                </li>
                <li className="nav-item mb-3">
                    <Link id="VehiculosButtons" className="nav-link text-light" to={"/VehiclesWars"}>
                        <p>VEHICULOS</p>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;
