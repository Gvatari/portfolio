import styled from "styled-components";
import { CardSkills } from "../../components/CardSkills";
import { FlexWrapper } from "../../components/FlexWrapper.styled";

const skillItems = [
    {
        showIcon: true,
        iconId: "productDesign",
        titleCard: "Product Design",
        iconWidth: "107",
        iconHeight: "108",
        iconViewBox: "0 0 107 108"
    },
    {
        showIcon: false,
        iconText: "UX/UI",
        titleCard: "UX/UI Design",
    },
    {
        showIcon: true,
        iconId: "iconDesign",
        titleCard: "Icon Design",
    },
    {
        showIcon: true,
        iconId: "logoDesign",
        titleCard: "Logo Design",
    },
    {
        showIcon: true,
        iconId: "backend",
        titleCard: "Backend",
    },
    {
        showIcon: true,
        iconId: "frontend",
        titleCard: "Frontend",
    },
    {
        showIcon: true,
        iconId: "motion",
        titleCard: "Motion",
    },
]

export const Skills = () => {
    return (
        <StyledSkills>
            <FlexWrapper justify={"center"} align={"center"} wrap={"wrap"} gap={"30px"}>
                    {skillItems.map((item, index) => (
                    <CardSkills
                        key={index}
                        showIcon={item.showIcon}
                        iconId={item.iconId}
                        titleCard={item.titleCard}
                        iconWidth={item.iconWidth}
                        iconHeight={item.iconHeight}
                        iconViewBox={item.iconViewBox}
                        iconText={item.iconText}
                    />
                ))}
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 80px;
    margin-top: 113px;
`