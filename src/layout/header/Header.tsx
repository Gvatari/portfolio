import styled from "styled-components";
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/Menu";
import { Container } from "../../components/Container.styled";

const menuItems = [
    { name: "Home", anchor: "#home" },
    { name: "About me", anchor: "#about" },
    { name: "Portfolio", anchor: "#portfolio" },
    { name: "Contact", anchor: "#contact" }
];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Logo />
                <Menu menuItems={menuItems} />
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    padding: 26px 0;
`