export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center text-light">
    <div className="container">
      <p className="mb-1">
        © {new Date().getFullYear()} <strong>Star Wars Blog</strong>
      </p>
      <p className="mb-0" style={{ fontSize: "0.9rem" }}>
        <i className="fa fa-fighter-jet text-warning star-icon"></i> Todos los
        derechos reservados. Este blog no es oficial y no está afiliado a
        Lucasfilm o Disney. Es un proyecto personal para compartir.
      </p>
    </div>
  </footer>
);
