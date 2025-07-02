import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { misFavoritos } from "../store";
import useGlobalReducer from "../hooks/useGlobalReducer";

const Vehiculos = () => {
  const { store, dispatch } = useGlobalReducer();
  const [vehiculo, setVehiculo] = useState(null);

  const { id } = useParams();
  const arrayImagenes = [
    "https://www.solo3dstudio.com/wp-content/uploads/2024/10/sandcrawler-41_980x500.png",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/657811c3-939d-4d1e-8fa5-d1adbf999420/dd8gj7i-999ce7fa-c804-4a74-ac03-6787eddb2c0a.jpg/v1/fill/w_1600,h_900,q_75,strp/luke_s_x_34_landspeeder___restored_by_ravendeviant_dd8gj7i-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvNjU3ODExYzMtOTM5ZC00ZDFlLThmYTUtZDFhZGJmOTk5NDIwXC9kZDhnajdpLTk5OWNlN2ZhLWM4MDQtNGE3NC1hYzAzLTY3ODdlZGRiMmMwYS5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.37XLIa0XjPp_9dELu_JhCIuhqJQAMewz2sUCI08j8uw",
    "https://static.wikia.nocookie.net/swse/images/2/22/T-16_Skyhopper.jpg/revision/latest?cb=20220406211641",
    "https://patricksxwingblog.wordpress.com/wp-content/uploads/2021/07/tie-advanced.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/t-47-airspeeder-main_93f089db.jpeg?region=0%2C0%2C1280%2C720",
    "https://imgcdn.stablediffusionweb.com/2024/12/11/8bd70660-7508-4a6e-b2af-0e419466593d.jpg",
    "https://static.wikia.nocookie.net/esstarwars/images/1/17/TIE_Bomber_BF2.png/revision/latest?cb=20171101030957",
    "https://static.wikia.nocookie.net/esstarwars/images/f/ff/ATST-SWBdice.png/revision/latest?cb=20171220213037",
    "https://swrpggm.com/wp-content/uploads/2021/10/CloudCar_FE.png",
    "https://www.renderhub.com/dazinbane/jabbas-barge/jabbas-barge-01.jpg",
  ];

  async function obtenerVehiculo(id) {
    try {
      const response = await fetch(
        `https://www.swapi.tech/api/vehicles/${id}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 404) {
        return;
      }

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

  const AgregarFoto = () => {
    const [foto, setFoto] = useState("");

    if (e.key === "Enter") {
      setFoto("");
    }
  };

  return (
    <div>
      <div id="cardBody" className="card">
        <img src={arrayImagenes[id - 1]} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">DATOS DEL VEHICULO</h5>
          <p className="card-text"></p>
        </div>
        <ul id="propiertiesList" className="list-group list-group-flush">
          <li className="list-group-item">
            <h3>NOMBRE:</h3>
            {vehiculo?.name}
          </li>
          <li className="list-group-item">
            <h3>MODELO:</h3>
            {vehiculo?.model}
          </li>
          <li className="list-group-item">
            <h3>PASAJEROS:</h3>
            {vehiculo?.passengers}
          </li>
        </ul>
        <div id="addFavs" className="card-body">
          <a
            onClick={() => misFavoritos(dispatch, vehiculo.name, store)}
            href="#"
            className="card-link"
          >
            <i class="fa-regular fa-star"></i>
          </a>
          <p>Añadir a Favoritos</p>
        </div>
      </div>
    </div>
  );
};

export default Vehiculos;
