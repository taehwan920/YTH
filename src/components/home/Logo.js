import React from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { inject, observer } from 'mobx-react';
import BigTxt from '../BigTxt';

const LogoWrapper = styled.div`
    background-color: #6aaf66;
    width: max-content;
    height: max-content;
    padding: ${props => props.isMobile ? '15px 35px' : '20px 40px'};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    transition: opacity 0.3s ease;
    opacity: ${props => props.menuClicked ? '0' : '1'};
`;

@inject('yangStore')
@observer

class Logo extends React.Component {
    tempKey = -1;
    render() {
        const {
            yangStore
        } = this.props;
        const fontSizes = isMobile ? [[90, 'YTH'], [65, 'PORT'], [60, 'FOLIO']] : [[140, 'YTH'], [101, 'PORT'], [92.5, 'FOLIO']];
        return (
            <LogoWrapper
                draggable="true"
                isMobile={isMobile}
                onTransitionEnd={yangStore.whenAniEnded}
                menuClicked={yangStore.menuClicked}
            >
                {fontSizes.map(item => {
                    this.tempKey++
                    return (
                        <BigTxt
                            fontSize={item[0]}
                            txtItem={item[1]}
                            key={this.tempKey}
                        />
                    )
                })}
            </LogoWrapper>
        )
    }
};

export default Logo;