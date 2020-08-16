import React from 'react';
import styled from 'styled-components';
import MenuOpener from '../components/MenuOpener';

const AboutWrapper = styled.main`
    background-color: #c3d3c2;
    width: 100%;
    height: 100%;
`;

class About extends React.Component {
    render() {
        const {
            yangStore
        } = this.props;
        return (
            <AboutWrapper>
                jgkfldjgklfdjgkldfjklgjdfklgjlfkdjgklfdfjkl
                <MenuOpener
                    menuTxt="ABOUT"
                />
            </AboutWrapper>
        )
    }
};

export default About;