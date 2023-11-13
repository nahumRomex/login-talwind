import * as React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../credenciales'

export default function Home({
  user,
  setAuthState,
  setUser
}) {
  const singOutHandler = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setAuthState('login');
      })
      .catch((err) => console.log(err));
  }



  return (
    <div className=' flex xlex-col items-center text-5xl  font-bold  text-center'>
      pantalla Home
      <p></p>
      {user}
      <p></p>
      <button
           onClick={singOutHandler}
      className='w-40 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-blue-500	 text-white text-lg text-bold'>
      Cerrar Sesión </button>

    </div>
  )
}

