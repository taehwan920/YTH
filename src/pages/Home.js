import React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { isMobile } from 'react-device-detect';
import Logo from '../components/home/Logo';
import Footer from '../components/home/Footer';
import HomeCover from '../components/home/HomeCover';
import HomeAbout from '../components/home/HomeAbout';
import HomeCraft from '../components/home/HomeCraft';

const HomeWrapper = styled.main`
    background-color: #c3d3c2;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HomeContentsBox = styled.section`
    width: 100%;
    height: max-content;
    padding-bottom: ${props => props.isMobile ? 50 : 0}px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    transition: all 0.3s ease;

    @media (max-width: 899px) {
        height: 90vh;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
`;

@inject('yangStore')
@observer

class Home extends React.Component {
    render() {
        const {
            yangStore
        } = this.props;
        yangStore.changeFontSize(isMobile);
        return (
            <HomeWrapper>
                <HomeCover />
                <HomeContentsBox
                    isMobile={isMobile}
                >
                    <HomeAbout />
                    <Logo />
                    <HomeCraft />
                </HomeContentsBox>
                <Footer />
            </HomeWrapper>
        )
    }
};

export default Home;