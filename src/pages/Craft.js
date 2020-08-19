import React from 'react';
import styled from 'styled-components';
import MenuOpener from '../components/MenuOpener';
import CraftHeader from '../components/craft/CraftHeader';
import MenuCloser from '../components/MenuCloser';
import CraftMain from '../components/craft/CraftMain';

const CraftWrapper = styled.main`
    background-color: #c3d3c2;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    overflow-y: scroll;
`;

export default () => {
    return (
        <CraftWrapper>
            <CraftHeader />
            <CraftMain />
            <MenuOpener
                menuTxt="CRAFT"
            />
            <MenuCloser />
        </CraftWrapper>
    )
};