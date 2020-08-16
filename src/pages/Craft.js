import React from 'react';
import styled from 'styled-components';

const CraftWrapper = styled.main`
    background-color: #c3d3c2;
    width: 100%;
    height: 100%;
`;

class Craft extends React.Component {
    render() {
        return (
            <CraftWrapper>
                Craft
            </CraftWrapper>
        )
    }
};

export default Craft;