import React, {useState} from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../credenciales";
import userimg from '../imgenes/user.jpg';
import Servicios from '../pages/Servicios';
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


export default function Sidebar ({ user, setAuthState, setUser }) {
    const singOutHandler = () => {
      signOut(auth)
        .then(() => {
          setUser(null);
          setAuthState("login");
        })
        .catch((err) => console.log(err));
    };


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
            transition-colors hover:underline'>
              <RiHome2Line /> Home
            </a>
            <a href='#' className='flex items-center gap-4 text-black py-2 px-4 rounded-xl hover:bg-primary-900/50
            transition-colors hover:underline'>
              <RiArchiveDrawerFill /> Solicitudes
            </a>
            <a href='#' className='flex items-center gap-4 text-black py-2 px-4 rounded-xl hover:bg-primary-900/50
            transition-colors hover:underline'>
              <RiCalendar2Fill /> Calendario
            </a>
            <a href='#' className='flex items-center gap-4 text-black py-2 px-4 rounded-xl hover:bg-primary-900/50
            transition-colors hover:underline'>
              <RiFolderSettingsFill /> Procesos
            </a>
            <a href= "" className='flex items-center gap-4 text-black py-2 px-4 rounded-xl hover:bg-primary-900/50
            transition-colors hover:underline'>
              <RiCustomerService2Fill /> Servicios
            </a>
          </nav>
          <div>
          <button
            onClick={singOutHandler}
            className="w-40 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-1 rounded-xl bg-blue-500	 text-white text-lg text-bold ">
            Cerrar Sesión
          </button>
          </div>
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