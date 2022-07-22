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

      <div className="mt-10 flex justify-between">
        <button className="bg-blue-500 hover:bg-blue-300 text-white py-2 px-10 rounded-md font-bold shadow-md shadow-blue-500 transition-all duration-500">
            Editar
        </button>
        <button className="bg-red-500 hover:bg-red-300 text-white py-2 px-10 rounded-md font-bold shadow-md shadow-red-500 transition-all duration-500">
            Eliminar
        </button>
      </div>
    </div>
  );
};

export default Pacientes;
