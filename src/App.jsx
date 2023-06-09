import { useState } from "react"
import Formulario from "./Componentes/Formulario"
import CaballerosZodiaco from "./Componentes/CaballerosZodiaco"
function App() {

  // con ajax vas a ir a la base de datos y vas a traer los datos
  
  // 1.1 Creamos un valor inicial para el estado caballeros
  const caballeroIniciales = [
    { 
      id: 1,
      nombre:'Seiya ',
      constelacion: 'Pegaso'
    },
    { 
      id: 2,
      nombre:'Shiryu',
      constelacion: 'Dragón'
    },
    { 
      id: 3,
      nombre:'Hyoga',
      constelacion: 'Cisne'
    },
    { 
      id: 4,
      nombre:'Shun',
      constelacion: 'Andrómeda'
    },
    { 
      id: 5,
      nombre:'Ikki',
      constelacion: 'Fénix'
    },

  ]

  // 1. Creamos un estado en donde guardaremos los datos del formulario
  const [caballeros, setCaballeros] = useState(caballeroIniciales)

  const [caballeroAEditar, setCaballeroAEditar] = useState(null)

  ///////////////////////// Funciones //////////////////////////////////////////////////

  //2 Creamos la funcion Agregar caballero
  const agregarCaballero =(caballero)=>{
    setCaballeros([...caballeros, caballero])
  }

  //Creamos la funcion eliminar
  const eliminarCaballero=(id)=>{
    const caballeroEliminado = caballeros.filter(elemento => elemento.id != id)
    setCaballeros(caballeroEliminado)
  }


  //Creamos la funcion para editar un caballero
  const editarCaballero = (caballero) => {
    const caballeroEditado = caballeros.map(elemento => {
      if (elemento.id == caballero.id) {
        return caballero
      } else {
        return elemento
      }
    })
    setCaballeros(caballeroEditado)
  }

  //Creamos la funcion para eliminar un caballero

  ///////////////////////////////////////////////////////////////////////////////

  return (
    <div className="App">
        <h1>Caballeros del Zodiaco</h1>
        <Formulario  
        agregarCaballero={agregarCaballero}
        editarCaballero={editarCaballero}
        caballeroAEditar={caballeroAEditar}
        setCaballeroAEditar={setCaballeroAEditar}/>


        <CaballerosZodiaco  
        caballeros ={caballeros} 
        eliminarCaballero={eliminarCaballero}
        setCaballeroAEditar={setCaballeroAEditar}/>
    </div>
  )
}

export default App
