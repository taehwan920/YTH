import React from 'react';
import styled, { css } from 'styled-components';
import AboutTitles from './AboutTitles';
import MakeContact from './contact/MakeContact';
import debounce from '../../debounce';

const ContactWrapper = styled.article`
    width: 100%;
    margin-bottom: 100px;
    position: relative;

    @media(max-width: 899px) {
        margin-bottom: 50px;
    }
`;

const ContactBox = styled.div`
    width: 100%;
    transition: all .7s ease;
    height: max-content;

    ${props => {
        if (props.slidedIn) {
            return css`
                transform: translateY(0%);
                opacity: 1;
            `;
        } else {
            return css`
                transform: translateY(35%);
                opacity: 0;

                @media(max-width: 899px) {
                    transform: translateY(15%);
                }
            `;
        }
    }}
`;

const TinyInfo = styled.span`
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 14px;

    @media(max-width: 899px) {
        bottom: -40px;
    }
`;

class Contact extends React.Component {
    state = {
        slidedIn: false
    };

    checkScroll = () => {
        const contact = this.contactRef;
        const slideInAt = (window.scrollY + window.innerHeight) - contact.clientHeight / 2;
        const contactBottom = contact.offsetTop + contact.clientHeight;
        const isHalfShown = slideInAt > contact.offsetTop;
        const isNotScrolledPast = window.scrollY < contactBottom;
        isHalfShown && isNotScrolledPast
            ? this.setState({ slidedIn: true })
            : this.setState({ slidedIn: false });
    };

    componentDidMount() {
        window.addEventListener('scroll', debounce(this.checkScroll));
    };

    componentWillUnount() {
        window.removeEventListener('scroll', debounce(this.checkScroll));
    };

    render() {
        return (
            <ContactWrapper
                ref={ref => this.contactRef = ref}

            >
                <AboutTitles
                    txtItem="Contact"
                />
                <ContactBox
                    slidedIn={this.state.slidedIn}
                >
                    <MakeContact />
                    <TinyInfo>
                        * 클릭 시 클립 보드에 복사됩니다.
                    </TinyInfo>
                </ContactBox>
            </ContactWrapper>
        )
    }
};

export default Contact;