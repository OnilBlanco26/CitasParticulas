import React from 'react'
import Pacientes from './Pacientes'

const ListadoVehiculos = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll'>
      <h2 className='text-center text-white text-3xl font-bold'>
        Listado Pacientes Clinica
      </h2>
      <p className='text-xl text-white text-center mt-2 mb-5'>
        Aqui se muestran los pacientes registrados en la{' '}
        <span className='text-indigo-600 font-bold'>
          Clinica
        </span>
      </p>

      <Pacientes />
      <Pacientes />
      <Pacientes />
      <Pacientes />
      <Pacientes />
    
    </div>
  )
}

export default ListadoVehiculos
