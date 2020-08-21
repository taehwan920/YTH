import React from 'react';
import CraftItem from './makeCrafts/CraftItem';
import { inject, observer } from 'mobx-react';

@inject('yangStore')
@observer

class MakeCrafts extends React.Component {
    componentDidMount() {
        this.props.yangStore.getLastIdx(this.craftContents);
    };

    craftContents = [
        {
            imgUrl: './images/crafts/pd.png',
            craftTitle: 'PoongDung',
            githubUrl: 'https://github.com/taehwan920/poong-dung-react',
            craftUrl: 'http://poongdung.ga/',
            techs: [
                {
                    name: 'ReactJS',
                    color: '#61dafb'
                },
                {
                    name: 'JavaScript',
                    color: '#000'
                },
                {
                    name: 'CSS',
                    color: '#379ad6'
                },
                {
                    name: 'HTML',
                    color: '#e44d26'
                },
                {
                    name: 'NodeJS',
                    color: '#8cc84b'
                },
                {
                    name: 'Python',
                    color: '#3571a3'
                },
                {
                    name: 'MySQL',
                    color: '#26557c'
                },
                {
                    name: 'AWS',
                    color: '#ff9900'
                },
            ],
            desc: `한강 수온 체크 풀스택 프로젝트 풍덩💦입니다. 현재 수온은 물론 최근 48시간 동안의 수온 변동, 그리고 같은 시간대의 한 달 전 수온 변동 추이를 차트로 표시해주는 기능을 구현했습니다.\n제작 기간은 4월 초부터 약 3주 소요되었습니다.\n풍덩💦 프로젝트를 완성하며 개발 환경 구축부터 서비스 배포까지 웹 서비스 제작의 모든 과정을 경험했습니다. 그래서 IaaS인 AWS를 활용하여 배포했으며 이 과정에서 리눅스 사용법도 학습했습니다.`
        },
        {
            imgUrl: './images/crafts/yt.png',
            craftTitle: 'YangTube',
            githubUrl: 'https://github.com/taehwan920/yangtube',
            craftUrl: 'https://5f33fbde2a723578f21bb406--boring-ardinghelli-8b5e2f.netlify.app',
            techs: [
                {
                    name: 'ReactJS',
                    color: '#0F6B9A'
                },
                {
                    name: 'Styled-component',
                    color: '#0F6B9A'
                },
                {
                    name: 'JavaScript',
                    color: '#000'
                },
                {
                    name: 'CSS',
                    color: '#379ad6'
                },
                {
                    name: 'HTML',
                    color: '#e44d26'
                },
                {
                    name: 'Netlify',
                    color: '#00C9B8'
                },
            ],
            desc: `풍덩💦 프로젝트를 진행하며 희망 직무를 Front-End 개발자로 정한 뒤, 관련 기술 스택을 더 깊이 공부하기 위해 YouTube의 동영상 플레이어 페이지 클론 코딩 프로젝트인 YangTube🎬를 제작했습니다. Front-End단만 구현했기 때문에 Netlify로 배포했습니다.\n제작기간은 7월초부터 약 한 달 소요되었습니다.\n언어 변경, 테마 색상 변경, 가상 키보드, 동영상 조작 단축키, 자동 재생 등 해당 페이지의 가능한 한 모든 기능을 구현했습니다. 그 과정에서 자바스크립트 이벤트 관련 API와 기능, CSS 레이아웃 개념에 많이 익숙해졌으며, OOP의 강력함도 체험했습니다.`
        },
        {
            imgUrl: './images/crafts/yth.png',
            craftTitle: 'YTH',
            githubUrl: 'https://github.com/taehwan920/YTH',
            craftUrl: '/',
            techs: [
                {
                    name: 'ReactJS',
                    color: '#0F6B9A'
                },
                {
                    name: 'Styled-component',
                    color: '#0F6B9A'
                },
                {
                    name: 'NodeJS',
                    color: '#8cc84b'
                },
                {
                    name: 'MobX',
                    color: '#db5a14'
                },
                {
                    name: 'CSS',
                    color: '#379ad6'
                },
                {
                    name: 'HTML',
                    color: '#e44d26'
                },
            ],
            desc: `현재 보고계시는 포트폴리오 프로젝트입니다. React JS로 제작했으며 Heroku로 배포했습니다.\n제작기간은 8월 초부터 약 2주 소요되었습니다.\nYangTube🎬 프로젝트를 진행하며 컴포넌트 간 props / state 주고 받기가 굉장히 번거롭다는 React JS의 한계를 체감했습니다. 그래서 본 프로젝트는 상태 관리 라이브러리인 MobX를 도입하여 진행했습니다.`
        },
    ];

    craftIdx = 0;

    render() {
        return (
            <React.Fragment>
                {this.craftContents.map(content => {
                    this.craftIdx++
                    return (
                        <CraftItem
                            key={this.craftIdx}
                            craftIdx={this.craftIdx}
                            content={content}
                        />
                    )
                })}
            </React.Fragment>
        )
    }
};

export default MakeCrafts;