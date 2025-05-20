import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { misFavoritos } from "../store";
import useGlobalReducer from "../hooks/useGlobalReducer";

const Planetas = () => {

    const { store, dispatch } = useGlobalReducer()
    const [planeta, setPlaneta] = useState(null)

    const { id } = useParams()
    const arrayImagenes = [
        'https://images.squarespace-cdn.com/content/v1/5fbc4a62c2150e62cfcb09aa/1620575206208-Z6LODN9KBU1SBRX3B0S7/tatooine.jpg',
        'https://i.pinimg.com/736x/66/b5/24/66b5240d594e6a35c0fcdd0aada9cce6.jpg',
        'https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/67b6966cfe20d6001d438d7c.avif',
        'https://pm1.aminoapps.com/6592/17fa9c214dad4ac1671fb301286aa9095e3a5dab_hq.jpg',
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkpZqWODTkrOGVnkC6h_qYuyvJLNTE3U1KfkoV_e5-BXe5iVK4f-1hyphenhyphenE8qajeNvRv6FypuLonhSLGyd-MgxpFHi0xHTd9G1LPuV-HHZaraOU2zAcQJ6fg8qvoLtYhcJZX-0qIjlbo7psPg/s1600/dagobah.jpg',
        'https://static.wikia.nocookie.net/battlefront/images/0/07/Bespincity.jpg/revision/latest?cb=20160704175812',
        'https://static.wikia.nocookie.net/starwars/images/d/dd/ST-ewokvillage.jpg/revision/latest/scale-to-width-down/1200?cb=20070811234556',
        'https://frikipolis.com/wp-content/uploads/2022/04/starwars-1024x771.jpg',
        'https://images.theconversation.com/files/516919/original/file-20230322-984-capxez.jpeg?ixlib=rb-4.1.0&q=45&auto=format&w=754&fit=clip',
        'https://w0.peakpx.com/wallpaper/1016/187/HD-wallpaper-star-wars-resolution-kamino.jpg',
    ]

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
                    <h5 className="card-title">DATOS DEL PLANETA</h5>
                    <p className="card-text"></p>
                </div>
                <ul id="propiertiesList" className="list-group list-group-flush">
                    <li className="list-group-item"><h3>NOMBRE:</h3>{planeta?.name}</li>
                    <li className="list-group-item"><h3>TERRECLIMA:</h3>{planeta?.climate}</li>
                    <li className="list-group-item"><h3>GRAVEDAD:</h3>{planeta?.gravity}</li>
                    <li className="list-group-item"><h3>POBLACION:</h3>{planeta?.population}</li>
                    <li className="list-group-item"><h3>DIAMETRO:</h3>{planeta?.diameter}</li>
                </ul>
                <div id="addFavs" className="card-body">
                    <a onClick={() => misFavoritos(dispatch, planeta.name, store)} href="#" className="card-link"><i class="fa-regular fa-star"></i></a>
                    <p>Añadir a Favoritos</p>
                </div>
            </div>
        </div>

    )
}

export default Planetas