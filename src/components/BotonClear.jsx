import React from 'react'
import '../stylesheets/botonClear.css'


function BotonClear( {manejarClear, children} ) {
  return (
    <div className='boton-clear' 
    onClick={manejarClear}
    >
        {[children]}
    </div>
  )
}

export default BotonClear;