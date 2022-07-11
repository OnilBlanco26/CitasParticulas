import { useState } from "react";
import Particle from "./components/Particle";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoVehiculos from "./components/ListadoPacientes";

function App() {
  return (
    <>
     <Particle />
     
        <Header />
        <div className="md:flex">
        <Formulario />
        <ListadoVehiculos />
        </div>
        
      
    </>
  );
}

export default App;
