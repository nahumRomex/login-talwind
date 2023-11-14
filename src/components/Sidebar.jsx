import React from 'react'
import fibcam from '../imgenes/fibcam.jpeg'


const Sidebar = () => {
  return (
    <div className='bg-primary-900 h-full overflow-y-scroll'>
      <div className='flex flex-col justify-center p-8'>
        <img src={fibcam} className='w-40 h-40 object-cover rounded-full ' />
        <h1 className=' text-xl text-white font-bold'>Nahúm Medina </h1>
        <p className=' text-sm text-white font-bold'>administrador </p>
      </div>
    </div>

  )
}

export default Sidebar