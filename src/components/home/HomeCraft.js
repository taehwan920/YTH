import React from 'react';
import styled from 'styled-components';
import BigTxt from '../BigTxt';
import { inject, observer } from 'mobx-react';

const HomeCraftBox = styled.article`
    width: max-content;
    height: max-content;
    display: flex;
    align-items: center;
`;

const CraftItem = styled.a`
    width: max-content;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CraftArrow = styled(CraftItem)`
    margin-left: 32px;
    padding-bottom: 10px;
`;

const CraftTxt = styled(CraftItem)`
    letter-spacing: 5px;
`;

@inject('yangStore')
@observer

class HomeCraft extends React.Component {
    render() {
        const {
            yangStore
        } = this.props;
        return (
            <HomeCraftBox>
                <CraftTxt>
                    <BigTxt
                        fontSize={yangStore.MenuFontSize}
                        txtItem="CRAFT"
                    />
                </CraftTxt>
                <CraftArrow>
                    <BigTxt
                        fontSize={yangStore.ArrowFontSize}
                        txtItem=">"
                    />
                </CraftArrow>
            </HomeCraftBox>
        )
    }
};

export default HomeCraft;