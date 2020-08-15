import React from 'react';
import styled, { css } from 'styled-components';

const BigTxt = styled.span`
    color: inherit;
    ${props => props.fontSize && css`
        height: ${props.fontSize}px;
        line-height: ${props.fontSize}px;
        font-size: ${props.fontSize}px;
    `}
`;

export default ({ fontSize, txtItem }) => {
    return (
        <BigTxt
            fontSize={fontSize}
        >
            {txtItem}
        </BigTxt>
    )
};