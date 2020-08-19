import React from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import MakeCrafts from './craftMain/MakeCrafts';

const MainWrapper = styled.section`
    width: max-content;
    min-width: 100vw;
    height: calc(100% - ${props => props.isMobile ? 80 : 100}px);
    margin-top: ${props => props.isMobile ? 80 : 100}px;
    position: relative;
    overflow: hidden;
`;

export default class extends React.Component {
    render() {
        return (
            <MainWrapper
                isMobile={isMobile}
            >
                <MakeCrafts />
            </MainWrapper>
        )
    }
};