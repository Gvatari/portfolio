import styled from "styled-components";
import { CardSkills } from "../../components/CardSkills";
import { FlexWrapper } from "../../components/FlexWrapper.styled";

export const Skills = () => {
    return (
        <StyledSkills>
            <FlexWrapper justify={"center"} align={"center"} wrap={"wrap"} gap>
                <CardSkills showIcon iconId={"productDesign"} titleCard={"Product Design"} iconWidth={'107'} iconHeight={'108'} iconViewBox={'0 0 107 108'} />
                <CardSkills showIcon={false} iconText={"UX/UI"} titleCard={"UX/UI Design"} />
                <CardSkills showIcon iconId={"iconDesign"} titleCard={"Icon Design"} />
                <CardSkills showIcon iconId={"logoDesign"} titleCard={"Logo Design"} />
                <CardSkills showIcon iconId={"backend"} titleCard={"Backend"} />
                <CardSkills showIcon iconId={"frontend"} titleCard={"Frontend"} />
                <CardSkills showIcon iconId={"motion"} titleCard={"Motion"} />
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #74e774;
    min-height: 100vh;
`