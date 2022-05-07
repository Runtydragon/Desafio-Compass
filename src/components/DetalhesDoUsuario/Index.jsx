import { Container, Nome, Usuario, Descricao } from "./Styles";

const DetalhesDoUsuario = (props) => (
    <Container>
        <Nome>{props?.Nome}</Nome>
        <Usuario>{props?.Usuario}</Usuario>
        <Descricao>{props?.Descricao}</Descricao>
    </Container>
);

export default DetalhesDoUsuario;
