import { useState } from "react";
import Particle from "./components/Particle";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoVehiculos from "./components/ListadoVehiculos";

function App() {

  const [pacientes, setPacientes] = useState([]);

  return (
    <>
      <Particle />

      <div className="mt-10">
        <Header />
      </div>
      <div className="mt-10 md:flex">
        <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}
        />
        <ListadoVehiculos 
        pacientes={pacientes}
        />
      </div>
    </>
  );
}

export default App;
