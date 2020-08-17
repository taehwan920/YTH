import React from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { inject, observer } from 'mobx-react';
import Introduce from './aboutMain/Introduction';
import Tech from './aboutMain/Tech';

const MainWrapper = styled.section`
    width: 90%;
    max-width: 1200px;
    min-width: 480px;
    height: max-content;
    margin-top: ${props => props.isMobile ? 80 : 100}px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`;

@inject('yangStore')
@observer

class AboutMain extends React.Component {
    render() {
        return (
            <MainWrapper
                isMobile={isMobile}
            >
                <Introduce />
                <Tech />
            </MainWrapper>
        )
    }
};

export default AboutMain;