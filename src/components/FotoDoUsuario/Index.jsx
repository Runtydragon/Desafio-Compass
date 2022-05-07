import {
    Container,
    FotoDePerfil
} from "./Styles"


const FotoDoUsuario = props => (
<Container>
    <FotoDePerfil src={props?.url} alt={props.alternativeText}/>
</Container>
)

export default FotoDoUsuario