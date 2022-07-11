import React from 'react'

const ListadoVehiculos = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5'>
      <h2 className='text-center font-black text-3xl'>
        Listado Pacientes 
      </h2>
      <p className='text-center text-xl mt-2 mb-5'>
        Aqui se muestra el listado de pacientes{' '}
        <span className='font-bold text-orange-400'>
          Registrados
        </span>
      </p>

      <div className='bg-orange-400 opacity-80 py-10 px-5 rounded-md mx-2 mb-5 shadow-orange-500 shadow-lg'>
        <p className='font-black uppercase mb-3'>
          Nombre:{' '}
          <span className='font-bold normal-case text-white'>
              Bingo
          </span>
        </p>

        <p className='font-black uppercase mb-3'>
          Propietario:{' '}
          <span className='font-bold normal-case text-white'>
              Onil Blanco
          </span>
        </p>

        <p className='font-black uppercase mb-3'>
          Email:{' '}
          <span className='font-bold normal-case text-white'>
              correo@correo.com
          </span>
        </p>

        <p className='font-black uppercase mb-3'>
          Fecha Ingreso:{' '}
          <span className='font-bold normal-case text-white'>
              22/10/2022
          </span>
        </p>

        <p className='font-black uppercase mb-3'>
          Sintomas:{' '}
          <span className='font-bold normal-case text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam dignissimos in et nemo accusantium omnis cumque deleniti officia ullam tempora perspiciatis repellendus velit vero amet non, cupiditate nesciunt nihil.
          </span>
        </p>




      </div>
    </div>
  )
}

export default ListadoVehiculos
