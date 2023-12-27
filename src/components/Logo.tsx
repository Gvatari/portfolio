import styled from "styled-components";
import { FlexWrapper } from "./FlexWrapper.styled";
import { Icon } from "./Icon";

export const Logo = () => {
    return (
        <FlexWrapper align={"center"}>
            <a href="">
                <Icon
                    iconId={'notitanic'}
                    width={'65'}
                    height={'48'}
                    viewBox={'0 0 65 48'}
                />
            </a>
            <TitleLogo>Notitanic</TitleLogo>
        </FlexWrapper>
    );
};

const TitleLogo = styled.span`
    margin-left: 10px;
    font-size: 18px;
    font-weight: 400;
    font-family: Nico Moji;
    color: #fff;
`