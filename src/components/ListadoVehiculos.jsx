import React from 'react'

const ListadoVehiculos = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5'>
      <h2 className='text-center text-white text-3xl font-bold'>
        Listado Pacientes Clinica
      </h2>
      <p className='text-xl text-white text-center mt-2 mb-5'>
        Aqui se muestran los pacientes registrados en la{' '}
        <span className='text-indigo-600 font-bold'>
          Clinica
        </span>
      </p>

      <div className='bg-white py-10 px-5 rounded-md shadow-lg shadow-white mr-2'>
        <p className='font-bold uppercase mb-3'>
          Nombre:{' '}
          <span className='font-normal normal-case mb-3'>
            Thor
          </span>
        </p>
        <p className='font-bold uppercase mb-3'>
          Propietario:{' '}
          <span className='font-normal normal-case mb-3'>
            Fulanito
          </span>
        </p>
        <p className='font-bold uppercase mb-3'>
          Correo:{' '}
          <span className='font-normal normal-case mb-3'>
            correo@correo.com
          </span>
        </p>
        <p className='font-bold uppercase mb-3'>
          Fecha Ingreso:{' '}
          <span className='font-normal normal-case mb-3'>
            2/10/2022
          </span>
        </p>
        <p className='font-bold uppercase'>
          Sintomas:{' '}
          <span className='font-normal normal-case mb-3'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Cupiditate autem ab quod nulla labore id mollitia sit delectus minus. Repellendus eum perspiciatis perferendis recusandae cumque in odit consequatur voluptas minus.
          </span>
        </p>
      </div>
    </div>
  )
}

export default ListadoVehiculos
