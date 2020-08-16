import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import BigTxt from '../BigTxt';
import HiddenCraft from './homeCraft/HiddenCraft';

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

@inject('yangStore')
@observer

class HomeCraft extends React.Component {
    getPos = () => {
        const posX = this.craftTxtRef.offsetLeft;
        const posY = this.craftTxtRef.offsetTop;
        return [posX, posY];
    };

    getSize = () => {
        const wid = this.craftTxtRef.offsetWidth;
        const hei = this.craftTxtRef.offsetHeight;
        console.log('c', wid, hei)
        return [wid, hei];
    };

    isClicked = e => {
        e.stopPropagation();
        const [posX, posY] = this.getPos();
        const [wid, hei] = this.getSize();
        const { yangStore } = this.props;

        if (yangStore.aniEnd) return;

        yangStore.getCraftPos(posX, posY);
        yangStore.getCraftSize(wid, hei);
        yangStore.whatIsClicked('craft');
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
                <HiddenCraft />
            </HomeCraftBox>
        )
    }
};

export default HomeCraft;