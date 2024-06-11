import { useNavigate } from "react-router-dom";

export const Contact = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return(
        <>
        <h2>Contact us</h2>
        <button onClick={handleClick}>Hem</button>
        </>
    )
}