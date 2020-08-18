import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
    width: max-content;
    height: max-content;
    padding-left: 40px;
    margin-top: 40px;
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const ItemType = styled.div`
    width: max-content;
    height: 50px;
    margin-right: 20px;
    font-family: 'Noto sans';
    font-size: 28px;
    white-space: pre-wrap;

    @media(max-width: 899px){
        margin-right: 10px;
    }
`;

const ItemContent = styled.span`
    width: max-content;
    height: 50px;
    white-space: pre-wrap;
    font-size: 28px;
    font-family: 'Noto sans';
`;

const HiddenInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: default;
`;

const Copied = styled.div`
    background: #181818;
    width: max-content;
    height: max-content;
    padding: 12px;
    border-radius: 7.5px;
    position: absolute;
    top: -40px;
    left: 60%;
    font-family: 'Noto sans';
    color: white;
    font-size: 14px;
    transition: all .4s ease-in-out;

    opacity: ${props => props.clicked ? 1 : 0};
`;

export default class extends React.Component {
    state = {
        clicked: false
    };

    copyToClipboard = () => {
        const hidden = this.hiddenRef;
        hidden.value = this.props.content;
        console.log(this.props.content);
        hidden.select();
        document.execCommand('copy');
    };

    toggleClicked = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    itemClicked = e => {
        e.stopPropagation();
        this.toggleClicked();
        this.copyToClipboard();
        setTimeout(this.toggleClicked, 400);
    };

    render() {
        const {
            type,
            content,
        } = this.props;
        const {
            clicked
        } = this.state;
        return (
            <ItemWrapper
                onClick={this.itemClicked}
            >
                <ItemType>
                    {type}
                </ItemType>
                <ItemContent>
                    {content}
                </ItemContent>
                <Copied
                    clicked={clicked}
                >
                    Copied!
                </Copied>
                <HiddenInput
                    ref={ref => this.hiddenRef = ref}
                />
            </ItemWrapper>
        )
    }
};