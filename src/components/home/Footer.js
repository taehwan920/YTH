import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

const HomeFooter = styled.footer`
    width: 100%;
    height: 100px;
    font-size: 30px;
    position: absolute;
    bottom: ${props => props.menuClicked ? '-100' : '0'}px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;

    @media (max-width: 599px) {
        height: 60px;
        font-size: 20px;
    }

    @media (max-height: 500px) {
        display: none;
    }
`;

const FooterLink = styled.a`
    letter-spacing: 2px;
    transition: all 0.5s ease;
    &:hover {
        color: #3f48cc;
        letter-spacing: 5px;
    }
    &:first-child {
        margin-right: 90px;
    }
`;

@inject('yangStore')
@observer

class Footer extends React.Component {
    render() {
        const {
            yangStore
        } = this.props;
        return (
            <HomeFooter
                menuClicked={yangStore.menuClicked}
            >
                <FooterLink
                    draggable="true"
                    href="https://github.com/taehwan920"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    GITHUB
                </FooterLink>
                <FooterLink
                    draggable="true"
                    href="https://hitzi.tistory.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    BLOG
                </FooterLink>
            </HomeFooter>
        )
    }
};

export default Footer;