import styled, { css } from "styled-components";

export const Area = styled.div`
    width: 50%;
    min-height: 500px;
    height: calc(100% - 40px);
    margin: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #CCC;
    padding: 10px;
    box-sizing: border-box;

    @media (max-width: 700px) {
        width: 100%;
        margin: 10px 0;
    }

    @media (max-width: 400px) {
        min-height: 400px;
        height: 400px;
        width: 100%;
        margin: 10px 0;
    }
`;

export const Titulo = styled.span`
    width: 100%;
    display: block;
    padding: 10px;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: bold;
    border-bottom: 1px solid #CCC;
`;

export const Container = styled.div`
    width: 100%;
    height: calc(100% - 100px);
    overflow-x: hidden;
    overflow-y: auto;
    display: block;
    position: relative;
    border-bottom: 1px solid #CCC;
`
export const Modelo = styled.div`
    width: 100%;
    display: block;
    padding: 10px;
    font-size: 18px;
    color: #364482;
    font-weight: bold;
    letter-spacing: 0.5px;
    box-sizing: border-box;
`

export const Informacoes = styled.div`
    width: 100%;
    display: flex;
    padding: 10px;
    box-sizing: border-box;

    div{
        width: 50%;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    span:nth-child(1){
        color: #CCC;
        font-size: 12px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
    }

    span:nth-child(2){
        font-size: 18px;
        font-weight: bold;
        letter-spacing: 0.5px;
    }
`

export const Descricao = styled.div`
    padding: 10px;
    letter-spacing: 0.5px;
    line-height: 20px;
    font-size: 15px;
`
export const Footer = styled.div`
    width: 100%;
    height: 55px;
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
    box-sizing: border-box;

    button{
        width: 150px;
        height: 40px;
        font-size: 25px;
        color: white;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        border: none;
        background-color: #3d4a86;
        outline-color: #5866a8;
    }
`