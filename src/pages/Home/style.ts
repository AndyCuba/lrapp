import styled from 'styled-components';
import { accentColor } from '../../GlobalStyle';

const StyledLink = styled.a`
    font-weight: 500;
    font-size: 16px;
    color: #252E42;
    text-align: center;
    display: inline-block;
    margin-bottom: 200px;
    &:hover {
        color: ${accentColor};
    }
`;

export { StyledLink };