import React from 'react'

const Error = ({children}) => {
  return (
    <div className='bg-red-500 p-2 text-center mb-5 text-white uppercase text-xl font-mono shadow-md shadow-red-500 rounded-md'>
      <p>
        {children}
      </p>
    </div>
  )
}

export default Error
