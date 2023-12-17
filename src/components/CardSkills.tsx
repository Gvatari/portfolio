import styled from "styled-components";
import { Icon } from "../components/icon/Icon";
import { NameContainer } from "./NameContainer.styled";

type CardSkillsTypeProps = {
    iconId: string
    titleCard: string
}

export const CardSkills = (props: CardSkillsTypeProps) => {
    return (
        <StyledCardSkills>
            <Icon 
                iconId={props.iconId} 
                width={'65'} 
                height={'48'} 
                viewBox={'0 0 65 48'} 
            />
            <NameContainer text={props.titleCard} />
        </StyledCardSkills>
    );
};

const StyledCardSkills = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 34px;
    width: 270px;
    height: 270px;
    border-radius: 29px;
    background: #2A2A2A;
`

