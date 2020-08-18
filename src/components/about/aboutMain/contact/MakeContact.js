import React from 'react';
import ContactItem from './ContactItem';

export default class extends React.Component {
    contactContents = [
        {
            type: 'Name : ',
            content: 'Yang Taehwan',
        },
        {
            type: 'Mail : ',
            content: 'taehwan920@gmail.com',
        },
        {
            type: 'Phone : ',
            content: '+82 10 6650 7057',
        },
    ];

    contactIdx = -1;
    render() {
        return (
            <React.Fragment>
                {this.contactContents.map(content => {
                    this.contactIdx++
                    return (
                        <ContactItem
                            key={this.contactIdx}
                            type={content.type}
                            content={content.content}
                        />
                    )
                })}
            </React.Fragment>
        )
    }
};