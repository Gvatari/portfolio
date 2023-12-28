import styled, { css } from "styled-components";

type PhotoPropsType = {
    absolute?: boolean
    photoWidth?: string
    photoHeight?: string
    top?: string
    left?: string
}

export const Photo = styled.img<PhotoPropsType>`
    width: ${props => props.photoWidth};
    height: ${props => props.photoHeight};
    object-fit: cover;

    ${props => props.absolute && css<PhotoPropsType>`
        position: absolute;
        top: ${props => props.top};
        left: ${props => props.left};
        z-index: 1;
    `}
`