import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

const CloserWrapper = styled.div`
    background: #c3d3c2;
    width: 200%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    transform: ${props => props.closerActive ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 1.17s cubic-bezier(0.55, 0.15, 0.3, 1);
    z-index: 1000;

    @media (max-width: 799px){
        width: 200%;
        transition: transform 0.8s cubic-bezier(0.55, 0.3, 0.15, 1);
    }
`;

const CloserColorPanel = styled.div`
    background: #3f48cc;
    width: 30%;
    height: 100%;
    position: absolute;
    right: 0;

    @media (max-width: 799px){
        width: 50%;
    }
`;

@inject('yangStore')
@observer

class AboutCloser extends React.Component {
    closerWorked = e => {
        e.stopPropagation();
        window.location.href = '/';
    };

    render() {
        const {
            yangStore
        } = this.props;
        return (
            <CloserWrapper
                closerActive={yangStore.aboutCloserActive}
                onTransitionEnd={this.closerWorked}
            >
                <CloserColorPanel />
            </CloserWrapper>
        )
    }
};

export default AboutCloser;