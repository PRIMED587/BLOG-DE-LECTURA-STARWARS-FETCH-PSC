import React from "react";
import CharactersWars from "../pages/CharactersWars";
import { Link } from "react-router-dom";


const SideBar = () => {
    return (
        <>
            <ul id="sidebarOptions" class="nav flex-column">
                <li class="nav-item">
                    <Link id="PersonajesButtons" class="nav-link" to={"/"} href="#"><p>PERSONAJES</p></Link>
                </li>
                <li class="nav-item">
                    <Link id="PlanetasButtons" class="nav-link" to={"/PlanetsWars"} href="#"><p>PLANETAS</p></Link>
                </li>
                <li class="nav-item">
                    <Link id="VehiculosButtons" class="nav-link" to={"/VehiclesWars"} href="#"><p>VEHICULOS</p></Link>
                </li>
            </ul>

        </>


    );
};

export default SideBar;

