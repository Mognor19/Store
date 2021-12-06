import { Button } from '../Button'
import { Container, Price, Title, Image } from './styles'

export const Articulo = ({prod, agregarAlCarro}) => {
    return (
        <Container>
            <Image imagen={prod.imagen}>
                {/* <img style={styles.img} src={imagen}/> */}
            </Image>

            <Title>{prod.nombre}</Title>
            <Price>¥ {prod.precio.toLocaleString()}</Price>

            <Button prod={prod} agregarAlCarro={agregarAlCarro}>Add To Cart</Button>
        </Container>
    )
}

/**
 * articuo (contenedor)     Container
 * div (imagen)             Image
 * h4 (nombre del producto) Title
 * p (precio del producto)  Price
 */