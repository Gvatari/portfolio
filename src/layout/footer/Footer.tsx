import styled from "styled-components";
import { Logo } from "../../components/Logo";
import { FlexWrapper } from "../../components/FlexWrapper.styled";
import { Icon } from "../../components/Icon";

export const Footer = () => {
    return (
        <StyledFooter id="contact">
            <List marginRight={"115px"}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About me</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </List>
            <List marginRight={"56px"}>
                <li><a href="#">Contact:</a></li>
                <li><a href="#">Email: notitanic33@gmail.com</a></li>
                <li><a href="#">Inst: notitanic33</a></li>
                <li><a href="#">Calls: +7 (900) - 121 - 54 -54</a></li>
            </List>
            <FlexWrapper direction="column" justify="space-between">
                <UpBox>
                    <Logo />
                    <UpButton role="button" href="#home">
                        <Icon
                            iconId={'arrowLeft'}
                            width={'36'}
                            height={'36'}
                            viewBox={'0 0 36 36'}
                        />
                    </UpButton>
                </UpBox>
                <Copyright>Copyright © 2021, Notitanic</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.section`
    display: flex;
    justify-content: center;
    background: linear-gradient(131deg, #414141 0%, #2D2D2D 100.52%);
    padding: 50px 0;
`

type StyledListPropsType = {
    marginRight?: string
}

const List = styled.ul<StyledListPropsType>`
    list-style: none;
    margin-right: ${props => props.marginRight};
    li + li {
        margin-top: 18px;
    }
    li>a {
        text-decoration: none;
        font-size: 18px;
        font-weight: 300;
        color: #E4E4E4;
    }
`

const UpBox = styled.div`
    display: flex;
    align-items: center;

    span {
        margin: 0 32px 0 10px;
    }
`

const Copyright = styled.span`
    font-size: 18px;
    font-weight: 300;
    color: #E4E4E4;
`

const UpButton = styled.a`
    text-decoration: none;
    min-width: 60px;
    height: 60px;
    background-color: #E2A300;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(90deg);
    cursor: pointer;
`