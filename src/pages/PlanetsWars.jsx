import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PlanetsWars = () => {
  const [lista, setLista] = useState([]);

  const arrayImagenes = [
    "https://images.squarespace-cdn.com/content/v1/5fbc4a62c2150e62cfcb09aa/1620575206208-Z6LODN9KBU1SBRX3B0S7/tatooine.jpg",
    "https://i.pinimg.com/736x/66/b5/24/66b5240d594e6a35c0fcdd0aada9cce6.jpg",
    "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/67b6966cfe20d6001d438d7c.avif",
    "https://pm1.aminoapps.com/6592/17fa9c214dad4ac1671fb301286aa9095e3a5dab_hq.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkpZqWODTkrOGVnkC6h_qYuyvJLNTE3U1KfkoV_e5-BXe5iVK4f-1hyphenhyphenE8qajeNvRv6FypuLonhSLGyd-MgxpFHi0xHTd9G1LPuV-HHZaraOU2zAcQJ6fg8qvoLtYhcJZX-0qIjlbo7psPg/s1600/dagobah.jpg",
    "https://c4.wallpaperflare.com/wallpaper/641/582/516/star-wars-cloud-city-science-fiction-bespin-wallpaper-preview.jpg",
    "https://i.pinimg.com/736x/ba/26/58/ba2658d6a60f3b69218120db71470582.jpg",
    "https://frikipolis.com/wp-content/uploads/2022/04/starwars-1024x771.jpg",
    "https://images.theconversation.com/files/516919/original/file-20230322-984-capxez.jpeg?ixlib=rb-4.1.0&q=45&auto=format&w=754&fit=clip",
    "https://w0.peakpx.com/wallpaper/1016/187/HD-wallpaper-star-wars-resolution-kamino.jpg",
  ];

  async function obtenerPlaneta() {
    try {
      const response = await fetch("https://www.swapi.tech/api/planets");
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
    obtenerPlaneta();
  }, []);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {lista.map((planeta, index) => {
          return (
            <div key={index} className="col">
              <Link to={`/Planetas/${planeta.uid}`}>
                <div className="card characters-card h-100">
                  <img
                    src={arrayImagenes[index]}
                    alt="..."
                    className="characters-img"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{planeta.name}</h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PlanetsWars;
