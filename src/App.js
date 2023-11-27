import React, { useState } from "react";
import Login from "./auth/Login";
// import {getAuth, onAuthStateChanged} from 'firebase/auth';
import { auth } from "./credenciales";
import { onAuthStateChanged } from "firebase/auth";
import Registro from "./auth/Registro";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Servicios from "./pages/Servicios";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {

  // return <div className='grid grid-cols-6 min-h-screen'>
  //   <Sidebar/></div>

  const [user, setUser] = React.useState(null);
  const [authState, setAuthState] = useState(null);
  React.useEffect(() => {
    const unSuscribeAuth = onAuthStateChanged(
      auth,
      async (authenticaterUser) => {
        if (authenticaterUser) {
          setUser(authenticaterUser.email);
          setAuthState("home");
        } else {
          setUser(null);
          setAuthState("login");
        }
      }
    );
    return unSuscribeAuth;
  }, [user]);

  if (authState === null)
    return <div className="  font-bold  text-center  text-5xl">Cargando...</div>;
  if (authState === "login")
    return <Login setAuthState={setAuthState} setUser={setUser} />;
  if (authState === "registro")
    return <Registro setAuthState={setAuthState} setUser={setUser} />;
  if (user)
    return <Home user={user} setAuthState={setAuthState} setUser={setUser} />;
}

export default App;
