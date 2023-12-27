import styled from "styled-components";

type TitleCardSkillsPropsType = {
    text?: string
}

export const TitleCardSkills = (props: TitleCardSkillsPropsType) => {
    return (
        <StyledNameContainer fontSize={"24px"} >
            {props.text}
        </StyledNameContainer>
    );
};

type StyledTitleCardSkillsPropsType = {
    fontSize?: string
}

export const StyledNameContainer = styled.h2<StyledTitleCardSkillsPropsType>`
    font-size: ${props => props.fontSize};
    color: #E4E4E4;
    font-weight: 300;
`