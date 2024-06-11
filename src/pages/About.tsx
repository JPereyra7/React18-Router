import { useNavigate } from "react-router-dom"

export const About = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return(
        <>
        <h2>About Page</h2>
        <button onClick={handleClick}>Hem</button>
        </>
    )
}
