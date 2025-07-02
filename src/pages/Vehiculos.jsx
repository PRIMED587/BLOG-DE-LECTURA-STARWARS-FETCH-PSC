import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { misFavoritos } from "../store";
import useGlobalReducer from "../hooks/useGlobalReducer";

const Vehiculos = () => {
  const { store, dispatch } = useGlobalReducer();
  const [vehiculo, setVehiculo] = useState(null);
  const { id } = useParams();

  const imagenesPorNombre = {
    "Sand Crawler":
      "https://assets.superhivemarket.com/store/product/154323/image/xlarge-dd3a09190c31b9d062cb5f46a66e503e.jpg",
    "T-16 skyhopper":
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/657811c3-939d-4d1e-8fa5-d1adbf999420/dd8gj7i-999ce7fa-c804-4a74-ac03-6787eddb2c0a.jpg",
    "X-34 landspeeder":
      "https://static.wikia.nocookie.net/starwars/images/e/e1/Lukes_T-16_Skyhopper_TT.png",
    "TIE/LN starfighter":
      "https://patricksxwingblog.wordpress.com/wp-content/uploads/2021/07/tie-advanced.jpeg",
    Snowspeeder:
      "https://lumiere-a.akamaihd.net/v1/images/t-47-airspeeder-main_93f089db.jpeg?region=0%2C0%2C1280%2C720",
    "TIE bomber":
      "https://imgcdn.stablediffusionweb.com/2024/12/11/8bd70660-7508-4a6e-b2af-0e419466593d.jpg",
    "AT-AT":
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgk2jraFdSFVDs3bOJIo4JxBHnyDWwtmGsCVbu8b8KpQQYf1_fi6OJZVg-pZPhU3s4Ye0jUuFsw9JLXjaokwZpWla61r_4poGTn3m1hFCsP9VEvb_5L96rK7jfdAmb5ZluyxNbTNVDiCMcx/s1600/TIEBomber1.jpg",
    "AT-ST":
      "https://i.etsystatic.com/23442406/r/il/8b7496/5367037655/il_1588xN.5367037655_c1n1.jpg",
    "Storm IV Twin-Pod cloud car":
      "https://swrpggm.com/wp-content/uploads/2021/10/CloudCar_FE.png",
    "Sail barge":
      "https://www.renderhub.com/dazinbane/jabbas-barge/jabbas-barge-01.jpg",
  };

  const defaultImage =
    "https://starwars-visualguide.com/assets/img/placeholder.jpg";

  async function obtenerVehiculo(id) {
    try {
      const response = await fetch(
        `https://www.swapi.tech/api/vehicles/${id}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 404) return;

      const data = await response.json();
      console.log(data);
      setVehiculo(data.result.properties);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    obtenerVehiculo(id);
  }, [id]);

  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
      <div className="personaje-card text-white shadow-lg">
        <img
          src={imagenesPorNombre[vehiculo?.name] || defaultImage}
          alt={vehiculo?.name}
          className="personaje-img-top"
        />
        <div className="personaje-body">
          <h1 className="text-warning text-center mb-3">
            {vehiculo?.name || "Cargando..."}
          </h1>
          <ul className="list-group list-group-flush">
            {[
              "model",
              "vehicle_class",
              "manufacturer",
              "cost_in_credits",
              "length",
              "crew",
              "passengers",
              "max_atmosphering_speed",
              "cargo_capacity",
              "consumables",
            ].map((field) => (
              <li
                key={field}
                className="list-group-item bg-transparent text-white"
              >
                <strong>{field.replace("_", " ").toUpperCase()}:</strong>{" "}
                {vehiculo?.[field]}
              </li>
            ))}
          </ul>
          <div className="text-center mt-4">
            <button
              onClick={() => misFavoritos(dispatch, vehiculo?.name, store)}
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

export default Vehiculos;
