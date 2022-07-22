import React from "react";
import Pacientes from "./Pacientes";

const ListadoVehiculos = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="text-center text-white text-3xl font-bold">
            Listado Pacientes Clinica
          </h2>
          <p className="text-xl text-white text-center mt-2 mb-5">
            Aqui se muestran los pacientes registrados en la{" "}
            <span className="text-indigo-600 font-bold">Clinica</span>
          </p>

          {pacientes.map((paciente) => {
            return (
              <Pacientes
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            );
          })}
        </>
      ) : (
        <>
          <h2 className="text-center text-white text-3xl font-bold">
            No hay pacientes Agregados
          </h2>
          <p className="text-xl text-white text-center mt-2 mb-5">
            Agrega nuevos paciente y se mostraran{" "}
            <span className="text-indigo-600 font-bold">Aqui</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoVehiculos;
