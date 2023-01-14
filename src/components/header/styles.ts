import styled from 'styled-components';

export const Container = styled.div`
    height: 10vh;
    background: ${props => props.theme.colors.navbar};
    color: ${props => props.theme.text};
    font-size: 30px;
`