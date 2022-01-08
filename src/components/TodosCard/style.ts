import styled, { keyframes } from 'styled-components';
import { accentColor, activeAccentColor, checkBoxColor, mainTextColor } from '../../GlobalStyle';

const getUp = keyframes`
    from {
        top: 16px;
    }

    to {
        top: -16px;
    }
`;

const rotate = keyframes`
    from {
        top: 16px;
        rotate(0);
    }

    to {
        top: -26px;
        rotate(-4.48deg);
    }
`;

const StyledTodosCard = styled.div`
    width: 420px;
    min-height: 540px;
    border-radius: 20px;
    background: #252E42;
    margin-top: 162px;
    padding: 30px 30px 0;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 30px;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        top: -16px;
        left: 1px;
        z-index: -1;
        background-color: #31394D;
        border-radius: 20px;
        width: 395px;
        height: 68px;
        animation: 1s ease-in ${getUp};
        transform: rotate(-2.32deg);
    }
    &::after {
        content: '';
        position: absolute;
        top: -26px;
        left: 2px;
        z-index: -2;
        background-color: ${checkBoxColor};
        border-radius: 20px;
        width: 342px;
        height: 86px;
        animation: 1s ease-in ${rotate};
        transform: rotate(-4.48deg);
    } 
`;

const StyledCardHeading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 30px;
    h1 {
        font-size: 28px;
        line height: 34px;
        font-weight: 700;
        color: ${mainTextColor};
        word-spacing: 4px;
    }
    input {
        width: 54px;
        height: 27px;
        color: ${mainTextColor};
        background: ${accentColor};
        font-weight: 500;
        font-size: 14px;
        border-radius: 7px;
        outline: none;
        border: none;
        cursor: pointer;
        &:active {
            transform: scale(0.99);
        }
        &:hover {
            background: ${activeAccentColor};
        }
    }
`;

export { StyledTodosCard, StyledCardHeading };