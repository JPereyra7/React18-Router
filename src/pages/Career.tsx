import { useNavigate } from "react-router-dom"

export const Career = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return(
        <>
        <h2>Career Page</h2>
        <button onClick={handleClick}>Hem</button>
        </>
    )
}