import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VehiclesWars = () => {
  const [lista, setLista] = useState([]);

  const arrayImagenes = [
    "https://assets.superhivemarket.com/store/product/154323/image/xlarge-dd3a09190c31b9d062cb5f46a66e503e.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/657811c3-939d-4d1e-8fa5-d1adbf999420/dd8gj7i-999ce7fa-c804-4a74-ac03-6787eddb2c0a.jpg/v1/fill/w_1600,h_900,q_75,strp/luke_s_x_34_landspeeder___restored_by_ravendeviant_dd8gj7i-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvNjU3ODExYzMtOTM5ZC00ZDFlLThmYTUtZDFhZGJmOTk5NDIwXC9kZDhnajdpLTk5OWNlN2ZhLWM4MDQtNGE3NC1hYzAzLTY3ODdlZGRiMmMwYS5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.37XLIa0XjPp_9dELu_JhCIuhqJQAMewz2sUCI08j8uw",
    "https://static.wikia.nocookie.net/starwars/images/e/e1/Lukes_T-16_Skyhopper_TT.png",
    "https://patricksxwingblog.wordpress.com/wp-content/uploads/2021/07/tie-advanced.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/t-47-airspeeder-main_93f089db.jpeg?region=0%2C0%2C1280%2C720",
    "https://imgcdn.stablediffusionweb.com/2024/12/11/8bd70660-7508-4a6e-b2af-0e419466593d.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgk2jraFdSFVDs3bOJIo4JxBHnyDWwtmGsCVbu8b8KpQQYf1_fi6OJZVg-pZPhU3s4Ye0jUuFsw9JLXjaokwZpWla61r_4poGTn3m1hFCsP9VEvb_5L96rK7jfdAmb5ZluyxNbTNVDiCMcx/s1600/TIEBomber1.jpg",
    "https://i.etsystatic.com/23442406/r/il/8b7496/5367037655/il_1588xN.5367037655_c1n1.jpg",
    "https://swrpggm.com/wp-content/uploads/2021/10/CloudCar_FE.png",
    "https://www.renderhub.com/dazinbane/jabbas-barge/jabbas-barge-01.jpg",
  ];

  async function obtenerVehiculo() {
    try {
      const response = await fetch("https://www.swapi.tech/api/vehicles");
      console.log(response);

      if (response.status == 404) {
        return;
      }

      const data = await response.json();
      console.log(data);

      setLista(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    obtenerVehiculo();
  }, []);

  return (
    <>
      <div className="main-content">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {lista.map((vehiculo, index) => {
            return (
              <div key={index} className="col">
                <Link to={`/Vehiculos/${vehiculo.uid}`}>
                  <div className="card characters-card h-100">
                    <img
                      src={arrayImagenes[index]}
                      alt="..."
                      className="characters-img"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{vehiculo.name}</h5>
                      <p className="card-text"></p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default VehiclesWars;
