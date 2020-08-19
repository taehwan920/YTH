import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import BigTxt from './BigTxt';
import { isMobile } from 'react-device-detect';

const OpenerWrapper = styled.div`
    background: #c3d3c2;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    transition: opacity 0.3s ease-in-out;
    opacity: ${props => props.txtMoved ? 0 : 1};
    z-index: 1000;
`;

const TxtWrapper = styled.div`
    width: max-content;
    height: max-content;
    position: absolute;
    transition: top 0.6s, left 0.6s ease-in-out;
    letter-spacing: 5px;

    top: ${props => props.openerLoaded ? `${props.nowScroll + 10}px` : `calc(50vh - ${props.txtHei / 2}px)`};
    top: ${props => props.openerLoaded ? `10px` : `calc(50vh - ${props.txtHei / 2}px)`};
    left: ${props => `calc(50% - ${props.txtWid / 2}px)`};
`;

@inject('yangStore')
@observer

class MenuOpener extends React.Component {
    componentDidMount() {
        setTimeout(this.props.yangStore.loadingIsOver, 150);
    };

    getTxtSize = () => {
        const textSize = JSON.parse(localStorage.getItem('txtSize'));
        return textSize
    };

    movingOver = e => {
        e.stopPropagation();
        this.props.yangStore.movingIsOver();
    };

    transitionIsOver = e => {
        e.stopPropagation();
        this.openerRef.style.zIndex = -1000
        this.props.yangStore.firstON();
    };

    render() {
        const {
            menuTxt,
            yangStore
        } = this.props;
        yangStore.changeFontSize(isMobile);
        const [txtWid, txtHei] = this.getTxtSize();
        const nowScroll = window.scrollY;
        return (
            <OpenerWrapper
                ref={ref => this.openerRef = ref}
                onTransitionEnd={this.transitionIsOver}
                txtMoved={yangStore.txtMoved}
            >
                <TxtWrapper
                    onTransitionEnd={this.movingOver}
                    openerLoaded={yangStore.openerLoaded}
                    nowScroll={nowScroll}
                    txtWid={txtWid}
                    txtHei={txtHei}
                >
                    <BigTxt
                        fontSize={yangStore.menuFontSize}
                        txtItem={menuTxt}
                    />
                </TxtWrapper>
            </OpenerWrapper>
        )
    }
};

export default MenuOpener;