import React from 'react'

const Error = ({children}) => {
  return (
    <div className='p-2 uppercase font-bold text-white rounded-md bg-red-500 text-center '>
        <p>
            {children}
        </p>
    </div>
  )
}

export default Error