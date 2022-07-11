import React from 'react'

const Formulario = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-center text-3xl'>
        Formulario Registro Pacientes
      </h2>
      <p className='text-xl text-center mt-2 mb-5'>
        Registra tus pacientes y {' '}
        <span className='font-bold text-orange-400'>
          Administralos
        </span>
      </p>
    </div>
  )
}

export default Formulario
