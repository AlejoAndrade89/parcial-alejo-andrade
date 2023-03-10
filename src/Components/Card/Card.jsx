import React from "react";
import "./Card.css";
export const Card = ({ nombre, apellido, cedula, pais }) => {
  return (
    <div className="confirmation">
      <div className="confirmation-form">
        <h3>Nombre: {nombre}</h3>
        <h3>Apellido: {apellido}</h3>
        <h3>Cedula: {cedula}</h3>
        <h3>Pais: {pais}</h3>
        <h3 className="centrar">Registro Exitoso</h3>
      </div>
    </div>
  );
};
