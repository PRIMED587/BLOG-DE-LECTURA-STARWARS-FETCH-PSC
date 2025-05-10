import React from "react";
import CharactersWars from "../pages/CharactersWars";
import { Link } from "react-router-dom";


const SideBar = () => {
    return (
        <>
            <ul id="sidebarOptions" class="nav flex-column">
                <li class="nav-item">
                    <Link class="nav-link" to={"/"} href="#">PERSONAJES</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to={"/PlanetsWars"} href="#">PLANETAS</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to={"/VehiclesWars"} href="#">VEHICULOS</Link>
                </li>
            </ul>

        </>


    );
};

export default SideBar;

