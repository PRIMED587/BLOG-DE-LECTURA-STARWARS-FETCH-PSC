import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { misFavoritos } from "../store";

const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();

	return (
		<nav id="navbarBack" className="navbar navbar-dark bg-black">
			<div className="container d-flex justify-content-between align-items-center flex-wrap">
				<div className="order-1 order-md-0 col-12 col-md-auto d-flex justify-content-center justify-content-md-start mb-2 mb-md-0">
					<Link to="/">
						<img
							id="warsLogo"
							src="https://brandemia.org/contenido/subidas/2021/05/portada-starwars-imagenes-brandemia-blog-1000x670.jpg"
							alt="Star Wars Logo"
							className="logo-navbar"
						/>
					</Link>
				</div>

				<div id="HeaderTextBlog" className="text-white fw-bold text-center col-12 col-md">
					<p className="m-0">BLOG</p>
				</div>

				<div className="ml-auto order-2 col-12 col-md-auto d-flex justify-content-center justify-content-md-end mt-2 mt-md-0">
					<div className="dropdown">
						<button className="btnFav btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
							<i className="fa-solid fa-star"></i> <span className="ms-1">Favoritos</span>
						</button>
						<ul id="DropDownFavs" className="dropdown-menu" aria-labelledby="dropdownMenu2">
							{store.favoritos.map((item, index) => (
								<li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
									{item}
									<button
										onClick={() => misFavoritos(dispatch, item, store)}
										className="btnFav btn btn-dark dropdown-toggle text-warning"
									>
										<i className="fa-solid fa-star me-2"></i>Favoritos

									</button>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
