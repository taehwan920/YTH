import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import CounterItem from './pageCounter/CounterItem';

const CounterWrapper = styled.div`
    width: max-content;
    height: 10px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 24px;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 899px) {
        top: 20px;
    }
`;

@inject('yangStore')
@observer

class PageCounter extends React.Component {
    render() {
        const {
            yangStore
        } = this.props;
        const numbers = yangStore.craftLastIdx;
        const numArr = [];
        for (let i = 1; i <= numbers; i++) numArr.push(i);
        return (
            <CounterWrapper>
                {numArr.map(item => {
                    return (
                        <CounterItem
                            key={item}
                            itemIdx={item}
                        />
                    )
                })}
            </CounterWrapper>
        )
    }
};

export default PageCounter;