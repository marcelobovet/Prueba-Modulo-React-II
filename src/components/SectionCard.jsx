import { useContext } from "react";
import MyContext from "./MyContext";
import CardItem from "./CardItem";





const SectionCard = () => {
  const { pizzas } = useContext(MyContext);



  return (
    <>
    <div className="container-cards">
        {pizzas.map((pizza) => (
          <CardItem key={pizza.id} pizza={pizza} />
        ))}
    </div>
    </>
  )
}



export default SectionCard; 
