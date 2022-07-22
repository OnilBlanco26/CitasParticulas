import { useState } from "react";
import Particle from "./components/Particle";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoVehiculos from "./components/ListadoVehiculos";

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

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
        paciente={paciente}
        setPaciente={setPaciente}
        />
        <ListadoVehiculos 
        pacientes={pacientes}
        setPaciente = {setPaciente}
        />
      </div>
    </>
  );
}

export default App;
