import * as React from "react";
import { RiLineChartLine } from "react-icons/ri";
import { signOut } from "firebase/auth";
import { auth } from "../credenciales";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="h-screen w-200 h-1000"> {/* Ajusta la altura del contenedor principal */}
      <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
        <Sidebar />
        <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
          <Header />
          <section className=" mt-10 gap-8 h-full"> {/* Ajusta la altura de la sección */}
            <div className="bg-primary-900 p-8 rounded-xl text-gray-300 flex flex-col gap-6 h-full"> {/* Ajusta la altura del elemento interno */}
             {/* aqui debajo va todo lo de la primera tarjeta de pendientes de la app  */}
            </div>

            {/* Agrega más elementos aquí según sea necesario */}
          </section>
        </main>
      </div>
    </div>
  );
}
