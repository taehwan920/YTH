import React from 'react';
// import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

@inject('yangStore')
@observer

export default class extends React.Component {
    render() {
        const {
            yangStore
        } = this.props;
        return (
            <div>
                this is home page
                {yangStore.yangStore}
            </div>
        )
    }
};