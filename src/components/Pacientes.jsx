import React from 'react'

const Pacientes = ({paciente, setPaciente

}) => {

  const {nombre, propietario, email, fecha, sintomas} = paciente;

  return (
    <div className='bg-orange-400 opacity-80 py-10 px-5 rounded-md mx-2 mb-5 shadow-orange-500 shadow-lg'>
    <p className='font-black uppercase mb-3'>
      Nombre:{' '}
      <span className='font-bold normal-case text-white'>
          {nombre}
      </span>
    </p>

    <p className='font-black uppercase mb-3'>
      Propietario:{' '}
      <span className='font-bold normal-case text-white'>
          {propietario}
      </span>
    </p>

    <p className='font-black uppercase mb-3'>
      Email:{' '}
      <span className='font-bold normal-case text-white'>
          {email}
      </span>
    </p>

    <p className='font-black uppercase mb-3'>
      Fecha Ingreso:{' '}
      <span className='font-bold normal-case text-white'>
          {fecha}
      </span>
    </p>

    <p className='font-black uppercase mb-3'>
      Sintomas:{' '}
      <span className='font-bold normal-case text-white'>
          {sintomas}
      </span>
    </p>

    <div className='mt-10 flex justify-between'>
    <button 
    type='button'
    className='bg-blue-800  py-3 px-10 rounded-md mx-2 mb-5 shadow-blue-500 shadow-lg upppercase font-bold text-white hover:bg-blue-400 cursor-pointer transition-all'
    onClick={() => setPaciente(paciente)}
    >
      Editar
    </button>

    <button
    className='bg-red-800  py-3 px-10 rounded-md mx-2 mb-5 shadow-red-500 shadow-lg upppercase font-bold text-white hover:bg-red-400 cursor-pointer transition-all'
    >
      Eliminar
    </button>
    </div>



  </div>
  )
}

export default Pacientes
