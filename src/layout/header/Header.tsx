import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

const menuItems = [
    { name: "Home", anchor: "#home" },
    { name: "About me", anchor: "#about" },
    { name: "Portfolio", anchor: "#portfolio" },
    { name: "Contact", anchor: "#contact" }
];

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu menuItems={menuItems} />
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    gap: 219px;
    padding: 26px 0;
`