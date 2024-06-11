import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
        <nav>
        <ul className="headerContainer">
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/products"}>Products</NavLink>
            </li>
            <li>
                <NavLink to={"/about"}>About us</NavLink>
            </li>
            <li>
                <NavLink to={"/contact"}>Contact</NavLink>
            </li>
        </ul>
    </nav>
    </>
  )
}
