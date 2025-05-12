import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CharactersWars = () => {

    const [lista, setLista] = useState([])

    async function obtenerPersonaje() {

        try {
            const response = await fetch('https://www.swapi.tech/api/people')
            console.log(response)

            if (response.status == 404) {
                return
            }

            const data = await response.json()
            console.log(data)

            setLista(data.results)

        }

        catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        obtenerPersonaje()

    }, [])


    return (
        <>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    lista.map((personaje, index) => {
                        return (
                            <div key={index} className="col-4">
                                <Link to={`/Personajes/${personaje.uid}`}>
                                    <div id="containerCard" className="card h-100">
                                        <img src="https://www.shutterstock.com/image-photo/animated-character-3d-image-baby-600nw-2493868223.jpg" className="card-img-top" alt="..." />
                                        <div id="backgroundBodyCard" className="card-body">
                                            <h5 className="card-title">{personaje.name}</h5>
                                            <p className="card-text"></p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )

                    })
                }
            </div>

        </>


    );
};

export default CharactersWars;

