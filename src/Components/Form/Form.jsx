import React from "react";
import { useState } from "react";
import { Card } from "../Card/Card";

export const Form = () => {
  const paises = ["Argentina", "Colombia", "Brasil"];
  const [pais, setPais] = useState("");
  const [sendInfo, setSendInfo] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrormessage] = useState("");
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    cedula: "",
    pais: "",
  });

  const handleChange = (e, propiedades) => {
    setUser({ ...user, [propiedades]: e.target.value });
  };

  const validateUserName = (str) => {
    const withoutSpaces = str.trim();

    if (withoutSpaces.length > 2 && str === withoutSpaces) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimName = validateUserName(user.nombre);
    const validarNombre = user.nombre.length > 3 && user.nombre.length < 8;
    const validarApellido =
      user.apellido.length > 5 && user.apellido.length < 8;

    if (!validarNombre || !validarApellido || !trimName) {
      setError(true);

      if (!validarNombre && !validarApellido) {
        setErrormessage(
          "Nombre invalido ingrese 3-8 caracteres, Apellido invalido ingrese 3-8 caracteres "
        );
      } else if (!validarNombre) {
        setErrormessage("Nombre invalido ingrese 3-8 caracteres");
      } else if (!trimName) {
        alert("tiene espacios en el nombre");
      } else {
        setErrormessage("Apellido invalido ingrese 3-8 caracteres");
      }
      return;
    }

    setSendInfo(true);
    console.log("data: ", user);
  };

  return (
    <div>
      <header className="title">
        <h1>Registro Cedula</h1>
      </header>

      <form className="form" onSubmit={handleSubmit}>
        <br />
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={(e) => handleChange(e, "nombre")}
        />
        {error &&
          errorMessage.includes("Nombre invalido ingrese 3-8 caracteres") && (
            <span
              style={{
                color: "red",
                fontSize: "0.7rem",
              }}
            >
              {errorMessage}
            </span>
          )}
        <br />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          onChange={(e) => handleChange(e, "apellido")}
        />
        {error &&
          errorMessage.includes("Apellido invalido ingrese 3-8 caracteres") && (
            <span
              style={{
                color: "red",
                fontSize: "0.7rem",
              }}
            >
              {errorMessage}
            </span>
          )}

        <br />
        <input
          type="text"
          name="id"
          placeholder="Documendo de identidad"
          onChange={(e) => handleChange(e, "cedula")}
        />
        <br />

        <select
          className="seleccion"
          value={pais}
          onChange={(e) => setPais(handleChange(e, "pais"))}
        >
          <option value="" default disabled>
            Seleccione Color
          </option>

          {paises.map((pais) => {
            return (
              <option value={pais} key={pais}>
                {pais}
              </option>
            );
          })}
        </select>
        <br />
        <button type="submit">Enviar</button>
        <br />
      </form>
      <br />

      {sendInfo && (
        <Card
          nombre={user.nombre}
          apellido={user.apellido}
          cedula={user.cedula}
          pais={user.pais}
        />
      )}
    </div>
  );
};
