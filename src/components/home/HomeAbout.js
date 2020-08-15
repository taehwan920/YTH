import React from 'react';
import styled, { css } from 'styled-components';
import { inject, observer } from 'mobx-react';
import BigTxt from '../BigTxt';
import { isMobile } from 'react-device-detect';

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
    display: ${props => props.aniEnd ? 'none' : 'flex'};
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

// const AboutHidden = styled.div`
//     width: max-content;
//     height: max-content;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     z-index: 5;
//     letter-spacing: 5px;
//     opacity: ${props => props.about && !props.craft ? '1' : '0'};
//     position: absolute;
//     transition: all 0.3s ease;
//     z-index: 4;

//     ${props => props.aniEnd && css`
//         top: calc(50% - ${props.aboutHei / 2}px);
//         left: calc(50% - ${props.aboutWid / 2}px);
//     `}
//     ${props => !props.aniEnd && css`
//         top: ${props => props.aboutY}px;
//         left: ${props => props.aboutX}px;
//     `}
// `;

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
        transform: translate(${props.aboutMoveX}px, ${props.aboutMoveY}px);
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
        const posY = this.aboutTxtRef.offsetTop;
        return [posX, posY];
    };

    getMovePos = () => {
        const posX = this.aboutTxtRef.offsetLeft;
        const posY = this.aboutTxtRef.offsetTop;
        const wid = this.aboutTxtRef.offsetWidth;
        const hei = this.aboutTxtRef.offsetHeight;
        const winWid = window.innerWidth;
        const winHei = window.innerHeight;
        let moveX, moveY;
        winWid > 900
            ? moveX = winWid / 2 - posX + wid / 2
            : moveX = 0;
        winWid < 900
            ? moveY = winHei / 2 - posY + hei / 2
            : moveY = 0;
        console.log(moveX, moveY);
        return [moveX, moveY];
    };

    isClicked = e => {
        e.stopPropagation();
        const [posX, posY] = this.getPos();
        const [moveX, MoveY] = this.getMovePos();
        const { yangStore } = this.props;

        if (yangStore.aniEnd) return;

        yangStore.getAboutPos(posX, posY);
        yangStore.getAboutMove(moveX, MoveY);
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
                <AboutHidden
                    about={yangStore.about}
                    aboutMoveY={yangStore.aboutMoveY}
                    aboutMoveX={yangStore.aboutMoveX}
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