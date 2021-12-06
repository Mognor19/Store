import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Articulos } from "./components/Articulos";
import { Navbar } from './components/Navbar';

// base de datos
const informacion = {
  articulos:[
    {id:1,nombre: 'Poster Matsuri', precio:1500,imagen:'/imagenes/matsuri.png'},
    {id:2,nombre: 'Poster Noel', precio:2500,imagen:'/imagenes/Noel.jpg'},
    {id:3,nombre: 'Poster HoloCouncil', precio:1000,imagen:'/imagenes/Hololive-proxima-generacion.jpg'},
    {id:4,nombre: 'Poster Hololive Alternative', precio:5200,imagen:'/imagenes/hololive-alternative-Holonometria-English-VTubers.jpeg'},  
    {id:5,nombre: 'Poster Kiara and Calli', precio:6000, imagen:'/imagenes/Kiara_x_Calli.jpg'},
    {id:6,nombre: 'Poster Santa Gura', precio:15000, imagen:'imagenes/Gura_Christmas.png'},
  ],
  carrito: [],
}

export const Cantidad = React.createContext()
export const Datos = React.createContext()

function App() {
  const [data, setData] = useState(informacion)
  // const cantidad = useRef(0)
  const [cantidad, setCantidad] = useState(0)

  const agregarAlCarro = (producto) => {
    if (data.carrito.find(x => x.id === producto.id)) {
      const carritoCopia = data.carrito.map(x => x.id === producto.id ? ({...x, cantidad: x.cantidad + 1}) : x)
      data.carrito = carritoCopia
      setData({...data})
      return
    }

    data.carrito.push({...producto, cantidad: 1})
    setData({...data})
  }

  const borrarDelCarro = (producto) =>{
    const carritoCopia = data.carrito.map(x => x.id === producto.id ? ({...x,cantidad:0}) : x)
    data.carrito = carritoCopia
    setData({...data})
    return
  }

  // let cantidad = data.carrito.length
  // let cantidad = data.carrito.reduce((acum, actual)=> acum + actual.cantidad,0) 
  useEffect(()=>{
    // cantidad.current = data.carrito.reduce((acum,actual)=> acum+actual.cantidad , 1)
    setCantidad(data.carrito.reduce((acum,actual)=> acum+actual.cantidad , 0))
  })

  return (
    <Cantidad.Provider value={cantidad}>
      <Datos.Provider value={data}>
        <Fragment>
          <Navbar borrarDelCarro={borrarDelCarro} />
          <Articulos agregarAlCarro={agregarAlCarro} />
        </Fragment>
      </Datos.Provider>
    </Cantidad.Provider>
  );
}

export default App;
