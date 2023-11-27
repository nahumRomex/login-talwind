import React from 'react';
import redes from '../imgenes/redes.jpg';
import install from '../imgenes/intalacion.jpg';
import fibra from '../imgenes/iStock-664370252.jpg';

const Servicios = () => {
  return (
    <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-9 mt-10">
        <div className="bg-primary-900 rounded-xl h-96 flex items-center justify-center">
          <h1 className="text-white font-bold text-center text-3xl p-4">
            Instalación
          </h1>
          <img src={redes} className="mx-auto" alt="Redes" />
        </div>
        <div className="bg-primary-900 rounded-xl flex items-center justify-center">
          <h1 className="text-white font-bold text-center text-3xl p-4">
            Finalizados
          </h1>
          <div className="text-center">
            <img src={install} className="mx-auto" alt="Instalación" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Servicios;
