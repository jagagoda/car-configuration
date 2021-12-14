import React, { FC } from 'react'
import styled from 'styled-components';
import { SubtitleElement } from '../SubtitleElement';

const StyledText = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`;
const ColorType = styled.h3`
font-weight: normal;
font-size: 14px;
`;
const PriceElement = styled.h3`
font-weight: normal;
font-size: 14px;
`;
const ShowColor = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
background-color: red;
`;


interface Props {
  text: string;
  type: string;
  price: number;
}

export const CarColorElement: FC<Props> = ({ text, price, type }: Props) => {
  return (
    <>
      <SubtitleElement text='Wybrany kolor lakieru' />
      <StyledText>
        <ColorType>{type}<br />{text}</ColorType>
        <ShowColor />
        <PriceElement> + {price} zł</PriceElement>
      </StyledText>
    </>
  )
}
