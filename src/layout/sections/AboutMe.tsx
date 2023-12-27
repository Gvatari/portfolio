import styled from "styled-components";
import { Photo } from "../../components/Photo.styled";
import photo1 from "../../assets/images/photo-1.webp"
import photo2 from "../../assets/images/photo-2.webp"
import photo3 from "../../assets/images/photo-3.webp"
import { Skills } from "./Skills";

export const AboutMe = () => {
    return (
        <StyledAboutMe id="about">
            <Skills />
            <AboutMeContainer>
                <Description>
                    <Photo absolute top={"-28px"} left={"-246px"} photoWidth={"272px"} src={photo1} alt="#" />
                    <h2>About me</h2>
                    <p>Hello again everyone! So, you already know that my name is Gleb. A little about myself: student, 18 y.o., athlete-football player, I love creativity since childhood, I live in Donetsk, Ukraine. Why programming? Everything is elementary - I like it, the profession of the future, thanks to which I can provide myself and fulfill my dream - travel, at the moment I specialize in web design, front-end and back-end development, turnkey websites. Why should you choose me? I approach each order with great responsibility and love, as I want to make a name for myself, exclude plagiarism and negligence, fully study the project, the client and its target audience, work for quality, trying to make an order as quickly and uniquely as possible, taking into account all the edits and wishes.
                        By trusting me, you will get the maximum return for your project, save your nerves and time.
                        If you are interested in me , you want to know something more or use my services, then I will provide all my contacts below.
                    </p>
                    <Photo absolute top={"484px"} left={"-246px"} photoWidth={"272px"} src={photo2} alt="#" />
                    <Photo absolute top={"260px"} left={"400px"} photoWidth={"272px"} src={photo3} alt="#" />
                </Description>
            </AboutMeContainer>
        </StyledAboutMe>
    )
}

const StyledAboutMe = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(131deg, #414141 0%, #2D2D2D 100.52%);
    min-height: 100vh;
    padding-bottom: 60px;
`

const AboutMeContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Description = styled.div`
    height: fit-content;
    position: relative;
    border-radius: 14px;
    margin-top: 86px;
    position: relative;

    h2 {
        position: absolute;
        top: -34px;
        left: 78px;
        font-size: 48px;
        font-weight: 400;
        color: #E4E4E4;
    }

    p {
        font-size: 20px;
        font-weight: 300;
        color: #FFF;
        padding: 63px;
        width: 446px;
        border-radius: 14px;
        background: #2C2C2C;
    }
`