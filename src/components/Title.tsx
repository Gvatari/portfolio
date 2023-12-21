import styled from "styled-components";

type TitlePropsType = {
    text?: string
    fontSize?: string
}

export const Title = (props: TitlePropsType) => {
    return (
        <StyledTitle>
            {props.text}
        </StyledTitle>
    );
};

export const StyledTitle = styled.h2<TitlePropsType>`
    font-size: ${props => props.fontSize};
    text-align: center;
`