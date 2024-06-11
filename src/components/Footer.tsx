import { NavLink } from "react-router-dom"


export const Footer = () => {
  return (
    <>
        <div className="linksAndRightsContainer">
        <nav className="footerContainerColumn">
        <ul className="footerContainer">
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
        <ul>
            <li>
                <NavLink to={"/career"}>Career</NavLink>
            </li>
            <li>
                <NavLink to={"/media"}>Media</NavLink>
            </li>
            <li>
                <NavLink to={"/press-releases"}>Press Releases</NavLink>
            </li>
            <li>
                <NavLink to={"/corporate-news"}>Corporate News</NavLink>
            </li>
        </ul>
    </nav>
        <p>All Rights Belong to Joel</p>
        </div>
    </>
  )
}
