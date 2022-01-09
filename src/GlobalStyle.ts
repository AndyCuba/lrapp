import styled, { createGlobalStyle } from 'styled-components';

const mainBackgroundColor = '#010920';
const accentColor = '#FF8469';
const activeAccentColor = '#D95133';
const mainTextColor = '#FFFFFF';
const checkBoxColor = '#4F5565';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;
        max-width: 1420px;
        margin: auto;
        background-color: ${mainBackgroundColor};
        font-family: Montserrat;
    }

    ul,
    ol {
    list-style: none;
    }

    a {
    text-decoration: none;
    display: block;
    }
`;

const AppWrapper = styled.div`
    max-width: 420px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export { 
    GlobalStyle,
    AppWrapper,
    accentColor,
    activeAccentColor,
    mainTextColor,
    checkBoxColor
};