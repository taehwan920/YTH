import React from 'react';
import styled from 'styled-components';
import BigTxt from '../../BigTxt';
import { isMobile } from 'react-device-detect';

const AboutTitle = styled.div`
    width: 100%;
    height: max-content;
    padding-bottom: 5px;
    border-bottom: 2px solid #6aaf66;
    margin-bottom: 20px;
    transition: all 0.3s ease;
    letter-spacing: 10px;

    @media (max-width: 799px) {
        letter-spacing: 5px;
    }
`;

export default ({ txtItem }) => {
    const fontSize = isMobile ? 40 : 60;
    return (
        <AboutTitle>
            <BigTxt
                fontSize={fontSize}
                txtItem={txtItem}
            />
        </AboutTitle>
    )
};