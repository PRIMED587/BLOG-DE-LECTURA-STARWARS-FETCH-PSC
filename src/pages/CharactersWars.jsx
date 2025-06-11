import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CharactersWars = () => {

    const [lista, setLista] = useState([])

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

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {
                    lista.map((personaje, index) => {
                        return (
                            <div key={index} className="col">
                                <Link to={`/Personajes/${personaje.uid}`}>
                                    <div id="containerCard" className="card h-100">
                                        <img id="imageCard" src={arrayImagenes[index]} className="card-img-top" alt="..." />
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

