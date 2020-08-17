import styled, { css } from "styled-components";

export const Area = styled.div`
    width: 70%;
    min-height: 500px;
    height: calc(100% - 40px);
    margin: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #CCC;
    padding: 0px 10px;
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
    padding: 10PX;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: bold;
`;

export const Container = styled.div`
    width: 100%;
    height: calc(100% - 100px);
    border-radius: 2px;
    position: relative;
    flex: 1;
    flex-direction: column;
    overflow: auto;
    overflow-x: hidden;
`;

export const Listagem = styled.ul`
    display: block;
    margin: 0;
    padding: 0px;
    list-style: none;
    border: 1px solid #dee2e6;

    li{
        height: 60px;
        display: flex;
        flex: 1;
        align-items: center;
        padding: 10px;
        cursor: pointer;
    }

    li:nth-child(odd) {
        background-color: #f2f2f2;
    }

    div{
        flex: 1;
        height: 100%;
        display: flex;
        align-items: end;
        flex-direction: column;
    }

    span{
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin: 1px 0;
    }

    span:nth-child(2){
        color: #364382;
        text-transform: capitalize;
        font-size: 15px;
    }

    span:nth-child(3){
        font-weight: normal;
        font-size: 15px;
    }

    button{
        background: none;
        border: none;
        height: 100%;
        padding: 10px;
        outline: none;
        font-size: 18px;
    }
`

export const Paginacao = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;

    div{
        width: auto;
        height: auto;
        position: relative;
        display: block;
    }

    button{
        width: 40px;
        height: 40px;
        background-color: #fcfcfc;
        border: 1px solid #EEE;
        border-radius: 5px;
        outline-color: #eee;
        color: #AAA;
    }
`;