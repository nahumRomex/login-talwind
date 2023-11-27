import * as React from "react";
import { RiLineChartLine, RiFileInfoFill } from "react-icons/ri";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Solicitudes from "../components/Solicitudes";
import Calendario from "../components/Calendario";
import Proceso from "../components/Proceso";
import Servicios from "../components/Servicios";

export default function Home() {
  return (
    <BrowserRouter>
      <div className="h-screen w-200 h-1000">
        <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
          <Sidebar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/solicitudes" element={<Solicitudes />} />
            <Route path="/calendario" element={<Calendario/>} />
            <Route path="/proceso" element={<Proceso/>} />
            <Route path="/servicios" element={<Servicios />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

function MainContent() {
  return (
    <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-9 mt-10">
        <div className="bg-primary-900 rounded-xl h-96">
          <h1 className="text-white font-bold text-center text-3xl p-4 flex items-center">
            Pendientes <RiFileInfoFill className="ml-2" />
          </h1>
          <div className="bg-white p-2 m-4 rounded-xl h-3/4">informacion</div>
        </div>
        <div className="bg-primary-900 rounded-xl">
          <h1 className="text-white font-bold text-center text-3xl p-4 flex items-center">
            Finalizados <AiOutlineCheckCircle className="ml-2" />
          </h1>
          <div className="bg-white p-2 m-4 rounded-xl h-3/4">informacion</div>
        </div>
      </div>
    </main>
  );
}
