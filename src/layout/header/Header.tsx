import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

const menuItem = ["Home", "About me", "Portfolio", "Contact"];

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu menuItems={menuItem} />
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background: linear-gradient(102deg, #2C2C2C 1.56%, #1C1C1C 95.55%);
    display: flex;
    justify-content: center;
    gap: 219px;
    padding-top: 26px;
`