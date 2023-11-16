import React, {useState} from 'react'
import userimg from '../imgenes/user.jpg'
// iconos
import {
  RiHome2Line,
  RiArchiveDrawerFill,
  RiCalendar2Fill,
  RiCustomerService2Fill,
  RiFolderSettingsFill,
  RiMenu3Fill,
  RiCloseFill
} from "react-icons/ri";


const Sidebar = () => {
  const [showMenu, setshowMenu]= useState(false);
  return (
    <>
      <div className={`bg-primary-900 h-full fixed lg:static w-[80%] md:[40%] lg:w-full transitoin-all duration-300 ${showMenu ? "left-0 " : "-left-full"}`}>
        {/* perfil */}
        <div className='flex items-center flex-col justify-center p-8 gap-2 h-[30vh]'>
          <img src={userimg} className='w-20 h-20 object-cover rounded-full ' />
          <h1 className=' text-xl text-white font-bold'>Nahúm Medina </h1>
          <p className=' bg-primary-100 py-1 px-3 text-black  text-center rounded-full'>
            Administrador
          </p>
        </div>

        {/* nav  */}
        <div className=' bg-primary-200 p-8 rounded-tr-[100px] h-[70vh]  flex flex-col justify-between gap-6'>
          <nav className='flex flex-col gap-8'>
            <a href='#' className='flex items-center gap-4 text-black py-2 px-4 rounded-xl hover:bg-primary-900/50
            transition-colors'>
              <RiHome2Line /> Home
            </a>
            <a href='#' className='flex items-center gap-4 text-black py-2 px-4 rounded-xl hover:bg-primary-900/50
            transition-colors'>
              <RiArchiveDrawerFill /> Solicitudes
            </a>
            <a href='#' className='flex items-center gap-4 text-black py-2 px-4 rounded-xl hover:bg-primary-900/50
            transition-colors'>
              <RiCalendar2Fill /> Calendario
            </a>
            <a href='#' className='flex items-center gap-4 text-black py-2 px-4 rounded-xl hover:bg-primary-900/50
            transition-colors'>
              <RiFolderSettingsFill /> Procesos
            </a>
            <a href='#' className='flex items-center gap-4 text-black py-2 px-4 rounded-xl hover:bg-primary-900/50
            transition-colors'>
              <RiCustomerService2Fill /> Servicios
            </a>
          </nav>

        </div>

      </div>
      {/* boton mobile */}

      <button onClick={()=> setshowMenu(!showMenu)}
      className=' lg:hidden fixed  right-4 bottom-4 text-2xl bg-primary-900 p-2.5 rounded-full text-white'>
        {showMenu ? <RiCloseFill/> : <RiMenu3Fill/>}
      </button>
    </>
  )
}

export default Sidebar