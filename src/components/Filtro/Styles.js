import styled, { css } from "styled-components";

export const Area = styled.div`
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    display: flex;
    flex: 1;
    background-color: white;
    padding: 10px 15px;
    align-items: center;
    border-bottom: 1px solid #CCC;
`;

export const Input = styled.input`
    width: 100%;
    height: 42px;
    border-radius: 5px 0px 0px 5px;
    border-top: 2px solid #EEE;
    border-bottom: 2px solid #EEE;
    border-left: 2px solid #EEE;
    padding: 0px 10px;
    border-right: none;
    outline-color: #CCC;
`
export const Button = styled.button`
    width: 50px;
    height: 46px;
    padding: 0px 10px;
    border: 2px solid #EEE;
    outline-color: #CCC;

    ${props => props.primary && css`
        border: 2px solid #364382;
        outline-color: #374482c2;
        background: #364382;
        color: white;
    `}
`