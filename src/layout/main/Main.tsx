import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper.styled";
import photo from "../../assets/images/photo.webp"
import { Photo } from "../../components/Photo.styled";
import { Container } from "../../components/Container.styled";

export const Main = () => {
    return (
        <StyledMain id="home">
            <Container>
                <MainTextContainer>
                    <span>Hello</span>
                    <Name>I'm Alexey Artyomenko</Name>
                    <MainTitle>I'm frontend developer.</MainTitle>
                </MainTextContainer>
                <Photo src={photo} alt="#" />
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    background: linear-gradient(102deg, #2C2C2C 1.56%, #1C1C1C 95.55%);
    min-height: 100vh;
    padding-top: 102px;
`

const MainTextContainer = styled.div`
    color: #E4E4E4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 27px;

    span {
        font-size: 48px;
    }
`

const Name = styled.h2`
    font-size: 72px;
    max-width: 447px;
    line-height: 1;
`

const MainTitle = styled.h1`
    font-size: 18px;
`