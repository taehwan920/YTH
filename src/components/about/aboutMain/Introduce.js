import React from 'react';
import styled from 'styled-components';
import BigTxt from '../../BigTxt';
import IntroTxtAni from './introduce/IntroTxtAni';
import { inject, observer } from 'mobx-react';

const IntroduceWrapper = styled.article`
    width: 100%;
    height: max-content;
    margin: 40px 0px;
    position: relative;
    display: flex;
    flex-direction: column;
`;

const IntroduceTitle = styled.div`
    width: 100%;
    height: max-content;
    padding-bottom: 5px;
    border-bottom: 2px solid #6aaf66;
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
    margin: 30px 0px;
    display: flex;
    flex-direction: column;
    font-family: "Noto Sans KR";
`;

const IntroSloganLeft = styled(IntroSloganBox)`
    align-items: flex-start;
`;

const IntroSloganRight = styled(IntroSloganBox)`
    align-items: flex-end;
`;

const IntroDescBox = styled.div`
    width: max-content;
    height: max-content;
    margin-top: 10px;
    font-size: 24px;
    font-family: "Noto Sans KR";
`;

@inject('yangStore')
@observer

class Introduce extends React.Component {
    render() {
        const {
            yangStore
        } = this.props;
        return (
            <IntroduceWrapper>
                <IntroduceTitle>
                    <BigTxt
                        fontSize={60}
                        txtItem="Introduction"
                    />
                </IntroduceTitle>
                <IntroSloganRight>
                    <IntroTxtAni
                        fontSize={55}
                        txtItem="호기심"
                        isSwitchON={yangStore.firstTxtSwitch}
                        aniEnded={yangStore.secondON}
                    />
                    <IntroDescBox>
                        "끝없는 프로그래밍 공부의 원동력"
                    </IntroDescBox>
                </IntroSloganRight>
                <IntroSloganLeft>
                    <IntroTxtAni
                        fontSize={55}
                        txtItem="집요함"
                        isSwitchON={yangStore.secondTxtSwitch}
                        aniEnded={yangStore.thirdON}
                    />
                    <IntroDescBox>
                        "문제를 해결할 때 까지 물고 늘어지는 끈기"
                    </IntroDescBox>
                </IntroSloganLeft>
                <IntroSloganRight>
                    <IntroTxtAni
                        fontSize={55}
                        txtItem="꾸준함"
                        isSwitchON={yangStore.thirdTxtSwitch}
                        aniEnded={null}
                    />
                    <IntroDescBox>
                        "프로그래밍도 외국어를 배우듯이"
                    </IntroDescBox>
                </IntroSloganRight>
            </IntroduceWrapper>
        )
    }
};

export default Introduce;