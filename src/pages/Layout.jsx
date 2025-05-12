import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import Navbar from "../components/Navbar"
import { Footer } from "../components/Footer"
import SideBar from "../components/SideBar"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <ScrollToTop>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <SideBar />
                    </div>
                    <div className="col-md-9">
                        <Outlet />

                    </div>
                </div>
            </div>
            <Footer />
        </ScrollToTop>
    )
}