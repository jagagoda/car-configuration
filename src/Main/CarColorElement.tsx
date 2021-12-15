import React, { FC } from 'react'
import styled from 'styled-components';
import { SubtitleElement } from './SubtitleElement';
import { Color } from './types';

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
background-color: ${props => props.color};
`;


interface Props {
  color: Color | null,
  text: string;
  type: string;
  price: number;
}

export const CarColorElement: FC<Props> = (props: Props) => {
  const { color, text, price, type } = props;
  if(!color) {
    return null;
  }

  const { color: htmlColor } = color;

  return (
    <>
      <SubtitleElement text='Wybrany kolor lakieru' />
      <StyledText>
        <div>
          <ColorType>{type}<br />{text}</ColorType>
        </div>
        <ShowColor color={htmlColor} />
        <PriceElement> + {price} zł</PriceElement>
      </StyledText>
    </>
  )
}
