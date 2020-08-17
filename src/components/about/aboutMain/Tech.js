import React from 'react';
import styled from 'styled-components';
import AboutTitles from './AboutTitles';

const TechWrapper = styled.article`
    width: 100%;
    height: max-content;
    margin: 40px 0px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TechSmallTitle = styled.div`
    width: calc(100% - 30px);
    height: max-content;
    margin: 10px 0px;
    font-family: 'Noto Sans';
    font-size: 40px;
    text-align: center;
`;

class Tech extends React.Component {
    render() {
        return (
            <TechWrapper>
                <AboutTitles
                    txtItem="Tech"
                />
            </TechWrapper>
        )
    }
};

export default Tech;