import styled from "styled-components";
import slider from "../../assets/images/slider.webp"
import { Photo } from "../../components/Photo.styled";
import { Title } from "../../components/Title";

export const Slider = () => {
    return (
        <StyledSlider>
            <Title text={"Portfolio"} fontSize={"24px"} />
            <StyledWrapper>
                <SliderButton href="#" role="button" />
                <SliderContainer>
                    <Photo src={slider} photoWidth={"493px"} photoHeight={"500px"} />
                    <SliderContent>
                        <h3>Landing Ice-cream</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.</p>
                        <a href="#">More</a>
                    </SliderContent>
                </SliderContainer>
                <SliderButton href="#" role="button" />
            </StyledWrapper>
        </StyledSlider>
    );
};

const StyledSlider = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #346334;
    min-height: 100vh;
`

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const SliderButton = styled.a`
    text-decoration: none;
    min-width: 60px;
    height: 60px;
    background-color: #E2A300;
    border-radius: 50%;
    cursor: pointer;
`

const SliderContainer = styled.div`
    display: flex;
    padding: 50px;
    justify-content: space-between;
    gap: 40px;
`

const SliderContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    p {
        width: 202px;
    }
`
