import React from 'react';
import styled from 'styled-components';
import MenuOpener from '../components/MenuOpener';
import AboutHeader from '../components/about/AboutHeader';

const AboutWrapper = styled.main`
    background-color: #c3d3c2;
    width: 100%;
    height: 100%;
`;

class About extends React.Component {
    render() {
        return (
            <AboutWrapper>
                <AboutHeader />
                <MenuOpener
                    menuTxt="ABOUT"
                />
            </AboutWrapper>
        )
    }
};

export default About;