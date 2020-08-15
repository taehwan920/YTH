import React from 'react';
import styled, { css } from 'styled-components';
import { inject, observer } from 'mobx-react';
import BigTxt from '../BigTxt';

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
    z-index: 5;
    letter-spacing: 5px;
    opacity: ${props => props.menuClicked ? '0' : '1'};
    transition: all 0.3s ease;

    &:hover {
        color: #3f48cc;
    }
`;

const AboutHidden = styled.div`
    width: max-content;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    letter-spacing: 5px;
    opacity: ${props => props.about && !props.craft ? '1' : '0'};
    position: absolute;
    transition: all 0.3s ease;
    z-index: 4;

    ${props => props.aniEnd && css`
        top: calc(50% - ${props.aboutHei / 2}px);
        left: calc(50% - ${props.aboutWid / 2}px);
    `}
    ${props => !props.aniEnd && css`
        top: ${props => props.aboutY}px;
        left: ${props => props.aboutX}px;
    `}
`;

@inject('yangStore')
@observer

class HomeAbout extends React.Component {
    getPos = () => {
        const posX = this.aboutTxtRef.offsetLeft;
        const posY = this.aboutTxtRef.offsetRight;
        return [posX, posY];
    };

    getWidHei = () => {
        const wid = this.aboutTxtRef.offsetWidth;
        const hei = this.aboutTxtRef.offsetHeight;
        return [wid, hei]
    };

    isClicked = e => {
        e.stopPropagation();
        const [posX, posY] = this.getPos();
        const [wid, hei] = this.getWidHei();
        const { yangStore } = this.props;
        yangStore.getAboutWidHei(wid, hei);
        yangStore.getAboutPos(posX, posY);
        yangStore.whatIsClicked('about');
        setTimeout(yangStore.whenAniEnded, 500);
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
                    menuClicked={yangStore.menuClicked}
                >
                    <BigTxt
                        fontSize={yangStore.menuFontSize}
                        txtItem="ABOUT"
                    />
                </AboutTxt>
                <AboutHidden
                    about={yangStore.about}
                    aboutHei={yangStore.aboutHei}
                    aboutWid={yangStore.aboutWid}
                    aniEnd={yangStore.aniEnd}
                    posX={yangStore.aboutX}
                    posY={yangStore.aboutY}
                >
                    <BigTxt
                        fontSize={yangStore.menuFontSize}
                        txtItem="ABOUT"
                    />
                </AboutHidden>
            </HomeAboutBox>
        )
    }
};

export default HomeAbout;