import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { misFavoritos } from "../store";
import useGlobalReducer from "../hooks/useGlobalReducer";

const Personajes = () => {
  const { store, dispatch } = useGlobalReducer();
  const [personaje, setPersonaje] = useState(null);
  const { id } = useParams();

  const imagenesPorNombre = {
    "Luke Skywalker":
      "https://img.europapress.es/fotoweb/fotonoticia_20150620132813_690.jpg",
    "C-3PO":
      "https://t3.ftcdn.net/jpg/04/03/74/56/360_F_403745687_jKYV9soTaAEoQUUfQNxcykaUWs0Ygm6G.jpg",
    "R2-D2": "https://www.rockandpop.cl/wp-content/uploads/2017/06/R2D2.jpg",
    "Darth Vader":
      "https://i0.wp.com/f-de-film.com/wp-content/uploads/2024/08/17143939007647.png?fit=1980%2C1320&ssl=1",
    "Leia Organa": "https://images7.alphacoders.com/134/1348011.png",
    "Owen Lars":
      "https://i.blogs.es/36d486/joel-edgerton-owen-lars-01/1366_2000.jpeg",
    "Beru Whitesun lars":
      "https://static.wikia.nocookie.net/esstarwars/images/8/84/BeruWhitesunLars.jpg",
    "R5-D4": "https://swrpggm.com/wp-content/uploads/2021/02/R5D4_FE.png",
    "Biggs Darklighter":
      "https://www.starwars-universe.com/images/multimedia/Images/Television/Rebels/S03E02/11.jpg",
    "Obi-Wan Kenobi":
      "https://media.gq.com.mx/photos/62b324b84866ee185f3d7dc2/16:9/w_2560%2Cc_limit/obi%2520wan%2520kenobi.jpg",
  };

  const defaultImage =
    "https://starwars-visualguide.com/assets/img/placeholder.jpg";

  async function obtenerPersonaje(id) {
    try {
      const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
      if (response.status === 404) return;
      const data = await response.json();
      setPersonaje(data.result.properties);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    obtenerPersonaje(id);
  }, [id]);

  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
      <div className="personaje-card text-white shadow-lg">
        <img
          src={imagenesPorNombre[personaje?.name] || defaultImage}
          alt={personaje?.name}
          className="personaje-img-top"
        />
        <div className="personaje-body">
          <h1 className="text-warning text-center mb-3">
            {personaje?.name || "Cargando..."}
          </h1>
          <ul className="list-group list-group-flush">
            {[
              "gender",
              "birth_year",
              "height",
              "mass",
              "eye_color",
              "hair_color",
              "skin_color",
            ].map((field) => (
              <li
                key={field}
                className="list-group-item bg-transparent text-white"
              >
                <strong>{field.replace("_", " ").toUpperCase()}:</strong>{" "}
                {personaje?.[field]}
              </li>
            ))}
          </ul>
          <div className="text-center mt-4">
            <button
              onClick={() => misFavoritos(dispatch, personaje?.name, store)}
              className="btnFav mx-auto"
            >
              <i className="fa-regular fa-star"></i>
            </button>
            <p className="mt-2 text-warning">Añadir a Favoritos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personajes;
