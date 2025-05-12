import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Personajes = () => {

    const [personaje, setPersonaje] = useState(null)

    const { id } = useParams()
    async function obtenerPersonaje(id) {

        try {
            const response = await fetch(`https://www.swapi.tech/api/people/${id}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })

            if (response.status === 404) {
                return
            }

            const data = await response.json()
            console.log(data)
            setPersonaje(data.result.properties)

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        obtenerPersonaje(id)

    }, [id])

const AgregarFoto = () => {
    const [foto, setFoto] = useState('')
    
        if (e.key === 'Enter') {
            setFoto('')
        }

    }

    

    return (


        <div>

            <div id="cardBody" className="card">
                <img src="https://img.europapress.es/fotoweb/fotonoticia_20150620132813_690.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">DATOS DEL PERSONAJE</h5>
                    </div>
                <ul id="propiertiesList" className="list-group list-group-flush">
                    <li className="list-group-item"><h3>Nombre:</h3> {personaje?.name}</li>
                    <li className="list-group-item"><h3>Genero:</h3> {personaje?.gender}</li>
                    <li className="list-group-item"><h3>Nacimiento:</h3> {personaje?.birth_year}</li>
                    <li className="list-group-item"><h3>Altura:</h3> {personaje?.height}</li>
                    <li className="list-group-item"><h3>Peso:</h3> {personaje?.mass}</li>
                    <li className="list-group-item"><h3>Color de Ojos:</h3> {personaje?.eye_color}</li>
                    <li className="list-group-item"><h3>Color de Cabello:</h3> {personaje?.hair_color}</li>
                    <li className="list-group-item"><h3>Color de Piel:</h3> {personaje?.skin_color}</li>
                </ul>
                <div className="card-body">
                    <a id="addFavs" href="#" className="card-link"><i class="fa-regular fa-star"></i>Añadir a favoritos</a>
                </div>
            </div>
        </div>

    )
}

export default Personajes