import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { inject, observer } from 'mobx-react';
import BigTxt from '../BigTxt';

const HomeCraftBox = styled.article`
    width: max-content;
    height: max-content;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const CraftTxt = styled.div`
    width: max-content;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 5px;
    opacity: ${props => props.menuClicked ? '0' : '1'};
    transition: all 0.3s ease;
    z-index: 5;

    &:hover {
        color: #3f48cc;
    }
`;

// const CraftHidden = styled.div`
//     width: max-content;
//     height: max-content;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     letter-spacing: 5px;
//     opacity: ${props => props.craft && !props.about ? '1' : '0'};
//     position: absolute;
//     transition: all 0.3s ease;
//     z-index: 4;

//     ${props => props.aniEnd && css`
//         top: calc(50% - ${props.MoveX / 2}px);
//         left: calc(50% - ${props.MoveY / 2}px);
//     `}
//     ${props => !props.aniEnd && css`
//         top: ${props => props.craftY}px;
//         left: ${props => props.craftX}px;
//     `}
// `;

const CraftHidden = styled.div`
    width: max-content;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 5px;
    opacity: ${props => props.craft && !props.about ? '1' : '0'};
    position: absolute;
    transition: transform 0.3s ease;
    z-index: 4;

    ${props => props.aniEnd && css`
        transform: translate(${props.craftMoveX}, ${props.craftMoveY});
    `}
    ${props => !props.aniEnd && css`
        top: ${props => props.craftY}px;
        left: ${props => props.craftX}px;
    `}
`;

@inject('yangStore')
@observer

class HomeCraft extends React.Component {
    getPos = () => {
        const posX = this.craftTxtRef.offsetLeft;
        const posY = this.craftTxtRef.offsetTop;
        return [posX, posY];
    };

    getMovePos = () => {
        const posX = this.craftTxtRef.offsetLeft;
        const posY = this.craftTxtRef.offsetTop;
        const wid = this.craftTxtRef.offsetWidth;
        const hei = this.craftTxtRef.offsetHeight;
        const winWid = window.innerWidth;
        const winHei = window.innerHeight;
        let moveX, moveY;
        posX > winWid / 2
            ? moveX = winWid / 2 - posX - wid / 2
            : moveX = 0;
        posY > winHei / 2
            ? moveY = winHei / 2 - posY - hei / 2
            : moveY = 0;
        return [moveX, moveY];
    };

    isClicked = e => {
        e.stopPropagation();
        const [posX, posY] = this.getPos();
        const [MoveX, MoveY] = this.getMovePos();
        const { yangStore } = this.props;

        if (yangStore.aniEnd) return;

        yangStore.whatIsClicked('craft');
        yangStore.getCraftPos(posX, posY);
        yangStore.getCraftMove(MoveX, MoveY);
    };

    render() {
        const {
            yangStore
        } = this.props;
        console.log(yangStore.aniEnd)
        return (
            <HomeCraftBox
                draggable="true"
                onClick={this.isClicked}
            >
                <CraftTxt
                    ref={ref => this.craftTxtRef = ref}
                    menuClicked={yangStore.menuClicked}
                >
                    <BigTxt
                        fontSize={yangStore.menuFontSize}
                        txtItem="CRAFT"
                    />
                </CraftTxt>
                <CraftHidden
                    aniEnd={yangStore.aniEnd}
                    craft={yangStore.craft}
                    MoveX={yangStore.craftMoveX}
                    MoveY={yangStore.craftMoveY}
                    posX={yangStore.craftX}
                    posY={yangStore.craftY}
                >
                    <BigTxt
                        fontSize={yangStore.menuFontSize}
                        txtItem="CRAFT"
                    />
                </CraftHidden>
            </HomeCraftBox>
        )
    }
};

export default HomeCraft;