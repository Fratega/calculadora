import React from 'react';
import '../stylesheets/boton.css';

function Boton( {manejarClic, children} ) {

  const esOperador = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=');
  };

  return (
    <div
      className={`boton-contenedor ${esOperador([children]) ? 'operador' : ''}`}
      onClick={() => {manejarClic([children])}}>
      {[children]}
    </div>
  );
}

export default Boton;