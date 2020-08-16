import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import BigTxt from '../BigTxt';
import HiddenAbout from './homeAbout/HiddenAbout';

const HomeAboutBox = styled.article`
    width: max-content;
    height: max-content;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const AboutTxt = styled.div`
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

class HomeAbout extends React.Component {
    getPos = () => {
        const posX = this.aboutTxtRef.offsetLeft;
        const posY = this.aboutTxtRef.offsetTop;
        return [posX, posY];
    };

    getSize = () => {
        const wid = this.aboutTxtRef.offsetWidth;
        const hei = this.aboutTxtRef.offsetHeight;
        console.log('a', wid, hei)
        return [wid, hei];
    };

    isClicked = e => {
        e.stopPropagation();
        const [posX, posY] = this.getPos();
        const [wid, hei] = this.getSize();
        const { yangStore } = this.props;

        if (yangStore.aniEnd) return;

        yangStore.getAboutPos(posX, posY);
        yangStore.getAboutSize(wid, hei);
        yangStore.whatIsClicked('about');
    };

    render() {
        const {
            yangStore
        } = this.props;
        return (
            <HomeAboutBox
                draggable="true"
                onClick={this.isClicked}
            >
                <AboutTxt
                    ref={ref => this.aboutTxtRef = ref}
                    aniEnd={yangStore.aniEnd}
                    menuClicked={yangStore.menuClicked}
                >
                    <BigTxt
                        fontSize={yangStore.menuFontSize}
                        txtItem="ABOUT"
                    />
                </AboutTxt>
                <HiddenAbout />
            </HomeAboutBox>
        )
    }
};

export default HomeAbout;