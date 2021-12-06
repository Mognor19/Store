import { ButtonStyle } from "./styles"

export const Button = ({children, agregarAlCarro, prod}) => {
    return (
        <ButtonStyle onClick={() => agregarAlCarro(prod)}>{children}</ButtonStyle>
    )
}