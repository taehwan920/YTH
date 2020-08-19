import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

const Counter = styled.div`
    width: 40px;
    height: 100%;
    margin: 0px 3px;
    border-radius: 3px;
    trasition: background 1s ease;
    
    &:first-child {
        margin-left: 0px;
    }
    &:last-child{
        margin-right: 0px;
    }
    
    background: ${props => {
        if (props.itemIdx === props.idxNow) {
            return '#3f48cc;';
        } else {
            return '#6aaf66;';
        }
    }}
`;

@inject('yangStore')
@observer

class CounterItem extends React.Component {
    render() {
        const {
            itemIdx,
            yangStore,
        } = this.props;
        return (
            <Counter
                data-key={itemIdx}
                itemIdx={itemIdx}
                idxNow={yangStore.craftIdxNow}
            />
        )
    }
};

export default CounterItem;