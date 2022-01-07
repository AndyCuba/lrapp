import styled, { keyframes } from 'styled-components';
import { accentColor } from '../../GlobalStyle';

const load = keyframes`
    0%,
    80%,
    100% {
    box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
    box-shadow: 0 2.5em 0 0;
    }
`;

const StyledSpinner = styled.div`
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    animation-fill-mode: both;
    animation: ${load} 1s infinite ease-in-out;
    color: ${accentColor};
    font-size: 10px;
    margin: 80px auto;
    position: relative;
    text-indent: -9999em;
    transform: translateZ(0);
    animation-delay: -0.16s;
    &:before {
        border-radius: 50%;
        width: 2.5em;
        height: 2.5em;
        animation-fill-mode: both;
        animation: ${load} 1s infinite ease-in-out;
        content: '';
        position: absolute;
        top: 0;
        left: -3.5em;
        animation-delay: -0.32s;
    }
    &:after{
        border-radius: 50%;
        width: 2.5em;
        height: 2.5em;
        animation-fill-mode: both;
        animation: ${load} 1s infinite ease-in-out;
        content: '';
        position: absolute;
        top: 0;
        left: 3.5em;
    }
`;

export default StyledSpinner;