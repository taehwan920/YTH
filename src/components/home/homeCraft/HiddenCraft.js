import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import BigTxt from '../../BigTxt';



const CraftHidden = styled.div`
    width: max-content;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    letter-spacing: 5px;
    opacity: ${props => props.craft ? '1' : '0'};
    transition: top 0.5s, left 0.5s ease-in-out;
    z-index: 4;

    top: ${props => props.aniEnd ? `calc(50% - ${props.craftHei / 2}px)` : `${props.craftY === 0 ? null : props.craftY}px`};
    left: ${props => props.aniEnd ? `calc(50% - ${props.craftWid / 2}px)` : `${props.craftX === 0 ? null : props.craftX}px`};
`;

@inject('yangStore')
@observer

class HiddenCraft extends React.Component {
    render() {
        const {
            yangStore
        } = this.props;
        return (
            <CraftHidden
                aniEnd={yangStore.aniEnd}
                craft={yangStore.craft}
                craftWid={yangStore.craftWid}
                craftHei={yangStore.craftHei}
                craftX={yangStore.craftX}
                craftY={yangStore.craftY}
            >
                <BigTxt
                    fontSize={yangStore.menuFontSize}
                    txtItem="CRAFT"
                />
            </CraftHidden>
        )
    }
};

export default HiddenCraft;