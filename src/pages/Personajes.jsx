import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { misFavoritos } from "../store";
import useGlobalReducer from "../hooks/useGlobalReducer";

const Personajes = () => {


    const { store, dispatch } = useGlobalReducer()
    const [personaje, setPersonaje] = useState(null)

    const { id } = useParams()
    const arrayImagenes = [
        'https://img.europapress.es/fotoweb/fotonoticia_20150620132813_690.jpg',
        'https://t3.ftcdn.net/jpg/04/03/74/56/360_F_403745687_jKYV9soTaAEoQUUfQNxcykaUWs0Ygm6G.jpg',
        'https://www.rockandpop.cl/wp-content/uploads/2017/06/R2D2.jpg',
        'https://i0.wp.com/f-de-film.com/wp-content/uploads/2024/08/17143939007647.png?fit=1980%2C1320&ssl=1',
        'https://images7.alphacoders.com/134/1348011.png',
        'https://i.blogs.es/36d486/joel-edgerton-owen-lars-01/1366_2000.jpeg',
        'https://static.wikia.nocookie.net/disneyplus/images/6/68/Beru_Whitesun_Lars_Jung.jpg/revision/latest?cb=20250108080306&path-prefix=de',
        'https://swrpggm.com/wp-content/uploads/2021/02/R5D4_FE.png',
        'https://www.starwars-universe.com/images/multimedia/Images/Television/Rebels/S03E02/11.jpg',
        'https://media.gq.com.mx/photos/62b324b84866ee185f3d7dc2/16:9/w_2560%2Cc_limit/obi%2520wan%2520kenobi.jpg',
    ]

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
                <img src={arrayImagenes[id -1]} className="card-img-top" alt="..." />
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
                <div id="addFavs" className="card-body">
                    <a onClick={() => misFavoritos(dispatch, personaje.name, store)} href="#" className="card-link"><i class="fa-regular fa-star"></i></a>
                    <p>Añadir a Favoritos</p>
                </div>
            </div>
        </div>

    )
}

export default Personajes