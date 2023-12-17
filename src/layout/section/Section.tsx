import { CardSkills } from "../../components/CardSkills";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Section = () => {
    return (
        <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
            <FlexWrapper as="section" justify={"center"} align={"center"} wrap={"wrap"}>
                <CardSkills iconId={"productDesign"} titleCard={"Product Design"} />
                <CardSkills iconId={"iconDesign"} titleCard={"Icon Design"} />
                <CardSkills iconId={"logoDesign"} titleCard={"Logo Design"} />
                <CardSkills iconId={"backend"} titleCard={"Backend"} />
                <CardSkills iconId={"frontend"} titleCard={"Frontend"} />
                <CardSkills iconId={"motion"} titleCard={"Motion"} />
            </FlexWrapper>
        </FlexWrapper>
    );
};