import * as React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../credenciales";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Home({ user, setAuthState, setUser }) {
  const singOutHandler = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setAuthState("login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="grid grid-cols-6 min-h-screen">
        <Sidebar />
        <div>
          <div>
          <button
            onClick={singOutHandler}
            className="w-40 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-blue-500	 text-white text-lg text-bold ">
            Cerrar Sesión
          </button>
          </div>
          <main className="lg:col-span-3 xl:col-span-5 p-8">
            <Header />
          </main>
        </div>
      </div>
    </div>
  );
};