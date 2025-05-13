import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { misFavoritos } from "../store";


const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();
	return (

		<nav id="navbarBack" className="navbar navbar-dark bg-black">
			<div className="container">
				<Link to="/">
					<img id="warsLogo" src="https://brandemia.org/contenido/subidas/2021/05/portada-starwars-imagenes-brandemia-blog-1000x670.jpg" />
				</Link>
				<div id="HeaderTextBlog">
					<p>STAR WARS BLOG</p>
				</div>
				<div className="ml-auto">
						<div className="dropdown">
							<button className="btnFav btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
								<i class="fa-solid fa-star"><p>Favoritos</p></i>
							</button>
							<ul id="DropDownFavs"className="dropdown-menu" aria-labelledby="dropdownMenu2">
								{store.favoritos.map((item, index) => (
									<li>{item}<button onClick={() => misFavoritos(dispatch,item,store) } className="dropdown-item" type="button"><i class="fa-solid fa-delete-left"></i></button></li>
									
								))}
							</ul>
						</div>
				</div>
			</div>
		</nav>

	);
};

export default Navbar;