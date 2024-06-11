import { useNavigate } from "react-router-dom"

export const PressReleases = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return(
        <>
        <h2>Press Releases</h2>
        <button onClick={handleClick}>Hem</button>
        </>
    )
}