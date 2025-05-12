import { Link } from "react-router-dom";

const Navbar = () => {

	return (

		<nav id="navbarBack" className="navbar navbar-dark bg-black">
			<div className="container">
				<Link to="/">
					<img id="warsLogo" src="https://brandemia.org/contenido/subidas/2021/05/portada-starwars-imagenes-brandemia-blog-1000x670.jpg"/>
				</Link>
				<div id="HeaderTextBlog">
					<p>STAR WARS BLOG</p>
				</div>
				<div className="ml-auto">
					<Link to="/demo">
						<div className="dropdown">
							<button className="btnFav btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
								<i class="fa-solid fa-star"><p>Favoritos</p></i>
							</button>
							<ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
								<li><button className="dropdown-item" type="button">Action</button></li>
								<li><button className="dropdown-item" type="button">Another action</button></li>
								<li><button className="dropdown-item" type="button">Something else here</button></li>
							</ul>
						</div>
					</Link>
				</div>
			</div>
		</nav>

	);
};

export default Navbar;