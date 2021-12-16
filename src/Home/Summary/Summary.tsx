import React, { FC } from 'react'
import { Styles, SumTitle, PriceElement } from './Styles';
import { decimalSeparator } from '../decimalSeparator';

interface Props {
  text: string;
  price: number;
}

export const SumElement: FC<Props> = ({ text, price }: Props) => {
  return (
    <Styles>
      <SumTitle>Całkowita cena</SumTitle>
      <PriceElement>{decimalSeparator(price) ? decimalSeparator(price) + ' zł' : null}</PriceElement>
    </Styles>
  )
}
