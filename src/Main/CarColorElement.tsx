import React, { FC } from 'react'
import styled from 'styled-components';
import { SubtitleElement } from './SubtitleElement';
import { Color } from './types';

const StyledText = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`;
const ColorType = styled.h3`
font-weight: normal;
font-size: 14px;
span{
  font-weight: bold;
}
`;
const PriceElement = styled.h3`
font-weight: bold;
font-size: 14px;
padding-left: 90px;
`;
const ShowColor = styled.div`
position: absolute;
bottom: 0;
right: 45%;
width: 50px;
height: 50px;
border-radius: 50%;
background-color: ${props => props.color};
`;


interface Props {
  color: Color | null,
  price: number;
  description: string;
  name: string;
}

export const CarColorElement: FC<Props> = (props: Props) => {
  const { color, price, name, description } = props;
  if (!color) {
    return null;
  }

  const { color: htmlColor } = color;

  return (
    <>
      <SubtitleElement text='Wybrany kolor lakieru' />
      <StyledText>
        <div>
          <ColorType><span>{name}</span><br />{description}</ColorType>
        </div>
        <ShowColor color={htmlColor} />
        <PriceElement>{price ? '+ ' + price + ' zł' : null}</PriceElement>
      </StyledText>
    </>
  )
}
