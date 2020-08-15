import React from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { inject, observer } from 'mobx-react';
import BigTxt from './BigTxt';

const LogoWrapper = styled.div`
    background-color: #6aaf66;
    width: max-content;
    height: max-content;
    padding: 20px 40px;
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
    render() {
        const {
            yangStore
        } = this.props;
        const fontSizes = isMobile ? [[100, 'YTH'], [75, 'PORT'], [70, 'FOLIO']] : [[140, 'YTH'], [101, 'PORT'], [92.5, 'FOLIO']];
        return (
            <LogoWrapper
                draggable="true"
                menuClicked={yangStore.menuClicked}
            >
                {fontSizes.map(item => {
                    return (
                        <BigTxt
                            fontSize={item[0]}
                            txtItem={item[1]}
                        />
                    )
                })}
            </LogoWrapper>
        )
    }
};

export default Logo;