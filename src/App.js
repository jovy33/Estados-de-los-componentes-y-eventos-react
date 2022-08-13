import React from "react"
import Input from "./components/Input";
import Boton from "./components/Boton";
import { useState } from "react";

function App() {

  // Estados del Imput
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1> Desafío Estado de los componentes y eventos </h1>
      <div className="formulario">
        <Input
          parametroNombre={nombre}
          parametroSetNombre={setNombre}
          parametroPassword={password}
          parametroSetPassword={setPassword}
        />
        {nombre != "" && password === "252525" && <Boton />}
      </div>
    </div>
  );
}

export default App;
