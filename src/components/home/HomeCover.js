import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { observer, inject } from 'mobx-react';

const CoverWrapper = styled.div`
    background: #c3d3c2;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.75s ease-in;
    z-index: 1000;

    ${props => props.unwrapped && css`
        opacity: 0;
    `}
    ${props => !props.unwrapped && css`
        opacity: 1;
    `}
    
`;

const UnwrapKF = keyframes`
    0%, 30% { width: 100px; }
    100% {width: 0px; }
`;

const CoverUnwrapper = styled.div`
    background: black;
    width: 0px;
    height: 3px;
    animation: ${UnwrapKF} 0.7s ease-out;
    ${props => props.unwrpped && css`
        display: none;
    `}
`;

@inject('yangStore')
@observer

class HomeCover extends React.Component {
    render() {
        const {
            yangStore
        } = this.props;
        return (
            <CoverWrapper
                ref={ref => this.coverRef = ref}
                onTransitionEnd={() => this.coverRef.style.zIndex = -1000}
                unwrapped={yangStore.coverUnwrapped}
            >
                <CoverUnwrapper
                    unwrapped={yangStore.coverUnwrapped}
                    onAnimationEnd={yangStore.ifUnwrapped}
                />
            </CoverWrapper>
        )
    }
};

export default HomeCover;