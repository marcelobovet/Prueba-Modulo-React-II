import MyContext from "./MyContext";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";


const CardItem = ({ pizza }) => {
  const { addPizzas } = useContext(MyContext);

  const navigate = useNavigate()

  return (
    <div>
      <div className="item" key={pizza.id}>
          <figure>
            <img
              src={pizza.img}
              alt="producto"
            />
          </figure>
          <div className="info-product">
            <h2>{pizza.name}</h2>
            <ul>
              {pizza.ingredients.map((ingredients, i) => (
                <li key={i}>
                  {ingredients}
                </li>
              ))}
            </ul>
            <p className="price"> Precio: ${pizza.price}</p>
            <button 
            onClick={() => addPizzas(pizza.id)} 
            className="btn-add-cart">Añadir al carrito</button>
            <button
              to={`/pizza/${pizza.id}`}
              className="btn-add-cart"
              onClick={() => navigate(`/pizzas/${pizza.id}`)}
            >
              Mas info
            </button>
          </div>
        </div>
    </div>
  );
};


export default CardItem;


