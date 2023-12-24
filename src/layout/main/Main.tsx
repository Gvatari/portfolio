import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper.styled";
import photo from "../../assets/images/photo.webp"
import { Photo } from "../../components/Photo.styled";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justify={"space-around"} align={"center"}>
                <div>
                    <span>Hello</span>
                    <Name>I'm Alexey Artyomenko</Name>
                    <MainTitle>I'm frontend developer.</MainTitle>
                </div>
                <Photo photoWidth={"456px"} src={photo} alt="#" />
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    background: linear-gradient(102deg, #2C2C2C 1.56%, #1C1C1C 95.55%);
    min-height: 100vh;
`

const Name = styled.h2`
    
`

const MainTitle = styled.h1`
    
`