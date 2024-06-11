import { useNavigate } from "react-router-dom";

export const Products = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return(
        <>
        <h2>Produkter:</h2>
        <button onClick={handleClick}>Hem</button>
        </>
    )
}