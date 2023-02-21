import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background: #202632;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border:none;
    }
`