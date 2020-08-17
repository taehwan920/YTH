import React from 'react';
import styled from 'styled-components';
import MenuOpener from '../components/MenuOpener';
import AboutHeader from '../components/about/AboutHeader';
import AboutCloser from '../components/about/AboutCloser';
import AboutMain from '../components/about/AboutMain';

const AboutWrapper = styled.main`
    background-color: #c3d3c2;
    width: 100%;
    height: max-content;
    min-height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
`;

class About extends React.Component {
    render() {
        return (
            <AboutWrapper>
                <AboutHeader />
                <AboutMain />
                <MenuOpener
                    menuTxt="ABOUT"
                />
                <AboutCloser />
            </AboutWrapper>
        )
    }
};

export default About;