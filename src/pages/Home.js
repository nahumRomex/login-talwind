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
          <main className="lg:col-span-3 xl:col-span-5 p-8">
            <Header />
          </main>
        </div>
      </div>
    </div>
  );
};