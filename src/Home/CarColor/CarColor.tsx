import React, { FC } from 'react'
import { StyledText, ColorType, ShowColor, PriceElement } from './Styles';
import { SubtitleElement } from '../SubtitleElement/SubtitleElement';
import { Color } from '../types';

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
