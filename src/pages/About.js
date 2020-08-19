import React from 'react';
import styled from 'styled-components';
import AboutHeader from '../components/about/AboutHeader';
import AboutMain from '../components/about/AboutMain';
import MenuOpener from '../components/MenuOpener';
import MenuCloser from '../components/MenuCloser';

const AboutWrapper = styled.main`
    background-color: #c3d3c2;
    width: 100vw;
    height: max-content;
    min-height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    overflow-y: scroll;
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
                <MenuCloser />
            </AboutWrapper>
        )
    }
};

export default About;