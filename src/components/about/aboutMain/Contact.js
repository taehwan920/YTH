import React from 'react';
import styled from 'styled-components';
import AboutTitles from './AboutTitles';
import MakeContact from './contact/MakeContact';

const ContactWrapper = styled.article`
    width: 100%;
    height: max-content;
    margin-bottom: 100px;
    position: relative;

    @media(max-width: 899px) {
        margin-bottom: 60px;
    }
`;

const TinyInfo = styled.span`
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 14px;

    @media(max-width: 899px) {
        bottom: -40px;
    }
`;

export default () => {
    return (
        <ContactWrapper>
            <AboutTitles
                txtItem="Contact"
            />
            <MakeContact />
            <TinyInfo>
                * 클릭 시 클립 보드에 복사됩니다.
            </TinyInfo>
        </ContactWrapper>
    )
};