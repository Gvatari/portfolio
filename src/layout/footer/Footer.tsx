import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { FlexWrapper } from "../../components/FlexWrapper.styled";

export const Footer = () => {
    return (
        <StyledFooter>
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
                    <span>Notitanic</span>
                    <UpButton role="button" href="#" />
                </UpBox>
                <span>Copyright © 2021, Notitanic</span>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.section`
    display: flex;
    justify-content: center;
    background-color: #6b6bdb;
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
    }
`

const UpBox = styled.div`
    display: flex;
    align-items: center;

    span {
        margin: 0 32px 0 10px;
    }
`

const UpButton = styled.a`
    text-decoration: none;
    min-width: 60px;
    height: 60px;
    background-color: #E2A300;
    border-radius: 50%;
    cursor: pointer;
`