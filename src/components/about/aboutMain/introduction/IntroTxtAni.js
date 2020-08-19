import React from 'react';
import styled from 'styled-components';
import BigTxt from '../../../BigTxt';

const AniWrapper = styled.div`
    width: max-content;
    height: max-content;
    position: relative;
    display: flex;
    overflow: hidden;
`;

const AnimatedTxt = styled.div`
    width: max-content;
    height: max-content;
    transition: all .45s ease-in-out;
`;

const UpToDown = styled(AnimatedTxt)`
    transform: ${props => props.isSwitchON ? 'translateY(0)' : 'translateY(-100%)'};
`;

const DownToUp = styled(AnimatedTxt)`
    transform: ${props => props.isSwitchON ? 'translateY(0)' : 'translateY(100%)'};
`;

class IntroTxtAni extends React.Component {
    ifAniEnded = e => {
        e.stopPropagation();
        if (this.props.aniEnded === null) return;
        this.props.aniEnded();
    };

    render() {
        const {
            fontSize,
            isSwitchON,
            txtItem,
        } = this.props;
        const txtArr = txtItem.split('');
        return (
            <AniWrapper>
                <UpToDown
                    key={this.txtIdx}
                    isSwitchON={isSwitchON}
                >
                    <BigTxt
                        fontSize={fontSize}
                        txtItem={txtArr[0]}
                    />
                </UpToDown>
                <DownToUp
                    key={this.txtIdx}
                    isSwitchON={isSwitchON}
                    onTransitionEnd={this.ifAniEnded}
                >
                    <BigTxt
                        fontSize={fontSize}
                        txtItem={txtArr[1]}
                    />
                </DownToUp>
                <UpToDown
                    key={this.txtIdx}
                    isSwitchON={isSwitchON}
                >
                    <BigTxt
                        fontSize={fontSize}
                        txtItem={txtArr[2]}
                    />
                </UpToDown>
            </AniWrapper>
        )
    }
};

export default IntroTxtAni;