import styled from "styled-components";

type MenuPropsType = {
    menuItems: Array<{ name: string; anchor: string }>
}
export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <li key={index}>
                        <a href={item.anchor}>{item.name}</a>
                    </li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        align-items: center;
        gap: 145px;
        min-height: 100%;
        list-style: none;
    }

    a {
        text-decoration: none;
        color: #E4E4E4;
        font-size: 18px;
        font-weight: 300;
    }
`