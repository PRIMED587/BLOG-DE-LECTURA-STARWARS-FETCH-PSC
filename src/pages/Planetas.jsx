import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { misFavoritos } from "../store";
import useGlobalReducer from "../hooks/useGlobalReducer";

const Planetas = () => {
  const { store, dispatch } = useGlobalReducer();
  const [planeta, setPlaneta] = useState(null);
  const { id } = useParams();

  const imagenesPorNombre = {
    Tatooine:
      "https://images.squarespace-cdn.com/content/v1/5fbc4a62c2150e62cfcb09aa/1620575206208-Z6LODN9KBU1SBRX3B0S7/tatooine.jpg",
    Alderaan:
      "https://i.pinimg.com/736x/66/b5/24/66b5240d594e6a35c0fcdd0aada9cce6.jpg",
    "Yavin IV":
      "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/67b6966cfe20d6001d438d7c.avif",
    Hoth: "https://pm1.aminoapps.com/6592/17fa9c214dad4ac1671fb301286aa9095e3a5dab_hq.jpg",
    Dagobah:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkpZqWODTkrOGVnkC6h_qYuyvJLNTE3U1KfkoV_e5-BXe5iVK4f-1hyphenhyphenE8qajeNvRv6FypuLonhSLGyd-MgxpFHi0xHTd9G1LPuV-HHZaraOU2zAcQJ6fg8qvoLtYhcJZX-0qIjlbo7psPg/s1600/dagobah.jpg",
    Bespin:
      "https://c4.wallpaperflare.com/wallpaper/641/582/516/star-wars-cloud-city-science-fiction-bespin-wallpaper-preview.jpg",
    Endor:
      "https://i.pinimg.com/736x/ba/26/58/ba2658d6a60f3b69218120db71470582.jpg",
    Naboo:
      "https://frikipolis.com/wp-content/uploads/2022/04/starwars-1024x771.jpg",
    Coruscant:
      "https://images.theconversation.com/files/516919/original/file-20230322-984-capxez.jpeg?ixlib=rb-4.1.0&q=45&auto=format&w=754&fit=clip",
    Kamino:
      "https://w0.peakpx.com/wallpaper/1016/187/HD-wallpaper-star-wars-resolution-kamino.jpg",
  };

  const defaultImage =
    "https://starwars-visualguide.com/assets/img/placeholder.jpg";

  async function obtenerPlaneta(id) {
    try {
      const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
      if (response.status === 404) return;
      const data = await response.json();
      setPlaneta(data.result.properties);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    obtenerPlaneta(id);
  }, [id]);

  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
      <div className="personaje-card text-white shadow-lg">
        <img
          src={imagenesPorNombre[planeta?.name] || defaultImage}
          alt={planeta?.name}
          className="personaje-img-top"
        />
        <div className="personaje-body">
          <h1 className="text-warning text-center mb-3">
            {planeta?.name || "Cargando..."}
          </h1>
          <ul className="list-group list-group-flush">
            {[
              "climate",
              "diameter",
              "gravity",
              "orbital_period",
              "population",
              "rotation_period",
              "surface_water",
              "terrain",
            ].map((field) => (
              <li
                key={field}
                className="list-group-item bg-transparent text-white"
              >
                <strong>{field.replace("_", " ").toUpperCase()}:</strong>{" "}
                {planeta?.[field]}
              </li>
            ))}
          </ul>
          <div className="text-center mt-4">
            <button
              onClick={() => misFavoritos(dispatch, planeta?.name, store)}
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

export default Planetas;
