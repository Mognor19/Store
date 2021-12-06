import { Articulo } from "../Articulo";
import { Datos } from "../../App";
import { Div } from "./styles";
import { useContext } from "react";

export const Articulos = (props) => {
    const agregarAlCarro = props.agregarAlCarro
    let productos = useContext(Datos)

    return (
        <Div>
            {
                productos.articulos.map(prod => 
                    // <Articulo nombre={prod.nombre} precio={prod.precio} imagen={prod.imagen} />
                    <Articulo key={prod.id} prod={prod} agregarAlCarro={agregarAlCarro} />
                )
            }
        </Div>
    )
}