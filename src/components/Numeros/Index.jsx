import React from "react";
import { useHistory } from "react-router-dom";
import { Container, NumerosContainer } from "./Styles";

const Numeros = (props) => {
    const history = useHistory();
    const click = (route) => history.push(route);
    return (
        <Container>
            <NumerosContainer onClick={() => click("/repos")}>
                <h1>{props.repos}</h1>
                <h2>Repositórios</h2>
            </NumerosContainer>

            <NumerosContainer onClick={() => click("/dados")}>
                <h2>Dados</h2>
            </NumerosContainer>

            <NumerosContainer onClick={() => click("/starred")}>
                <h1>{props.fav}</h1>
                <h2>Favoritos</h2>
            </NumerosContainer>
        </Container>
    );
};

export default Numeros;
