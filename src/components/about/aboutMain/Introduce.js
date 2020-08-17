import React from 'react';
import styled from 'styled-components';
import BigTxt from '../../BigTxt';

const IntroduceWrapper = styled.article`
    width: 100%;
    height: max-content;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`;

const IntroduceTitle = styled.div`
    width: max-content;
    height: max-content;
    margin-bottom: 20px;
    transition: all 0.3s ease;
    letter-spacing: 10px;

    @media (max-width: 799px) {
        letter-spacing: 5px;
    }
`;

const IntroSloganBox = styled.div`
    width: 100%;
    height: max-content;
    margin: 20px 0px;
    display: flex;
    justify-content: flex-end;
    font-family: "Noto Sans KR";
`;

const IntroDescBox = styled.div`
    width: 100%;
    height: max-content;
    margin: 20px 0px;
    font-size: 24px;
    font-family: "Noto Sans KR";
`;

class Introduce extends React.Component {
    render() {
        return (
            <IntroduceWrapper>
                <IntroduceTitle>
                    <BigTxt
                        fontSize={60}
                        txtItem="Introduce"
                    />
                </IntroduceTitle>
                <IntroSloganBox>
                    <BigTxt
                        fontSize={60}
                        txtItem="호기심"
                    />
                    <BigTxt
                        fontSize={60}
                        txtItem="&"
                    />
                    <BigTxt
                        fontSize={60}
                        txtItem="집요함"
                    />
                </IntroSloganBox>
                <IntroDescBox>
                    "호기심을 갖고 집요하게 파고드는 Front-End 개발자"
                </IntroDescBox>
            </IntroduceWrapper>
        )
    }
};

export default Introduce;