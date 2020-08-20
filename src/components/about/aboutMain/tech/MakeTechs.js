import React from 'react';
import TechItems from './makeTechs/TechItems';

export default class extends React.Component {
    techContents = [
        {
            techLogo: './images/logos/html.png',
            techName: 'HTML',
            nameColor: '#e44d26',
            techDesc: `시맨틱 태그, 멀티미디어 태그, data-* Attribute 등 HTML5에서 새로 추가된 기능 및 DOM API를 주로 공부했습니다. 이 중 멀티미디어 태그에 관심이 많아 <video>태그, <canvas>태그를 각각 프로젝트에서 메인으로 활용한 경험이 있습니다. 특히 <canvas>는 interactive한 디자인과 기능을 구현할 수 있어 가능성이 무한한 태그라고 판단해 더 깊게 공부하고 있습니다.`
        },
        {
            techLogo: './images/logos/css.png',
            techName: 'CSS',
            nameColor: '#379ad6',
            techDesc: `display, position, Flexbox, Gridbox 등 CSS 레이아웃을 주로 학습했습니다. 이 중 Gridbox는 다룰 줄 아는 정도이며, animation, transition에도 관심이 많아 각 프로젝트에서 다양하게 활용했습니다. CSS로 웬만한 디자인 요구사항은 구현 가능합니다. SASS등의 전처리기는 사용해본 경험이 있는 정도입니다.`
        },
        {
            techLogo: './images/logos/js.png',
            techName: 'JavaScript',
            techDesc: '자바스크립트의 동작 원리에 관하여 주로 공부했습니다. Event loop, Hoisting 등 자바스크립트만의 특징은 물론 이벤트 버블링, 이벤트 위임, debounce, throttle 등 Event Handling관련 개념 또한 흥미를 갖고 학습했습니다. ES6문법을 주로 사용하고 있으며 이를 위해 개인 프로젝트에서 Babel을 활용하고 있습니다. 자바스크립트의 약점을 보완할 수 있는 TypeScript도 학습하고 있습니다.'
        },
        {
            techLogo: './images/logos/react.png',
            techName: 'ReactJS',
            nameColor: '#0f6b9a',
            techDesc: '클래스 컴포넌트, 함수 컴포넌트를 다룰 줄 알며, React Hooks에도 관심이 있어 학습하고 있습니다. state의 생명주기와 props를 활용하여 결과물을 만들어내는 방법을 알고 있습니다. React JS를 사용하며 OOP의 개념도 간접적으로 체득했습니다. styled-components, react-router등의 라이브러리를 주로 활용했습니다.'
        },
        {
            techLogo: './images/logos/node.png',
            techName: 'NodeJS',
            nameColor: '#8bc74b',
            techDesc: 'Express.js를 사용하여 데이터 제공 API 서버 제작 경험 및 MVC 구조를 제작한 경험이 있습니다. MVC 구조는 개념만 이해하고 한 번 만들어 본 수준입니다.'
        },
        {
            techLogo: './images/logos/electron.png',
            techName: 'ElectronJS',
            nameColor: '#d5feff',
            techDesc: '데스크탑 앱을 만들고 싶어 접하게 됐습니다. 간단한 위젯형 데스크탑 앱을 만들어본 경험이 있습니다. 조금 다룰 줄 아는 수준입니다.'
        },
        {
            techLogo: './images/logos/python.png',
            techName: 'Python',
            nameColor: '#3571a3',
            techDesc: '개인 프로젝트에서 pygame 모듈로 만든 데스크탑 앱 제작 및 백엔드 데이터 파싱에 활용해 본 수준입니다. Python은 주로 자료구조와 알고리즘, 그리고 코딩테스트 Problem Solving 학습에 활용했습니다. 프로그래머스 Level3 수준의 문제까지는 풀 수 있는 수준입니다.'
        },
        {
            techLogo: './images/logos/mysql.png',
            techName: 'MySQL',
            nameColor: '#26557c',
            techDesc: '개인 프로젝트에서 Open API에서 받아온 데이터를 파싱하여 관계형 데이터베이스에 저장하기 위해 사용했습니다. CRUD 기능을 사용할 줄 아는 수준입니다.'
        },
        {
            techLogo: './images/logos/mobx.png',
            techName: 'mobX',
            nameColor: '#db5a14',
            techDesc: 'React JS로 프로젝트를 제작하며 컴포넌트 간에 props와 state를 주고 받는 과정이 너무 번거롭고 복잡하다고 판단해 사용했습니다. 본 포트폴리오 사이트를 제작할 때 활용했으며, 기본적인 종합적 상태 관리 기능을 사용할 줄 아는 수준입니다.'
        },
        {
            techLogo: './images/logos/aws.png',
            techName: 'AWS',
            nameColor: '#ff9900',
            techDesc: '개인 풀스택 프로젝트를 배포할 때 활용했습니다. EC2, RDS, Route53 서비스와 SSH을 사용하여 클라우드 컴퓨터 배포의 기초 원리 및 방법을 학습했습니다.',
        },
    ];

    techIdx = -1;
    render() {
        return (
            <React.Fragment>
                {this.techContents.map(content => {
                    this.techIdx++
                    return (
                        <TechItems
                            key={this.techIdx}
                            techLogo={content.techLogo}
                            techName={content.techName}
                            nameColor={content.nameColor}
                            techDesc={content.techDesc}
                        />
                    )
                })}
            </React.Fragment>
        )
    }
};