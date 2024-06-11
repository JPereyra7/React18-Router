import { useNavigate } from "react-router-dom"

export const Media = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return(
        <>
        <h2>Media</h2>
        <button onClick={handleClick}>Hem</button>
        </>
    )
}