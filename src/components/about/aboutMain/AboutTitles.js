import React from 'react';
import styled from 'styled-components';
import BigTxt from '../../BigTxt';

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
    return (
        <AboutTitle>
            <BigTxt
                fontSize={60}
                txtItem={txtItem}
            />
        </AboutTitle>
    )
};