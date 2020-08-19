import React from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import MakeCrafts from './craftMain/MakeCrafts';
import { inject, observer } from 'mobx-react';

const MainWrapper = styled.section`
    width: max-content;
    min-width: 100vw;
    height: calc(100% - ${props => props.isMobile ? 80 : 100}px);
    margin-top: ${props => props.isMobile ? 80 : 100}px;
    position: relative;
    overflow: hidden;

    &:hover {
        cursor: grab;
    }
`;

@inject('yangStore')
@observer

class CraftMain extends React.Component {
    mouseDown = false;
    posX = null;
    componentDidMount() {
        this.craftMainRef.addEventListener('mousedown', this.didMouseDown);
        this.craftMainRef.addEventListener('mouseup', this.didMouseUp);
    };

    componentWillUnmount() {
        this.craftMainRef.removeEventListener('mousedown', this.didMouseDown);
        this.craftMainRef.removeEventListener('mouseup', this.didMouseUp);
    };

    didMouseDown = e => {
        e.preventDefault();
        this.mouseDown = true;
        this.posX = e.offsetX;
    };

    didMouseUp = e => {
        this.mouseDown = false;
        const { yangStore } = this.props;
        const nowPosX = e.offsetX;
        nowPosX > this.posX
            ? yangStore.stepBack()
            : yangStore.stepNext();
    };
    render() {
        return (
            <MainWrapper
                ref={ref => this.craftMainRef = ref}
                isMobile={isMobile}
            >
                <MakeCrafts />
            </MainWrapper>
        )
    }
};

export default CraftMain;