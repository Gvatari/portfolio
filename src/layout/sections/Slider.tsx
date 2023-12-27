import styled from "styled-components";
import slider from "../../assets/images/slider.webp"
import { Photo } from "../../components/Photo.styled";
import { Title } from "../../components/Title";
import { Icon } from "../../components/icon/Icon";

export const Slider = () => {
    return (
        <StyledSlider id="portfolio">
            <Title text={"Portfolio"} fontSize={"48px"} fontWeight={"400"} />
            <StyledWrapper>
                <SliderButton role="button">
                    <Icon
                        iconId={'arrowLeft'}
                        width={'36'}
                        height={'36'}
                        viewBox={'0 0 36 36'}
                    />
                </SliderButton>
                <SliderContainer>
                    <Photo src={slider} photoWidth={"493px"} photoHeight={"500px"} />
                    <SliderContent>
                        <Title as="h3" text={"Landing Ice-cream"} fontSize={"24px"} fontWeight={"300"} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.</p>
                        <a href="">More</a>
                    </SliderContent>
                </SliderContainer>
                <SliderButton transform={'rotate(180deg)'} role="button">
                    <Icon
                        iconId={'arrowLeft'}
                        width={'36'}
                        height={'36'}
                        viewBox={'0 0 36 36'}
                    />
                </SliderButton>
            </StyledWrapper>
        </StyledSlider>
    );
};

const StyledSlider = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(102deg, #2C2C2C 1.56%, #1C1C1C 95.55%);
    padding: 50px 0;
    min-height: 100vh;
`

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
type SliderButtonPropsType = {
    transform?: string
}
const SliderButton = styled.button<SliderButtonPropsType>`
    text-decoration: none;
    min-width: 60px;
    height: 60px;
    background-color: #E2A300;
    border-radius: 50%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transform: ${props => props.transform};
`

const SliderContainer = styled.div`
    display: flex;
    padding: 50px;
    justify-content: space-between;
    gap: 40px;
    background: linear-gradient(131deg, #414141 0%, #2D2D2D 100.52%);
    border-radius: 29px;
    margin: 50px;
`

const SliderContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    p {
        width: 202px;
        text-align: center;
        color: #fff;
        font-weight: 300;
    }

    a {
        text-decoration: none;
        color: #E2A100;
    }
`
