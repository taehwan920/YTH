import React from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

const ItemWrapper = styled.div`
    width: max-content;
    height: max-content;
    padding-left: 40px;
    margin-top: ${props => props.isMobile ? 15 : 40}px;
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;

    transition: all 0.3s ease;

    @media(max-width: 899px) {
        padding-left: 20px;
    }

    &:nth-child(1) {
        margin-top: ${props => props.isMobile ? 20 : 50}px;
    }
`;

const ItemType = styled.div`
    width: max-content;
    height: 50px;
    margin-right: ${props => props.isMobile ? 10 : 20}px;
    font-family: 'Noto sans';
    font-size: ${props => props.isMobile ? 20 : 28}px;
    white-space: pre-wrap;

    @media(max-width: 899px){
        margin-right: 10px;
    }
`;

const ItemContent = styled.span`
    width: max-content;
    height: 50px;
    white-space: pre-wrap;
    font-size: ${props => props.isMobile ? 20 : 28}px;
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
                isMobile={isMobile}
            >
                <ItemType
                    isMobile={isMobile}
                >
                    {type}
                </ItemType>
                <ItemContent
                    isMobile={isMobile}
                >
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