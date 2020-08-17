import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { isMobile } from 'react-device-detect';
import { inject, observer } from 'mobx-react';

const RotateAni = keyframes`
    0% { transform: rotate(0deg) };
    100% { transform: rotate(360deg) };
`;

const BackspaceBox = styled.div`
    width: max-content;
    height: ${props => props.isMobile ? 60 : 80}px;
    position: absolute;
    top: ${props => props.isMobile ? 'calc(50% - 35px)' : 'calc(50% - 45px)'};
    left: ${props => props.isMobile ? 25 : 35}px;
    cursor: pointer;

    ${props => props.isClicked && css`
        animation: ${RotateAni} 0.35s ease-in-out;
    `}
`;

const Backspace = styled.span`
    font-size: ${props => props.isMobile ? 60 : 80}px;
    line-height: ${props => props.isMobile ? 60 : 80}px;
    transition: color 0.3s ease;

    &:hover {
        color: #3f48cc;
    }
`;

@inject('yangStore')
@observer

class AboutBackspace extends React.Component {
    BSclicked = e => {
        e.stopPropagation();
        this.props.yangStore.toggleAboutBS();
    };

    BSclickAniEnded = e => {
        e.stopPropagation();
        this.props.yangStore.toggleAboutBS();
        this.props.yangStore.activateAboutCloser();
    };

    render() {
        const {
            yangStore
        } = this.props;
        console.log(yangStore.aboutBSclicked)
        return (
            <BackspaceBox
                draggable="true"
                onAnimationEnd={this.BSclickAniEnded}
                onClick={this.BSclicked}
                isClicked={yangStore.aboutBSclicked}
                isMobile={isMobile}
            >
                <Backspace
                    isMobile={isMobile}
                >
                    {`<`}
                </Backspace>
            </BackspaceBox>
        )
    }
};

export default AboutBackspace;