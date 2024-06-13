import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface IData {
  name: string;
  description: string;
  price: number;
  year: number;
  imageUrl: string;
}

export const Products = () => {
  const [products, setProducts] = useState<IData[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get<IData[]>(
          "http://medieinstitutet-wie-products.azurewebsites.net/api/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <h2>Produkter:</h2>
      <button onClick={handleClick}>Hem</button>
      <ul className="flexContainer">
        {products.map((products, index) => (
          <li key={index}>
            <h2 className="fontText">{products.name}</h2>
            <img
              src={products.imageUrl}
              alt={products.name}
              className="imageContainer"
            />
          </li>
        ))}
      </ul>
    </>
  );
};
