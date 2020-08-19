import React from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import MakeCrafts from './craftMain/MakeCrafts';
import { inject, observer } from 'mobx-react';
import PageCounter from './craftMain/PageCounter';

const MainWrapper = styled.section`
    width: max-content;
    min-width: 100vw;
    height: calc(100% - ${props => props.isMobile ? 80 : 100}px);
    margin-top: ${props => props.isMobile ? 80 : 100}px;
    position: relative;
    overflow-y: scroll;

    &:hover {
        cursor: grab;
    }
`;

// const MobileLine = styled.div`
//     background: skyblue;
//     width: 375px;
//     height: 5px;
//     position: fixed;
//     top: 50%;
//     left: 50%;
//     transform: translateX(-50%);
// `;

@inject('yangStore')
@observer

class CraftMain extends React.Component {
    mouseDown = false;
    posX = null;
    componentDidMount() {
        this.craftMainRef.addEventListener('mousedown', this.didMouseDown);
        this.craftMainRef.addEventListener('mouseup', this.didMouseUp);
        this.craftMainRef.addEventListener('touchstart', this.didMouseDown);
        this.craftMainRef.addEventListener('touchend', this.didMouseUp);
    };

    componentWillUnmount() {
        this.craftMainRef.removeEventListener('mousedown', this.didMouseDown);
        this.craftMainRef.removeEventListener('mouseup', this.didMouseUp);
        this.craftMainRef.removeEventListener('touchstart', this.didMouseDown);
        this.craftMainRef.removeEventListener('touchend', this.didMouseUp);
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
                {/* <MobileLine /> */}
            </MainWrapper>
        )
    }
};

export default CraftMain;