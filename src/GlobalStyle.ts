import styled, { createGlobalStyle } from 'styled-components';

const mainBackgroundColor = '#010920';
const accentColor = '#FF8469';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;
        background-color: ${mainBackgroundColor};
    }
`;

const AppWrapper = styled.div`
    max-width: 420px;
    margin: auto;
`;

export { GlobalStyle, AppWrapper, accentColor };