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
    transition: all 0.45s ease-in;
    z-index: 1000;

    ${props => props.unwrapped && css`
        opacity: 0;
    `}
    ${props => !props.unwrapped && css`
        opacity: 1;
    `}
    
`;

const LineBox = styled.div`
    width: 175px;
    height: 2.5px;
    overflow: hidden;
`;

const UnwrapKF = keyframes`
    0% { transform: translateX(-350px); }
    92% { transform: translateX(175px); }
    100% { transform: translateX(175px); }
`;

const CoverLine = styled.div`
    background: black;
    width: 350px;
    height: 100%;
    transform: translateX(-350px);
    animation: ${UnwrapKF} 1s ease-in-out;
    ${props => props.unwrapped && css`
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
                <LineBox>
                    <CoverLine
                        unwrapped={yangStore.coverUnwrapped}
                        onAnimationEnd={yangStore.ifUnwrapped}
                    />
                </LineBox>
            </CoverWrapper>
        )
    }
};

export default HomeCover;