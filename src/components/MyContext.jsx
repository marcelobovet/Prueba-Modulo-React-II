import { createContext, useEffect, useState } from "react";

const MyContext = createContext();


const ContextProvider = ({ children }) => {
    const [total, setTotal] = useState(0)
    const [cart, setCart] = useState([])
    const [pizzas, setPizzas] = useState([])
    

    const getPizzas = async () => {
        const res = await fetch('http://localhost:3000/pizzas.json')
        const pizzas = await res.json();
        setPizzas(pizzas);
    } 

    const getPizza = (id) =>  {
        return pizzas.find((pizza) => pizza.id === id)
    };

    const calculateTotal = () => {
        let total = 0;
        cart.forEach((item) => (total += item.price * item.count));
        setTotal(total);
    };

    const addPizzas = (pizzaId) => {
        let laPizza = cart.find((pizza) => pizza.id === pizzaId);
        console.log(laPizza + "log de laPizza")
        console.log(cart + "log del cart")
        if (laPizza) {
            laPizza.count += 1;
            setCart([...cart]);
        } else {
            laPizza = pizzas.find((pizza) => pizza.id === pizzaId);
            laPizza.count = 1;
            setCart([...cart, laPizza]);
        }
    };

    const removePizzas = (pizzaId) => {
        let laPizza = cart.find((pizza) => pizza.id === pizzaId);

        if (laPizza.count === 1) {
            setCart(cart.filter((pizza) => pizza.id /= pizzaId));
        } else {
            laPizza.count -= 1;
            setCart([...cart]);
        }
    };

    useEffect(() => {
        getPizzas();
    }, []);

    useEffect(() => {
        calculateTotal();
    }, [cart]);

    return(
        <MyContext.Provider 
        value={{
            total, 
            setTotal, 
            cart, 
            setCart, 
            pizzas, 
            setPizzas, 
            addPizzas,
            getPizza,
            removePizzas
        }}>
            {children}
        </MyContext.Provider>
        )
}


export { ContextProvider };

export default MyContext;