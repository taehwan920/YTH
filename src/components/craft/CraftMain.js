import React from 'react';
import styled from 'styled-components';
import ReactTouchEvents from "react-touch-events";
import { isMobile } from 'react-device-detect';
import { inject, observer } from 'mobx-react';
import MakeCrafts from './craftMain/MakeCrafts';
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
    posX = null;

    componentDidMount() {
        this.craftMainRef.addEventListener('mousedown', this.didMouseDown);
        this.craftMainRef.addEventListener('mouseup', this.didMouseUp);
    };

    componentWillUnmount() {
        this.craftMainRef.removeEventListener('mousedown', this.didMouseDown);
        this.craftMainRef.removeEventListener('mouseup', this.didMouseUp);
    };

    didSwipe = direction => {
        const { yangStore } = this.props;
        switch (direction) {
            case "left":
                yangStore.stepNext();
                break;
            case "right":
                yangStore.stepBack();
                break;
            default:
                console.log('you swiped!');
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
            <ReactTouchEvents
                onSwipe={this.didSwipe}
            >
                <MainWrapper
                    ref={ref => this.craftMainRef = ref}
                    isMobile={isMobile}
                >
                    <MakeCrafts />
                    <PageCounter />
                </MainWrapper>
            </ReactTouchEvents>
        )
    }
};

export default CraftMain;