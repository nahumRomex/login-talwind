import * as React from "react";
import { RiLineChartLine, RiFileInfoFill } from "react-icons/ri";
import { signOut } from "firebase/auth";
import { auth } from "../credenciales";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { AiOutlineCheckCircle } from "react-icons/ai";


export default function Home() {
  return (
    <div className="h-screen w-200 h-1000">
      <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
        <Sidebar />
        <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
          <Header />
          <div className="grid grid-cols-2 gap-9 mt-10">
            <div className="bg-primary-900 rounded-xl h-96">
              <h1 className="text-white font-bold text-center text-3xl p-4 flex items-center">
                Pendientes <RiFileInfoFill className="ml-2" />
              </h1>
              
              <div className="bg-white p-2 m-4 rounded-xl h-64">informacion</div>
            </div>
            <div className="bg-primary-900 rounded-xl">
              <h1 className="text-white font-bold text-center text-3xl p-4 flex items-center">
                Finalizados <AiOutlineCheckCircle className="ml-2"/></h1>
                <div className="bg-white p-2 m-4 rounded-xl h-64">informacion</div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
