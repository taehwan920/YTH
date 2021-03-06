import React from 'react';
import styled, { css } from 'styled-components';
import { isMobile } from 'react-device-detect';

const ReferWrapper = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;

    @media(max-width: 899px) {
        margin: 10px 0px;
    }

    ${props => props.isMobile && css`
        margin-bottom: 0px;
    `}
`;

const ReferItem = styled.a`
    background: #6DB169;
    width: max-content;
    height: max-content;
    padding: 5px 20px;
    margin: 0px 50px;
    border-radius: 10px;
    transition: all .3s ease;
    font-family: 'Noto Sans';
    font-size: 26px;
    cursor: pointer;

    @media(max-width: 899px) {
        font-size: 22px;
        margin: 0px 30px;
    }

    @media(max-width: 499px) {
        font-size: 14px;
        margin: 20px;
    }
`;

const Github = styled(ReferItem)`
    &:hover{
        background: #24292E;
        color: white;    
    }

    @media(max-width: 899px) {
        margin-right: 70px;
    }
`;

const Craft = styled(ReferItem)`
    &:hover{
        background: #3F48CC;
        color: white;
    }
`;

export default ({ github, craft }) => {
    return (
        <ReferWrapper
            isMobile={isMobile}
        >
            <Github
                rel="noopener noreferrer"
                href={github}
                target="_blank"
            >
                To GitHub
            </Github>
            <Craft
                rel="noopener noreferrer"
                href={craft}
                target="_blank"
            >
                To Craft
            </Craft>
        </ReferWrapper>
    )
};