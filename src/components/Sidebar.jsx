import React from 'react'
import userimg from '../imgenes/user.jpg'
// iconos
import {RiHome2Line } from "react-icons/ri";


const Sidebar = () => {
  return (
    <div className='bg-primary-900 h-full'>
      {/* perfil */}
      <div className='flex items-center flex-col justify-center p-8 gap-2 h-[30vh]'>
        <img src={userimg} className='w-20 h-20 object-cover rounded-full ' />
        <h1 className=' text-xl text-white font-bold'>Nahúm Medina </h1>
        <p className=' bg-primary-100 py-1 px-3 text-black  text-center rounded-full'>
          Administrador
          </p>
      </div>
      
      {/* nav  */}
      <div className=' bg-primary-200 p-8 rounded-tr-[100px] h-[70vh] overflow-y-scroll flex flex-col justify-between'>
      <nav>
<a href='#' className='flex items-center gap-4 text-black py-2 px-4 rounded-xl hover:bg-primary-900/50
 transition-colors'>
<RiHome2Line/> Home
</a>
      </nav>
<div>
<button
        className='w-40 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-blue-500	 text-white text-lg text-bold
        '>
        Cerrar Sesión
        </button>
</div>
      </div>

    </div>

  )
}

export default Sidebar