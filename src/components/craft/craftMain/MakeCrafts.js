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
            imgUrl: './images/crafts/yth.png',
            craftTitle: 'YTH',
            techs: [
                {
                    name: 'ReactJS',
                    color: '#61dafb'
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
            desc: `현재 보고계시는 포트폴리오 프로젝트입니다. 현재 보고계시는 포트폴리오 프로젝트입니다. 현재 보고계시는 포트폴리오 프로젝트입니다. 현재 보고계시는 포트폴리오 프로젝트입니다. 현재 보고계시는 포트폴리오 프로젝트입니다. `
        },
        {
            imgUrl: './images/crafts/yt.png',
            craftTitle: 'YangTube',
            techs: [
                {
                    name: 'ReactJS',
                    color: '#61dafb'
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
            desc: `현재 보고계시는 포트폴리오 프로젝트입니다. 현재 보고계시는 포트폴리오 프로젝트입니다. 현재 보고계시는 포트폴리오 프로젝트입니다. 현재 보고계시는 포트폴리오 프로젝트입니다. 현재 보고계시는 포트폴리오 프로젝트입니다. `
        },
        {
            imgUrl: './images/crafts/pd.png',
            craftTitle: 'PoongDung',
            techs: [
                {
                    name: 'ReactJS',
                    color: '#61dafb'
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
            desc: `현재 보고계시는 포트폴리오 프로젝트입니다. 현재 보고계시는 포트폴리오 프로젝트입니다. 현재 보고계시는 포트폴리오 프로젝트입니다. 현재 보고계시는 포트폴리오 프로젝트입니다. 현재 보고계시는 포트폴리오 프로젝트입니다. `
        }
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
                            imgUrl={content.imgUrl}
                            craftTitle={content.craftTitle}
                            techs={content.techs}
                            desc={content.desc}
                        />
                    )
                })}
            </React.Fragment>
        )
    }
};

export default MakeCrafts;