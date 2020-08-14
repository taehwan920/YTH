import React from 'react';
import styled, { css } from 'styled-components';

const LogoWrapper = styled.div`
    background-color: #6aaf66;
    width: max-content;
    height: max-content;
    padding: 20px 40px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const LogoTxt = styled.span`
    ${props => props.fontSize && css`
        height: ${props.fontSize}px;
        line-height: ${props.fontSize}px;
        font-size: ${props.fontSize}px;
    `}
`;

export default () => {
    return (
        <LogoWrapper>
            <LogoTxt
                fontSize={140}
            >
                YTH
            </LogoTxt>
            <LogoTxt
                fontSize={101}
            >
                PORT
                </LogoTxt>
            <LogoTxt
                fontSize={92.5}
            >
                FOLIO
                </LogoTxt>
        </LogoWrapper>
    )
}