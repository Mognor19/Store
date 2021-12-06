import { useContext } from 'react'
import { Cantidad, Datos } from '../../App'
import { Carro } from '../Carro'
import { NavbarStyle, Img } from './styles'

export const Navbar = ({ borrarDelCarro }) =>{

    let cantidad = useContext(Cantidad)
    let productos = useContext(Datos)

    return(
        <NavbarStyle>
            <Img imagen={'/imagenes/Hololive_triangles_logo.png'}></Img>
            {/* <Input placeholder={"Que quieres buscar?"} /> */}
            <Carro cantidad={cantidad} productos={productos.carrito} borrarDelCarro={borrarDelCarro} />
        </NavbarStyle>
    )
}