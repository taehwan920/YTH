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

const CraftHidden = styled.div`
    width: max-content;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 5px;
    opacity: ${props => props.craft && !props.about ? '1' : '0'};
    position: absolute;
    transition: all 0.3s ease;
    z-index: 4;

    ${props => props.aniEnd && css`
        top: calc(50% - ${props.craftHei / 2}px);
        left: calc(50% - ${props.craftWid / 2}px);
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
        const posY = this.craftTxtRef.offsetRight;
        return [posX, posY];
    };

    getWidHei = () => {
        const wid = this.craftTxtRef.offsetWidth;
        const hei = this.craftTxtRef.offsetHeight;
        return [wid, hei]
    };

    isClicked = e => {
        e.stopPropagation();
        const [posX, posY] = this.getPos();
        const [wid, hei] = this.getWidHei();
        const { yangStore } = this.props;
        yangStore.getCraftWidHei(wid, hei);
        yangStore.getCraftPos(posX, posY);
        yangStore.whatIsClicked('craft');
        setTimeout(yangStore.whenAniEnded, 500);
    };

    render() {
        const {
            yangStore
        } = this.props;
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
                    craftHei={yangStore.craftHei}
                    craftWid={yangStore.craftWid}
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