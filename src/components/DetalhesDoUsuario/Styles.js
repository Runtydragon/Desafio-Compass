import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const Nome = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    color: #444;
`;

export const Usuario = styled.h2`
    width: 100%;
    text-align: center;
    font-size: 13px;
    font-weight: 500;
    color: #777;
    padding: 5px;
`;

export const Descricao = styled.p`
    width: 300px;
    height: 50px;
    margin: 10px 0;
    font-size: 11px;
    text-align: justify;
    color: #777;
    line-height: 1.3;
    overflow: hidden;
`;
