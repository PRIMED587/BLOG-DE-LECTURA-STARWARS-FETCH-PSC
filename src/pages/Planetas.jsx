import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Planetas = () => {

    const [planeta, setPlaneta] = useState(null)

    const { id } = useParams()
    async function obtenerPlaneta(id) {

        try {
            const response = await fetch(`https://www.swapi.tech/api/planets/${id}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })

            if (response.status === 404) {
                return
            }

            const data = await response.json()
            console.log(data)
            setPlaneta(data.result.properties)

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        obtenerPlaneta(id)

    }, [id])


    return (


        <div>

            <div id="cardBody" className="card">
                <img src="https://img.europapress.es/fotoweb/fotonoticia_20150620132813_690.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">LUKE SKYWALKER</h5>
                    <p className="card-text">Luke Skywalker es un personaje ficticio y el protagonista​ de la trilogía original de la saga de ciencia ficción Star Wars.​ Interpretado por Mark Hamill, Luke apareció por primera vez en Star Wars, y regresó en El imperio contraataca y El Retorno del Jedi..</p>
                </div>
                <ul id="propiertiesList" className="list-group list-group-flush">
                    <li className="list-group-item">{planeta?.name}</li>
                    <li className="list-group-item">{planeta?.terrain}</li>
                    <li className="list-group-item">{planeta?.climate}</li>
                    <li className="list-group-item">{planeta?.gravity}</li>
                    <li className="list-group-item">{planeta?.population}</li>
                    <li className="list-group-item">{planeta?.diameter}</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link"><i class="fa-solid fa-star"></i>Añadir a favoritos</a>
                </div>
            </div>
        </div>

    )
}

export default Planetas