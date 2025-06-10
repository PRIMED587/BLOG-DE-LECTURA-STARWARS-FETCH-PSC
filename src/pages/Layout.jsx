// Layout.jsx (actualizado para mejor responsividad)
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import SideBar from "../components/SideBar";

export const Layout = () => {
    return (
        <ScrollToTop>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-3 mb-3">
                        <SideBar />
                    </div>
                    <div className="col-12 col-md-9">
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer />
        </ScrollToTop>
    );
};