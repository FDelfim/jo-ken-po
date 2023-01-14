import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${props => props.theme.background};
        font-size: 16px;
        color: ${props => props.theme.text};
        font-family: sans-serif;
    }
`;