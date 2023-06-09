import React, { useEffect } from 'react'
import { useState } from 'react'

export const Formulario = ({agregarCaballero, editarCaballero, caballeroAEditar, setCaballeroAEditar}) => {
    
    useEffect(()=>{
        caballeroAEditar ? setCaballero(caballeroAEditar)
        : setCaballero(caballeroInicial)
    },[caballeroAEditar])


    // 5 Creamos un valor inicial para el estado que creamos previamente
    const caballeroInicial = {
        id: null,
        nombre: '',
        constelacion: ''
    }

    // 4 Creamos el estado en el que guardaremos la ifnormacion del formulario
    const [caballero, setCaballero] = useState(caballeroInicial) 
    

    ///////////////// Funciones //////////////////////////////////

    const handleSubmit = (e) => {
        //9 Procedemos a programar la primera parte de la funcion handleSubmit
        e.preventDefault()
        
        if(!caballero.nombre.trim() || !caballero.constelacion.trim()){
            alert('Por favor, llene todos los campos')
        }
        else if(caballero.id === null){
            agregarCaballero({
                ...caballero,
                id: Date.now()
            })
        }
        else{
            editarCaballero(caballero)
        }
        Limpiar()
    }

    const handleChange = (e) => {
        const {name,value} = e.target
        setCaballero({
          ...caballero,
            [name]:value
        })
    }
    
    const Limpiar =()=>{
        setCaballero(caballeroInicial)
        setCaballeroAEditar(null)
    }
    /////////////////////////////////////////////////////////////

    return (
    <div className='contenedor-formulario'>

        {/* 3 Creando la estructura del formulario  */}
        <form onSubmit={handleSubmit}>
            <input 
            type='text' 
            placeholder='Nombre' 
            name='nombre'
            value={caballero.nombre}
            onChange={handleChange}/>

            <input 
            type='text' 
            placeholder='Constelacion'
            name='constelacion'
            value={caballero.constelacion}
            onChange={handleChange} />

            <input type="reset" 
            onClick={Limpiar} 
            value= "Limpiar"/>

            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Formulario