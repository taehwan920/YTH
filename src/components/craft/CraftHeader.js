import React from 'react';
import styled from 'styled-components';
import BigTxt from '../BigTxt';
import { inject, observer } from 'mobx-react';
import CraftBackspace from './craftHeader/CraftBackspace';
import CraftBackPage from './craftHeader/CraftBackPage';
import CraftNextPage from './craftHeader/CraftNextPage';

const HeaderWrapper = styled.header`
    background: rgba(106, 175, 102, 0.97);
    width: 100%;
    height: max-content;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 2px solid #6aaf66;
    border: none;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 500;
`;

const HeaderTxtWrapper = styled.div`
    width: max-content;
    height: max-content;
    letter-spacing: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

@inject('yangStore')
@observer

class CraftHeader extends React.Component {
    render() {
        const {
            yangStore
        } = this.props;
        const {
            craftIdxNow,
            craftLastIdx,
        } = yangStore;
        return (
            <HeaderWrapper>
                {craftIdxNow === 1
                    ? <CraftBackspace />
                    : <CraftBackPage />
                }
                <HeaderTxtWrapper
                    draggable="true"
                >
                    <BigTxt
                        fontSize={yangStore.menuFontSize}
                        txtItem="CRAFT"
                    />
                </HeaderTxtWrapper>
                {craftIdxNow === craftLastIdx
                    ? null
                    : <CraftNextPage />}
            </HeaderWrapper>
        )
    }
};

export default CraftHeader;