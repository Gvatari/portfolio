import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper.styled";
import photo from "../../assets/images/photo.webp"
import { Photo } from "../../components/Photo.styled";
import { Header } from "../header/Header";

export const Main = () => {
    return (
        <StyledMain>
            <Header />
            <FlexWrapper gap={"142px"} justify={"center"} align={"center"}>
                <MainTextContainer>
                    <span>Hello</span>
                    <Name>I'm Alexey Artyomenko</Name>
                    <MainTitle>I'm frontend developer.</MainTitle>
                </MainTextContainer>
                <Photo src={photo} alt="#" />
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    background: linear-gradient(102deg, #2C2C2C 1.56%, #1C1C1C 95.55%);
`

const MainTextContainer = styled.div`
    color: #E4E4E4;
    display: flex;
    flex-direction: column;
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