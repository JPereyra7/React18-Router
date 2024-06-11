import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
// import { Footer } from "../components/Footer"

export const Layout = () => {
  return (
    <>
    <header>
        <Navbar />
    </header>
    <main className="thingsInTheMiddleContainer">
        <Outlet />
    </main>
    <Footer />
    </>
  )
}