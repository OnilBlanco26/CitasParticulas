import React from "react";

const Pacientes = ({ paciente }) => {
  const { mascota, propietario, correo, fecha, sintomas } = paciente;

  return (
    <div className="bg-white py-10 px-5 rounded-md shadow-lg shadow-white mr-2 mb-4">
      <p className="font-bold uppercase mb-3">
        Nombre: <span className="font-normal normal-case mb-3">{mascota}</span>
      </p>
      <p className="font-bold uppercase mb-3">
        Propietario:{" "}
        <span className="font-normal normal-case mb-3">{propietario}</span>
      </p>
      <p className="font-bold uppercase mb-3">
        Correo: <span className="font-normal normal-case mb-3">{correo}</span>
      </p>
      <p className="font-bold uppercase mb-3">
        Fecha Ingreso:{" "}
        <span className="font-normal normal-case mb-3">{fecha}</span>
      </p>
      <p className="font-bold uppercase">
        Sintomas:{" "}
        <span className="font-normal normal-case mb-3">{sintomas}</span>
      </p>
    </div>
  );
};

export default Pacientes;
