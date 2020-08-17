import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

const CloserWrapper = styled.div`
    background: #c3d3c2;
    width: 150%;
    height: 100%;
    position: relative;
    transform: ${props => props.closerActive ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 1.32s cubic-bezier(0.55, 0.15, 0.3, 1);
    z-index: 1000;

    @media (max-width: 799px){
        transition: transform 1s cubic-bezier(0.55, 0.15, 0.3, 1);
    }
`;

const CloserColorPanel = styled.div`
    background: #3f48cc;
    width: 20%;
    height: 100%;
    position: absolute;
    right: 0;

    @media (max-width: 799px){
        width: 30%;
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