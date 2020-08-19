import React from 'react';
import styled from 'styled-components';

const TechBox = styled.div`
    width: 100%;
    height: max-content;
    padding: 25px;
    padding-bottom: 0px;
    display: flex;
    flex-wrap: wrap;

    @media(max-width: 899px) {
        padding: 18px;
        padding-left: 25px;
    }
`;

const Tech = styled.span`
    background: ${props => props.BGcolor};
    width: max-content;
    height: max-content;
    padding: 3px 12px;
    margin-right: 10px;
    border-radius: 20px;
    font-family: 'Noto Sans';
    color: white;
    font-size: 16px;

    @media(max-width: 899px) {
        font-size: 14px;
    }
`;

export default ({ techs }) => {
    let techIdx = -1;
    return (
        <TechBox>
            {techs.map(tech => {
                techIdx++
                return (
                    <Tech
                        key={techIdx}
                        draggable="true"
                        BGcolor={tech.color}
                    >
                        {tech.name}
                    </Tech>
                )
            })}
        </TechBox>
    )
};