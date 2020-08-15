import React from 'react';
import styled from 'styled-components';
import BigTxt from '../BigTxt';
import { inject, observer } from 'mobx-react';

const HomeAboutBox = styled.article`
    width: max-content;
    height: max-content;
    display: flex;
    align-items: center;
`;

const AboutItem = styled.a`
    width: max-content;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AboutArrow = styled(AboutItem)`
    margin-right: 32px;
    padding-bottom: 10px;
`;

const AboutTxt = styled(AboutItem)`
    letter-spacing: 5px;
`;

@inject('yangStore')
@observer

class HomeAbout extends React.Component {
    render() {
        const {
            yangStore
        } = this.props;
        return (
            <HomeAboutBox>
                <AboutArrow>
                    <BigTxt
                        fontSize={yangStore.ArrowFontSize}
                        txtItem="<"
                    />
                </AboutArrow>
                <AboutTxt>
                    <BigTxt
                        fontSize={yangStore.MenuFontSize}
                        txtItem="ABOUT"
                    />
                </AboutTxt>
            </HomeAboutBox>
        )
    }
};

export default HomeAbout;