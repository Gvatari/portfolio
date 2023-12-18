import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper.styled";
import photo from "../../assets/images/photo.webp"

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justify={"space-around"} align={"center"}>
                <div>
                    <span>Hello</span>
                    <Name>I'm Alexey Artyomenko</Name>
                    <MainTitle>I'm frontend developer.</MainTitle>
                </div>
                <Photo src={photo} alt="#" />
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    background-color: #afe8af;
`

const Name = styled.h2`
    
`

const MainTitle = styled.h1`
    
`

const Photo = styled.img`
    width: 456px;
    object-fit: cover;
    border-radius: 20px
`