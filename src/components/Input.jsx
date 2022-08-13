import React from "react";

const Input = ({ parametroNombre, parametroSetNombre, parametroPassword, parametroSetPassword }) => {

    return (
        <form>
            <div>
                <label> Nombre </label>
                <input
                    type="texto"
                    class="form-control"
                    name="nombre"
                    placeholder="Ingrese su nombre"
                    onChange={(e) => parametroSetNombre(e.target.value)}
                    value={parametroNombre}
                />
            </div>
            <div>
                <label> Contraseña </label>
                <input
                    type="password"
                    class="form-control"
                    name="password"
                    placeholder="Ingrese su contraseña"
                    onChange={(e) => parametroSetPassword(e.target.value)}
                    value={parametroPassword}
                />
            </div>
        </form>
    )
}

export default Input