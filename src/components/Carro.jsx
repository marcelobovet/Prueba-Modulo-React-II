import { useContext } from "react"
import MyContext from "./MyContext";




const Carro = () => {

  const { cart, addPizzas, removePizzas } = useContext(MyContext);
  console.log(cart)
  return (

    <div className="container">
      {cart.map((pizza) => (
        <div className="row rounded border my-3 p-2">
          <div className="col-6 text-uppercase "> {pizza.name} </div>
          <div className="col-2 text-center">
            {pizza.count}
            <button
              className="btn btn-sm btn-danger mx-2"
              onClick={() => addPizzas(pizza.id)}
            >
              +
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => removePizzas(pizza.id)}
            >
              -
            </button>
          </div>
          <div className="col-4 text-end">
            ${pizza.price} / ${pizza.count * pizza.price}
          </div>
        </div>
      ))}

    </div>
  )
}

export default Carro;