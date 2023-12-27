import styled from "styled-components";

type TitlePropsType = {
    text?: string
    fontSize?: string
    fontWeight?: string
    as?: keyof JSX.IntrinsicElements
}

export const Title = (props: TitlePropsType) => {
    return (
        <StyledTitle as={props.as} fontWeight={props.fontWeight} fontSize={props.fontSize} >
            {props.text}
        </StyledTitle>
    );
};

export const StyledTitle = styled.h2<TitlePropsType>`
    font-size: ${props => props.fontSize};
    text-align: center;
    color: #fff;
    font-weight: ${props => props.fontWeight};
`