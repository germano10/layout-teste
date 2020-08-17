import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: block;
    flex: 1;
    flex-direction: column;
`;

export const Topo = styled.div`
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    background-color: white;
    display: flex;
    flex: 1;
    overflow: hidden;
    border-bottom: 1px solid #CCC;
`;

export const Titulo = styled.span`
    height: 100%;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: #374482;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    border-right: 1px solid #CCC;
`;

export const Consulta = styled.div`
    width: 100%;
    min-height: 600px;
    height: calc(100% - 200px);
    display: flex;
    flex: 1;
    overflow-x: hidden;
    overflow-y: hidden;
    position: relative;
    flex-direction: row;

    @media (max-width: 700px) {
        flex-direction: column;
        overflow-y: initial;
    }
`