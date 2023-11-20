import * as React from "react";
import { auth } from "../credenciales";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Registro({ setAuthState, setUser }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSingUpHandle = () => {
    if (email !== null && password !== null) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          setUser(user.user.email);
          setAuthState("home");
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-primary-200	 px-10 py-50 rounded-3xl border-2 border-gray-100">
        <h1 className="text-5xl font-semibold text-center">Registrate</h1>
        <p className="font-medium text-lg text-gray-500 mt-4 text-center">
          Bienvenido Ingresa tus Datos
        </p>
        <div className="mt-8">
          <div>
            <label className="text-lg font-medium">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 "
              placeholder="Ingresa tu correo"
            />
          </div>
          <div>
            <label className="text-lg font-medium">Contraseña</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1"
              placeholder="Ingresa tu contraseña"
              type="password"
            />
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            <button
              onClick={onSingUpHandle}
              className="my-8 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-blue-500	 text-white text-lg text-bold"
            >
              Registrar{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
