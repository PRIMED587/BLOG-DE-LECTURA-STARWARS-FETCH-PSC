import React from "react";
import CharactersWars from "../pages/CharactersWars";
import { Link } from "react-router-dom";


const SideBar = () => {
    return (
        <>
            <ul id="sidebarOptions" className="nav flex-column">
                <li className="nav-item">
                    <Link id="PersonajesButtons" className="nav-link" to={"/"}><p>PERSONAJES</p></Link>
                </li>
                <li className="nav-item">
                    <Link id="PlanetasButtons" className="nav-link" to={"/PlanetsWars"}><p>PLANETAS</p></Link>
                </li>
                <li className="nav-item">
                    <Link id="VehiculosButtons" className="nav-link" to={"/VehiclesWars"}><p>VEHICULOS</p></Link>
                </li>
            </ul>


        </>


    );
};

export default SideBar;

