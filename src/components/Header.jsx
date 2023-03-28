import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MyContext from "./MyContext";

import { NavLink } from "react-router-dom";
import { useContext } from 'react';




export default function Header() {
  const { total } = useContext(MyContext);

  const setActivo = ({ isActive }) => (isActive ? 'active' : undefined)

  return (

    <>
      <Navbar bg="dark" variant="dark">
        <Container className="barra">
          <Nav className="contenedorcito">
            <Nav.Link className="position-absolute top-0 start-0">
              <NavLink to="/" className={`text-white text-decoration-none ${setActivo}`} >
                <div>
                  <div className="position-absolute top-0 start-0 ms-5 mt-3 links">
                    Mamma Mia!
                  </div>
                </div>
              </NavLink>
            </Nav.Link>
            <Nav.Link className="position-absolute top-0 end-0">
              <NavLink to="/Cart" className={`text-danger text-decoration-none ${setActivo}`}>
                <div className="colorTitle links">
                <div className="position-absolute top-0 end-0 me-5 mt-3">
                    Carrito $ {total}
                  </div>
                </div>
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="title">
        <h1>¡Pizzeria Mamma Mia!</h1>
        <p>¡Tenemos las mejores pizzas que puedes encontrar!</p>
      </div>
    </>

  )
}

