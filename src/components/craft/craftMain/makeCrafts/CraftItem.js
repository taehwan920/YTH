import React from 'react';
import styled from 'styled-components';
import BigTxt from '../../../BigTxt';
import TechBoxes from './craftItem/TechBoxes';
import { inject, observer } from 'mobx-react';
import Refers from './craftItem/Refers';
import { isMobile } from 'react-device-detect';

const ItemWrapper = styled.article`
    width: min-content;
    height: max-content;
    margin-top: 60px;
    position: absolute;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform .8s ease-out;
    transform: ${props => {
        if (props.craftIdx < props.idxNow) {
            return `translateX(calc(-50% - 200vw));`;
        } else if (props.craftIdx === props.idxNow) {
            return `translateX(-50%);`;
        } else if (props.craftIdx > props.idxNow) {
            return `translateX(calc(50% + 200vw));`;
        }
    }}

    @media(max-width: 899px) {
        width: 100%;
        margin-top: 50px;
        transition: transform 0.55s ease-out;
    }
`;


const UpperBox = styled.div`
    width: max-content;
    height: max-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;

    @media(max-width: 899px) {
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const ImgBox = styled.div`
    width: max-content;
    height: max-content;
    padding: 0px 20px;
    display: flex;
    justify-content: center;

    @media(max-width: 899px) {
        width: 100%;
    }
`;

const CraftImg = styled.img`
    width: 100%;
    max-width: 750px;
    min-width: 300px;
    border: none;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px, rgba(0, 0, 0, 0.2) 0px 3px 1px -2px;
`;

const TitleBox = styled.div`
    width: max-content;
    height: max-content;
    margin: 15px 0px 15px 15px;
    letter-spacing: 2px;

    @media(max-width: 899px) {
        margin: 20px 0px 0px 0px;
    }
`;

const DescBox = styled.div`
    width: 100%;
    padding: 20px 0px 0px 25px;
    margin-bottom: 10px;
    white-space: pre-wrap;
    font-family: 'Noto Sans', 'Noto Sans KR';
    font-size: 18px;

    @media(max-width: 899px) {
        font-size: 16px;
        padding: 0px 30px;
        margin: 10px 0px;
    }
`;

@inject('yangStore')
@observer

class CraftItem extends React.Component {
    render() {
        const {
            craftIdx,
            content,
            yangStore
        } = this.props;
        const {
            imgUrl,
            craftTitle,
            techs,
            desc,
            githubUrl,
            craftUrl,
        } = content;
        const fontSize = isMobile ? 40 : 70;
        return (
            <ItemWrapper
                data-key={craftIdx}
                craftIdx={craftIdx}
                idxNow={yangStore.craftIdxNow}
            >
                <UpperBox>
                    <ImgBox>
                        <CraftImg
                            src={imgUrl}
                        />
                    </ImgBox>
                    <TitleBox>
                        <BigTxt
                            fontSize={fontSize}
                            txtItem={craftTitle}
                        />
                    </TitleBox>
                </UpperBox>
                <TechBoxes
                    techs={techs}
                />
                <DescBox>
                    {desc}
                </DescBox>
                <Refers
                    github={githubUrl}
                    craft={craftUrl}
                />
            </ItemWrapper>
        )
    }
};

export default CraftItem;