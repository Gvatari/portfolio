import styled from "styled-components";

type NameContainerPropsType = {
    text: string
}

export const NameContainer = (props: NameContainerPropsType) => {
    return (
        <StyledNameContainer fontSize={"24px"} >
            {props.text}
        </StyledNameContainer>
    );
};

type StyledNameContainerPropsType = {
    fontSize?: string
}

export const StyledNameContainer = styled.h2<StyledNameContainerPropsType>`
    font-size: ${props => props.fontSize};
`