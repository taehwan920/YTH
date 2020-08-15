import React from 'react';
import styled from 'styled-components';

const HomeFooter = styled.footer`
    width: 100%;
    height: 100px;
    font-size: 30px;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease;

    @media (max-width: 599px) {
        height: 60px;
        font-size: 20px;
    }

    @media (max-height: 549px) {
        display: none;
    }
`;

const FooterGithub = styled.a`
    letter-spacing: 2px;
    transition: all 0.5s ease;
    &:hover {
        color: #3f48cc;
        letter-spacing: 5px;
    }
`;

export default () => {
    return (
        <HomeFooter>
            <FooterGithub
                draggable="true"
                href="https://github.com/taehwan920/YTH"
                rel="noopener noreferrer"
                target="_blank"
            >
                GITHUB
            </FooterGithub>
        </HomeFooter>
    )
};