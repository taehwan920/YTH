import React from 'react';
import styled from 'styled-components';
import BigTxt from './BigTxt';

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

export default () => {
    return (
        <LogoWrapper
            draggable="true"
        >
            <BigTxt
                fontSize={140}
                txtItem="YTH"
            />
            <BigTxt
                fontSize={101}
                txtItem="PORT"
            />
            <BigTxt
                fontSize={92.5}
                txtItem="FOLIO"
            />
        </LogoWrapper>
    )
};