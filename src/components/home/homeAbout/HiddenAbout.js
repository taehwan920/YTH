import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import BigTxt from '../../BigTxt';

const AboutHidden = styled.div`
    width: max-content;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 5px;
    opacity: ${props => props.about ? '1' : '0'};
    position: absolute;
    transition: top 0.5s, left 0.5s ease-in-out;
    z-index: 4;

    top: ${props => props.aniEnd ? `calc(50% - ${props.aboutHei / 2}px)` : `${props.aboutY === 0 ? null : props.aboutY}px`};
    left: ${props => props.aniEnd ? `calc(50% - ${props.aboutWid / 2}px)` : `${props.aboutX === 0 ? null : props.aboutX}px`};
`;

@inject('yangStore')
@observer

class HiddenAbout extends React.Component {
    clickAniEnded = e => {
        e.stopPropagation();
        window.location.href = '/about';
    };

    render() {
        const {
            yangStore
        } = this.props;
        return (
            <AboutHidden
                about={yangStore.about}
                aboutHei={yangStore.aboutHei}
                aboutWid={yangStore.aboutWid}
                aniEnd={yangStore.aniEnd}
                aboutX={yangStore.aboutX}
                aboutY={yangStore.aboutY}
                onTransitionEnd={this.clickAniEnded}
            >
                <BigTxt
                    fontSize={yangStore.menuFontSize}
                    txtItem="ABOUT"
                />
            </AboutHidden>
        )
    }
};

export default HiddenAbout;