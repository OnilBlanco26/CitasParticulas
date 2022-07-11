import Pacientes from './Pacientes'

const ListadoPacientes = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5'>
      <h2 className='text-center font-black text-3xl text-white'>
        Listado Pacientes 
      </h2>
      <p className='text-center text-xl mt-2 mb-5 text-white'>
        Aqui se muestra el listado de pacientes{' '}
        <span className='font-bold text-orange-400'>
          Registrados
        </span>
      </p>

      <Pacientes />
      <Pacientes />
      <Pacientes />
      <Pacientes />
      
    </div>
  )
}

export default ListadoPacientes
