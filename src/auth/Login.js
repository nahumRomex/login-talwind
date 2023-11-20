import * as React from "react";
import Form from "../components/Form";
import fibcam from "../imgenes/fibcamsf.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../credenciales";

function Login({ setAuthState, setUser }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    if (email !== null && password !== null) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setUser(email);
          setAuthState("home");
        })
        .catch((err) => alert(err));
    }
  };

  return (
    <div className=" bg-primary-900 flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className="bg-primary-200	 px-10 py-50 rounded-3xl border-2 border-gray-100">
          <h1 className="text-5xl font-semibold text-center">SIGES </h1>
          <p className="font-medium txt-lg text-gray-500 mt-4 text-center">
            Bienvenido Ingresa tus Datos
          </p>
          <div className="mt-8">
            <div>
              <label className="txt-lg font-medium">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1"
                placeholder="Ingresa tu correo"
              />
            </div>
            <div>
              <label className="txt-lg font-medium">Contraseña</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1"
                placeholder="Ingresa tu contraseña"
                type="password"
              />
            </div>
            <div className="mt-8 flex justify-between items-center">
              <button className=" rounded-md font-medium text-base text-black-50 hover:bg-primary-900">
                Recuperar Contraseña
              </button>
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button
                onClick={handleLogin}
                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-blue-500	 text-white text-lg text-bold"
              >
                Iniciar Sesión{" "}
              </button>
            </div>
            <div className="mt-8 flex justify-center items-center">
              <p className="font-medium text-base">No tienes cuenta?</p>
              <button
                onClick={() => setAuthState("registro")}
                className="text-black text-base font-medium ml-2 hover:bg-primary-900 rounded-sm">
                Regitrate
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-white">
        <img src={fibcam} className="objet-cover w-90 h-90" />
      </div>
    </div>
  );
}

export default Login;
