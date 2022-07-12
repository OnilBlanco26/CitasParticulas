import {useState, useEffect} from 'react'
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente}) => {

  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  useEffect( () => {
    if(Object.keys(paciente).length > 0 ) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const generarId = () => {
    const ramdom = Math.random().toString(36).slice(2);
    const fecha = Date.now.toString(36);

    return ramdom + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if([nombre, propietario, email, fecha, sintomas].includes('')){
      setError(true)
      return
    }

    setError(false)

    //Limpiar el formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')

    //Objeto de pacientes

    const nuevoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      id: generarId()
    }

    //Agregar el nuevo paciente al state
    setPacientes([...pacientes, nuevoPaciente])


  }



  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-center text-3xl text-white'>
        Formulario Registro Pacientes
      </h2>
      <p className='text-xl text-center mt-2 mb-5 text-white'>
        Registra tus pacientes y {' '}
        <span className='font-bold text-orange-400'>
          Administralos
        </span>
      </p>

      <form action="" className='bg-orange-400 opacity-80 py-10 px-5 rounded-md mx-2 mb-5 shadow-orange-500 shadow-lg' onSubmit={handleSubmit}>
        {error && 
        <Error>
          <p>
            Todos los campos son obligatorios
          </p>
        </Error>}  
        
        <div className='mb-5 opacity-100'>
          <label htmlFor="mascota" className='font-bold text-black'>
            Nombre Mascota:
          </label>
          <input 
          id='mascota'
          type="text"
          placeholder='Escribe el nombre de tu mascota'
          className='placeholder-black border-4 border-double border-blue-800 w-full p-2 rounded-md hover:border-orange-400 transition-all'
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          />
        </div>

        <div className='mb-5 opacity-100'>
          <label htmlFor="Propietario" className='font-bold text-black'>
            Nombre Propietario:
          </label>
          <input 
          id='propietario'
          type="text"
          placeholder='Escribe el nombre de tu mascota'
          className='placeholder-black border-4 border-double border-blue-800 w-full p-2 rounded-md hover:border-orange-400 transition-all'
          value={propietario}
          onChange={e => setPropietario(e.target.value)}
          />
        </div>

        <div className='mb-5 opacity-100'>
          <label htmlFor="email" className='font-bold text-black'>
            Email:
          </label>
          <input 
          id='email'
          type="email"
          placeholder='Escribe el contacto del propietario'
          className='placeholder-black border-4 border-double border-blue-800 w-full p-2 rounded-md hover:border-orange-400 transition-all'
          value={email}
          onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-5 opacity-100'>
          <label htmlFor="fecha" className='font-bold text-black'>
            Fecha Ingreso:
          </label>
          <input 
          id='fecha'
          type="date"
          className='placeholder-black border-4 border-double border-blue-800 w-full p-2 rounded-md hover:border-orange-400 transition-all'
          value={fecha}
          onChange={e => setFecha(e.target.value)}
          />
        </div>

        <div className='mb-5 opacity-100'>
          <label htmlFor="sintomas" className='font-bold text-black'>
            Sintomas:
          </label>
          <textarea 
          id='sintomas'
          type="text"
          placeholder='Especifique los sintomas'
          className='placeholder-black border-4 border-double border-blue-800 w-full p-2 rounded-md hover:border-orange-400 transition-all'
          value={sintomas}
          onChange={e => setSintomas(e.target.value)}
          />
        </div>

        <input type="submit" 
        value='Registrar Mascota'
        className='p-2 uppercase font-bold text-white bg-blue-800 rounded-md hover:bg-blue-500 transition-all cursor-pointer w-full shadow-blue-500 shadow-lg'
        />
      </form>


    </div>
  )
}

export default Formulario
