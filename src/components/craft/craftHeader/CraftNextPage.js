import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { isMobile } from 'react-device-detect';
import { inject, observer } from 'mobx-react';

const RotateAni = keyframes`
    0% { transform: rotate(360deg) };
    100% { transform: rotate(0deg) };
`;

const NextArrowBox = styled.div`
    width: max-content;
    height: ${props => props.isMobile ? 60 : 80}px;
    position: absolute;
    top: ${props => props.isMobile ? 'calc(50% - 40px)' : 'calc(50% - 45px)'};
    right: ${props => props.isMobile ? 25 : 35}px;
    cursor: pointer;

    ${props => props.isClicked && css`
        animation: ${RotateAni} 0.3s ease-in-out;
    `}
`;

const NextArrow = styled.span`
    font-size: ${props => props.isMobile ? 70 : 80}px;
    line-height: ${props => props.isMobile ? 70 : 80}px;
    transition: color 0.3s ease;

    &:hover {
        color: #3f48cc;
    }
`;

@inject('yangStore')
@observer

class CraftBackspace extends React.Component {
    state = {
        isClicked: false
    };

    clicked = e => {
        e.stopPropagation();
        this.setState({ isClicked: true });
    };

    clickAniEnded = e => {
        e.stopPropagation();
        this.setState({ isClicked: false });
        this.props.yangStore.stepNext();
    };

    render() {
        const {
            isClicked
        } = this.state;
        return (
            <NextArrowBox
                draggable="true"
                onAnimationEnd={this.clickAniEnded}
                onClick={this.clicked}
                isClicked={isClicked}
                isMobile={isMobile}
            >
                <NextArrow
                    isMobile={isMobile}
                >
                    {`>`}
                </NextArrow>
            </NextArrowBox>
        )
    }
};

export default CraftBackspace;