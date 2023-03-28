import MyContext from "./MyContext";

import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react"


const MoreInfo = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const { getPizza, addPizzas } = useContext(MyContext);
  const viewPizza = getPizza(id);

  const regresar = () => {
    navigate("/");
  };

  return (
    <div className="container-info">
      <div className="cardinfo">
        <img className="izquierda" src={viewPizza?.img} alt="CardImage" />
        <aside className="text-center">
          <h1>{viewPizza?.name}</h1>
        </aside>
        <aside>
          {viewPizza?.desc}
        </aside>
        <h5 className="mt-2">
          Ingredientes:
        </h5>
        <ul>
          {viewPizza?.ingredients.map((ingredients, i) => (
            <ol key={i}>
              {ingredients}
            </ol>
          ))}
        </ul>
        <hr></hr>
        <div className="reset">
          <p className="price"> Precio: ${viewPizza?.price}</p>
          <div className="ms-5">
            <button className="btn btn-sm btn-danger ms-5 me-5" onClick={regresar}>
              Regresar
            </button>
            <button className="btn btn-sm btn-primary ms-5 " onClick={() => addPizzas(viewPizza?.id)}>
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreInfo;

