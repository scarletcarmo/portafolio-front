import { Outlet } from "react-router-dom"
import HamburgerMenu from "../components/HamburgerMenu"
import Footer from "../components/Footer"

const RootLayout = () => {
    return (
        <div>
            <HamburgerMenu />
            <div style={{ paddingTop: "80px" }}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default RootLayout
