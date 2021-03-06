import React from 'react';
import styled from 'styled-components';
import debounce from '../../../../debounce';

const TechItemWrapper = styled.div`
    width: 100%;
    height: max-content;
    margin: 20px 0px;
    display: flex;
    flex-direction: column;
    transition: all .7s ease;
    transform: ${props => props.active ? 'translateX(0%)' : 'translateX(-30%)'};
    opacity: ${props => props.active ? 1 : 0};
`;

const TechTitleBox = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    align-items: flex-end;
`;

const TechLogoBox = styled.div`
    width: max-content;
    height: max-content;
    margin-right: 20px;

    @media(max-width: 899px) {
        margin-right: 10px;
    }
`;

const TechLogo = styled.img`
    height: 100px;
    transition: all .3s ease;

    @media(max-width: 899px) {
        height: 80px;
    }
`;

const TechName = styled.span`
    color: ${props => props.nameColor ? props.nameColor : 'black'};
    text-shadow: 2px 2px 2px gray;
    font-size: 50px;
    letter-spacing: 2px;
    transition: all .3s ease;

    @media(max-width: 899px) {
        font-size: 36px;
    }
`;

const TechDescBox = styled.div`
    padding: 15px;
    padding-bottom: 0px;

    @media(max-width: 899px) {
        padding: 9px;
        padding-bottom: 0px;
    }
`;

const TechDesc = styled.span`
    white-space: pre-wrap;
    font-family: 'Noto Sans', 'Noto Sans KR';
    font-size: 20px;
    transition: all .3s ease;

    @media(max-width: 899px) {
        font-size: 16px;
    }
`;

class TechItems extends React.Component {
    state = {
        active: false
    };

    checkScroll = () => {
        const slideItem = this.techItemRef;
        const slideInAt = (window.scrollY + window.innerHeight) - slideItem.clientHeight / 2;
        const itemBottom = slideItem.offsetTop + slideItem.clientHeight;
        const isHalfShown = slideInAt > slideItem.offsetTop;
        const isNotScrolledPast = window.scrollY < itemBottom;
        isHalfShown && isNotScrolledPast
            ? this.setState({ active: true })
            : this.setState({ active: false });
    };

    componentDidMount() {
        window.addEventListener('scroll', debounce(this.checkScroll));
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', debounce(this.checkScroll));
    };

    render() {
        const {
            techLogo,
            techName,
            nameColor,
            techDesc
        } = this.props;
        const {
            active
        } = this.state;
        return (
            <TechItemWrapper
                ref={ref => this.techItemRef = ref}
                active={active}
            >
                <TechTitleBox
                    draggable="true"
                >
                    <TechLogoBox>
                        <TechLogo
                            src={techLogo}
                        />
                    </TechLogoBox>
                    <TechName
                        nameColor={nameColor}
                    >
                        {techName}
                    </TechName>
                </TechTitleBox>
                <TechDescBox>
                    <TechDesc>
                        {techDesc}
                    </TechDesc>
                </TechDescBox>
            </TechItemWrapper>
        )
    }
};

export default TechItems;