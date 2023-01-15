import styled from 'styled-components';

export const Container = styled.div`
    height: 10vh;
    background: ${props => props.theme.colors.navbar};
    color: ${props => props.theme.text};
    font-size: 30px;
`

export const Points = styled.div`
    background-color: ${props => props.theme.colors.terciary};
    text-align: center;
    border-radius: 30px;
    color: ${props => props.theme.text};
    font-weght: bold;
`