import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [mascota, setMascota] = useState("");
  const [propietario, setPropietario] = useState("");
  const [correo, setCorreo] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setMascota(paciente.mascota);
      setPropietario(paciente.propietario);
      setCorreo(paciente.correo);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).slice(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([mascota, propietario, correo, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    //Objeto nuevo Paciente
    const nuevoPaciente = {
      mascota,
      propietario,
      correo,
      fecha,
      sintomas,
    };
    //Agregar el nuevo paciente al state
    setPacientes([...pacientes, nuevoPaciente]);

    //Limpiar el formulario
    setMascota("");
    setPropietario("");
    setCorreo("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="text-white text-3xl text-center font-bold">
        Formulario Registro Pacientes
      </h2>
      <p className="text-xl text-white text-center mt-2 mb-5">
        Registra tus pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white py-10 px-5 rounded-md mx-2 shadow-lg shadow-white mb-5"
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
        <div className="mb-5">
          <label htmlFor="mascota" className="block font-bold text-indigo-600">
            Nombre Mascota:
          </label>
          <input
            type="text"
            id="mascota"
            placeholder="Escribe el nombre de la mascota"
            className="w-full border-gray-500 border-2 p-2 rounded-md font-mono"
            value={mascota}
            onChange={(e) => setMascota(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block font-bold text-indigo-600"
          >
            Nombre Propietario:
          </label>
          <input
            type="text"
            id="propietario"
            placeholder="Escribe el nombre del propietario"
            className="w-full border-gray-500 border-2 p-2 rounded-md font-mono"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block font-bold text-indigo-600">
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Contacto del propietario"
            className="w-full border-gray-500 border-2 p-2 rounded-md font-mono"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="fecha" className="block font-bold text-indigo-600">
            Fecha Ingreso
          </label>
          <input
            type="date"
            id="fecha"
            className="w-full border-gray-500 border-2 p-2 rounded-md font-mono"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block font-bold text-indigo-600">
            Sintomas
          </label>
          <textarea
            type="text"
            id="sintomas"
            placeholder="Especifique los sintomas del paciente"
            className="w-full border-gray-500 border-2 p-2 rounded-md font-mono"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value="Registrar Paciente"
          className="w-full bg-indigo-600 p-2 text-white uppercase rounded-md font-bold mt-5 shadow-md shadow-indigo-400 hover:bg-indigo-800 transition-all duration-500 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Formulario;
