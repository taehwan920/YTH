import React from 'react';
import styled from 'styled-components';
import AboutTitles from './AboutTitles';
import MakeTechs from './tech/MakeTechs';

const TechWrapper = styled.article`
    width: 100%;
    height: max-content;
    margin: 40px 0px;
    display: flex;
    flex-direction: column;
`;

class Tech extends React.Component {
    render() {
        return (
            <TechWrapper>
                <AboutTitles
                    txtItem="Tech"
                />
                <MakeTechs />
            </TechWrapper>
        )
    }
};

export default Tech;