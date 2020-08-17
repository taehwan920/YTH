import React from 'react';
import styled from 'styled-components';
import BigTxt from '../../../BigTxt';

const AniWrapper = styled.div`
    width: max-content;
    height: max-content;
    display: flex;
    overflow: hidden;
`;

const UpToDown = styled.div`
    width: max-content;
    height: max-content;
    transition: all 1s ease-in-out;
    transform: ${props => props.isSwitchON ? 'translateY(0%)' : 'translateY(-100%)'};
    transform: translateY(${props => props.isSwitchON ? 0 : -100}%);
`;

const DownToUp = styled.div`
    width: max-content;
    height: max-content;
    transition: all 1s ease-in-out;
    transform: ${props => props.isSwitchON ? 'translateY(0%)' : 'translateY(100%)'};
`;

class IntroTxtAni extends React.Component {
    txtIdx = -1;

    ifAniEnded = e => {
        e.stopPropagation();
        if (this.props.aniEnded === null) return;
        console.log('animated!')
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
                {txtArr.map(txt => {
                    this.txtIdx++
                    if (this.txtIdx % 2 === 0) {
                        return (
                            <UpToDown
                                key={this.txtIdx}
                                isSwitchON={isSwitchON}
                            >
                                <BigTxt
                                    fontSize={fontSize}
                                    txtItem={txt}
                                />
                            </UpToDown>
                        )
                    } else {
                        return (
                            <DownToUp
                                key={this.txtIdx}
                                isSwitchON={isSwitchON}
                                onTransitionEnd={this.ifAniEnded}
                            >
                                <BigTxt
                                    fontSize={fontSize}
                                    txtItem={txt}
                                />
                            </DownToUp>
                        )
                    }
                })}
            </AniWrapper>
        )
    }
};

export default IntroTxtAni;