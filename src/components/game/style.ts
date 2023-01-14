import styled from "styled-components";

export const Resultado = styled.div`
    border-radius: 30px;
    height: 25vh;
    background: ${props => props.theme.colors.terciary};
    color: ${props => props.theme.text};
    font-size: 30px;
`

export const Options = styled.div`
    border-radius: 30px;
    height: 25vh;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.text};
    font-size: 30px;
`

export const PCSide = styled.div`
    border-radius: 30px;
    height: 25vh;
    background: ${props => props.theme.colors.secundary};
    color: ${props => props.theme.text};
    font-size: 30px;
`
export const LabelPC = styled.div`
    height: 1vh;
    color: ${props => props.theme.text};
    font-weght: bold;
`

export const LabelPlayer = styled.div`
    height: 1vh;
    color: ${props => props.theme.text};
    font-weght: bold;
`