import { useEffect, useState } from "react";
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
    const [scrollingUp, setScrollingUp] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;

            if (currentPosition > 0 && !scrollingUp) {
                setScrollingUp(true);
            } else if (currentPosition === 0 && scrollingUp) {
                setScrollingUp(false);
            }
        };

        const initializeScrollPosition = () => {
            const currentPosition = window.scrollY;
            setScrollingUp(currentPosition > 0);
        };

        initializeScrollPosition();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollingUp]);

    return (
        <StyledHeader scrollingUp={scrollingUp}>
            <Container>
                <Logo />
                <Menu menuItems={menuItems} />
            </Container>
        </StyledHeader>
    );
};

type StyledHeaderPropsType = {
    scrollingUp?: boolean
}

const StyledHeader = styled.header<StyledHeaderPropsType>`
    position: fixed;
    top: 0;
    width: 100%;
    padding: 26px 0;
    z-index: 9999;
    transition: background-color 0.3s ease;
    background-color: ${props => props.scrollingUp ? "#414141d1" : "transparent"};
`