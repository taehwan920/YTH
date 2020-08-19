import React from 'react';
import styled from 'styled-components';
import BigTxt from '../../../BigTxt';
import TechBoxes from './craftItem/TechBoxes';
import { inject, observer } from 'mobx-react';

const ItemWrapper = styled.article`
    width: min-content;
    height: 100%;
    margin-top: 90px;
    position: absolute;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 1.1s ease-out;
    transform: ${props => {
        if (props.craftIdx < props.idxNow) {
            return `translateX(calc(-50% - 250vw));`;
        } else if (props.craftIdx === props.idxNow) {
            return `translateX(-50%);`;
        } else if (props.craftIdx > props.idxNow) {
            return `translateX(calc(50% + 250vw));`;
        }
    }}

    @media(max-width: 899px) {
        width: 100%;
        margin-top: 75px;
        transition: transform 0.75s ease-out;
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
    box-shadow: 0 4px 5px 2px rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 1px rgba(0, 0, 0, 0.4);
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
    white-space: pre-wrap;
    font-family: 'Noto Sans', 'Noto Sans KR';
    font-size: 18px;

    @media(max-width: 899px) {
        font-size: 16px;
        padding: 0px 30px;
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
        } = content;
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
                            fontSize={70}
                            txtItem={craftTitle}
                        />
                    </TitleBox>
                </UpperBox>
                <TechBoxes
                    techs={techs}
                />
                <DescBox>{desc}</DescBox>
            </ItemWrapper>
        )
    }
};

export default CraftItem;