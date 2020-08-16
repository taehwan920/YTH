import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.main`
    background-color: #c3d3c2;
    width: 100%;
    height: 100%;
`;

class About extends React.Component {
    render() {
        return (
            <AboutWrapper>
                About
            </AboutWrapper>
        )
    }
};

export default About;