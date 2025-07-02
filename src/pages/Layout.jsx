import { Outlet } from "react-router-dom/dist";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import SideBar from "../components/SideBar";

export const Layout = () => {
  return (
    <ScrollToTop>
      <Navbar />
      <div className="container-fluid px-0">
        <div className="row gx-0">
          {/* Sidebar - visible siempre como columna en pantallas medianas o más */}
          <div className="col-12 col-md-3 bg-black">
            <SideBar />
          </div>

          {/* Contenido principal */}
          <div className="col-12 col-md-9 px-3 py-3">
            <Outlet />
          </div>
        </div>
      </div>

      <Footer />
    </ScrollToTop>
  );
};
