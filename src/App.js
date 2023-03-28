import Header from "./components/Header";
import SectionCard from "./components/SectionCard";
import MoreInfo from "./components/MoreInfo.jsx"
import Carro from "./components/Carro"
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./components/MyContext";


function App() {



  return (
    <div className="App">


      <BrowserRouter>
        <ContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<SectionCard />} />
            <Route path="/pizzas/">
              <Route path=":id" element={<MoreInfo />} />
            </Route>
            <Route path="/Cart" element={<Carro />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>


    </div>
  );
}

export default App;
