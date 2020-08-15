import React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import Logo from '../components/Logo';
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
    overflow: hidden;
`;

const HomeContentsBox = styled.section`
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

@inject('yangStore')
@observer

class Home extends React.Component {
    render() {
        return (
            <HomeWrapper>
                <HomeCover />
                <HomeContentsBox>
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