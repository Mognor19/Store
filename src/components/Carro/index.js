import { Burbuja } from "../Burbuja"
import { useState } from "react"
import { Button, DivCarro, DivLista, ButtonDelete, Ul, Li, Img } from "./styles"

export const Carro = ({cantidad, productos, borrarDelCarro}) => {
    const [mostrarCarro, setMostrarCarro] = useState(false)

    const handleMostrarCarro = _ => setMostrarCarro(!mostrarCarro)

    let subTotal = productos.reduce((acum, prod) => (prod.cantidad * prod.precio) + acum, 0)
    let impuesto = subTotal * 0.15
    let totalPagar = subTotal + impuesto

    return(
        <DivCarro>
            {
                cantidad > 0 &&
                <Burbuja cantidad={cantidad}/>
            }
            <Button imagen={'/imagenes/cart.png'} onClick={handleMostrarCarro}>
            </Button>
            {
                (cantidad > 0 && mostrarCarro) &&
                <DivLista>
                    <Ul>
                        {
                            productos.map(x => {
                                if(x.cantidad===0){
                                    return false
                                }else{
                                    return(
                                        <Li key={x.id}>
                                            <Img height={25} alt={x.nombre} src={x.imagen}/>
                                            <span>{x.nombre}</span>
                                            <span>
                                                ({x.cantidad} * ¥ {x.precio.toLocaleString()}) = <strong>¥ {(x.cantidad * x.precio).toLocaleString()}</strong>
                                            </span>
                                            <ButtonDelete onClick={()=>(borrarDelCarro(x))}>X</ButtonDelete>
                                        </Li>
                                    )
                                }
                            })
                        }
                        <Li>
                            <strong>Sub Total</strong>
                            <strong>¥ {subTotal.toLocaleString()}</strong>
                        </Li>
                        <Li>
                            <strong>Impuesto</strong>
                            <strong>¥ {impuesto.toLocaleString()}</strong>
                        </Li>
                        <Li>
                            <strong>Total a pagar</strong>
                            <strong>¥ {totalPagar.toLocaleString()}</strong>
                        </Li>
                    </Ul>
                </DivLista>
            }
        </DivCarro>
    )
}