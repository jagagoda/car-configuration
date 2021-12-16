import React, { FC } from 'react'
import { decimalSeparator } from '../decimalSeparator';
import {Styles, DataElement, PriceElement} from './Styles';
import { getHorsePower } from '../getHorsePower';

interface Props {
  text?: string;
  manufacturer?: string;
  gearbox?: string;
  model?: string;
  price?: number;
  power?: number;
  displacement?: number;
}

export const Element: FC<Props> = (props: Props) => {
  const { manufacturer, model, gearbox, price, text, power } = props;

  return (
    <Styles>
      <DataElement>{text}{manufacturer} {model} {power? power + ' kW / ' : null}{getHorsePower(power)? getHorsePower(power) + ' KM ' : null} {gearbox}</DataElement>
      <PriceElement>{decimalSeparator(price) ? decimalSeparator(price) + ' zł' : null}</PriceElement>
    </Styles>
  )
}
