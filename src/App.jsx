import { useState } from "react";
import Particle from "./components/Particle";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoVehiculos from "./components/ListadoVehiculos";

function App() {
  return (
    <>
      <Particle />

      <div className="mt-10">
        <Header />
      </div>
      <div className="mt-10 md:flex">
        <Formulario />
        <ListadoVehiculos />
      </div>
    </>
  );
}

export default App;
