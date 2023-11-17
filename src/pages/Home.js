import * as React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../credenciales";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { RiMapPinTimeFill } from "react-icons/ri";

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
        <div className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 mt-10">
          <main>
            <Header />
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
              <div className=" bg-primary-900 p-8 rounded-xl text-white flex flex-col gap-2">
                <RiMapPinTimeFill className="text-3xl"/>
                <h4 className="text-2xl ">Pendientes</h4>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
