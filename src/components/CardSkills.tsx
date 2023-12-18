import styled from "styled-components";
import { Icon } from "../components/icon/Icon";
import { TitleCardSkills } from "./TitleCardSkills";

type CardSkillsTypeProps = {
    iconId?: string
    titleCard?: string
    showIcon: boolean
    iconText?: string
    iconWidth?: string
    iconHeight?: string
    iconViewBox?: string
}

export const CardSkills = (props: CardSkillsTypeProps) => {
    return (
        <StyledCardSkills>
            {props.showIcon ? (
                <Icon
                    iconId= {props.iconId} 
                    width= {props.iconWidth || '75'}
                    height= {props.iconHeight || '75'}
                    viewBox= {props.iconViewBox || '0 0 75 75'}
                />
            ) : (
                <IconText>{props.iconText}</IconText>
            )}
            <TitleCardSkills text={props.titleCard} />
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
const IconText = styled.span`
    font-size: 48px;
    font-weight: 700;
`

