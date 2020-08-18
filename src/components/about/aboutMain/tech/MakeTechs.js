import React from 'react';
import TechItems from './makeTechs/TechItems';

export default class extends React.Component {
    techContents = [
        {
            techLogo: './images/logos/html.png',
            techName: 'HTML',
            nameColor: '#e44d26',
            techDesc: 'html5는요html5는요html5는요html5는요html5는요html5는요html5는요html5는요html5는요html5는요html5는요html5는요html5는요html5는요html5는요html5는요html5는요html5는요html5는요html5는요html5는요html5는요'
        },
        {
            techLogo: './images/logos/css.png',
            techName: 'CSS',
            nameColor: '#379ad6',
            techDesc: `css는요`
        },
        {
            techLogo: './images/logos/js.png',
            techName: 'JavaScript',
            techDesc: 'html5는요'
        },
        {
            techLogo: './images/logos/react.png',
            techName: 'ReactJS',
            nameColor: '#0f6b9a',
            techDesc: 'html5는요'
        },
        {
            techLogo: './images/logos/node.png',
            techName: 'NodeJS',
            nameColor: '#8bc74b',
            techDesc: 'html5는요'
        },
        {
            techLogo: './images/logos/electron.png',
            techName: 'ElectronJS',
            nameColor: '#d5feff',
            techDesc: 'html5는요'
        },
        {
            techLogo: './images/logos/python.png',
            techName: 'Python',
            nameColor: '#3571a3',
            techDesc: 'html5는요'
        },
        {
            techLogo: './images/logos/mysql.png',
            techName: 'MySQL',
            nameColor: '#26557c',
            techDesc: 'html5는요'
        },
        {
            techLogo: './images/logos/aws.png',
            techName: 'AWS',
            nameColor: '#ff9900',
            techDesc: 'html5는요',
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