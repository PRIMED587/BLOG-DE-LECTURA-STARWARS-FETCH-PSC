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


    return (
        <div>
        <p>Hola {personaje?.name}</p>
        <p>hola {personaje?.mass}</p>
        </div>
       
    )
}

export default Personajes