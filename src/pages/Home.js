import * as React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../credenciales'
import Sidebar from '../components/Sidebar';


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
    <div className='grid grid-cols-6 min-h-screen'>
        <Sidebar/>
      

    </div>


  )
}

