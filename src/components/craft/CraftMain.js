import React from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import MakeCrafts from './craftMain/MakeCrafts';
import { inject, observer } from 'mobx-react';
import PageCounter from './craftMain/PageCounter';

const MainWrapper = styled.section`
    width: 100%;
    height: calc(100% - ${props => props.isMobile ? 70 : 100}px);
    margin-top: ${props => props.isMobile ? 70 : 100}px;
    position: relative;
    overflow-x: hidden;

    &:hover {
        cursor: grab;
    }
`;

@inject('yangStore')
@observer

class CraftMain extends React.Component {
    mouseDown = false;
    touchStart = false;
    posX = null;
    touchPosX = null;

    componentDidMount() {
        if (isMobile) {
            document.addEventListener('touchstart', this.didTouch);
            document.addEventListener('touchend', this.didEndTouch);
        } else {
            this.craftMainRef.addEventListener('mousedown', this.didMouseDown);
            this.craftMainRef.addEventListener('mouseup', this.didMouseUp);
        }
    };

    componentWillUnmount() {
        if (isMobile) {
            document.removeEventListener('touchstart', this.didTouch);
            document.removeEventListener('touchend', this.didEndTouch);
        } else {
            this.craftMainRef.removeEventListener('mousedown', this.didMouseDown);
            this.craftMainRef.removeEventListener('mouseup', this.didMouseUp);
        }
    };

    didTouch = e => {
        this.touchStart = true;
        this.touchPosX = e.screenX;
    };

    didEndTouch = e => {
        this.touchStart = false;
        const { yangStore } = this.props;
        const nowPosX = e.screenX;
        if (nowPosX < this.touchPosX - 35 || nowPosX > this.touchPosX + 35) {
            nowPosX > this.touchPosX
                ? yangStore.stepBack()
                : yangStore.stepNext();
        }
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
        if (nowPosX < this.posX - 70 || nowPosX > this.posX + 70) {
            nowPosX > this.posX
                ? yangStore.stepBack()
                : yangStore.stepNext();
        }
    };
    render() {
        return (
            <MainWrapper
                ref={ref => this.craftMainRef = ref}
                isMobile={isMobile}
            >
                <MakeCrafts />
                <PageCounter />
            </MainWrapper>
        )
    }
};

export default CraftMain;