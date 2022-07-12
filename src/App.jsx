import { useState } from "react";
import Particle from "./components/Particle";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {

  const [pacientes, setPacientes] = useState([]);

  return (
    <>
     <Particle />
     
        <Header />
        <div className="md:flex">
        <Formulario
        pacientes = {pacientes}
        setPacientes = {setPacientes}
        />
        <ListadoPacientes
        pacientes = {pacientes}
        />
        </div>
        
      
    </>
  );
}

export default App;
