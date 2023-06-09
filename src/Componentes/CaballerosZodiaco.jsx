import React from 'react'

export const CaballerosZodiaco = ({caballeros, eliminarCaballero, setCaballeroAEditar}) => {
  return (
    <div>
        <h2>Nombres Y Constelacion</h2>
        <div className='Contenedor-Caballeros'>
            {
                caballeros.map(caballero =>(
                    <div key={caballero.id}>
                        <h3>{caballero.nombre} - {caballero.constelacion}</h3>
                        {/* 1 creamos un boton para eliminar elementos */}
                        <button onClick={()=> eliminarCaballero(caballero.id)}>Eliminar</button>
                        <button onClick={()=>setCaballeroAEditar(caballero)}>Modificar</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default CaballerosZodiaco