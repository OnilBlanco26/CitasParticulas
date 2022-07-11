import { useState } from "react";
import Particle from "./components/Particle";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoVehiculos from "./components/ListadoVehiculos";

function App() {
  return (
    <>
     <Particle />
     
        <Header />
        <Formulario />
        <ListadoVehiculos />
        
      
    </>
  );
}

export default App;
