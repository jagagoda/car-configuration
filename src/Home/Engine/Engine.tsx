import React, { FC } from 'react'
import { SubtitleElement } from '../SubtitleElement/SubtitleElement';
import { Engine } from '../types';
import {EngineData, GearBoxElement, PowerElement} from './Styles'
import { decimalSeparator } from '../decimalSeparator';

type Props = {
  engine: Engine | null,
  price: number
}

export const EngineElement: FC<Props> = (props: Props) => {
  const { engine } = props;

  if (!engine) {
    return null;
  }

  const { gearbox, acceleration, vMax, price, displacement, power } = engine;

  const displacementRounded = () => {
    const decimalNumber = (displacement / 1000)
    const result = Math.round(decimalNumber * 10) / 10;
    return result;
  }

  const getHorsePower = () => {
    const kW = 1.36;
    const result = Math.round(power * kW);
    return result;
  }

  return (
    <>
      <SubtitleElement text='Wybrany silnik' />
      <EngineData>
        <GearBoxElement><span>{displacementRounded()}</span> {gearbox}</GearBoxElement>
        <GearBoxElement><span>{decimalSeparator(price) ? '+ ' + decimalSeparator(price) + ' zł'  : null}</span></GearBoxElement>
      </EngineData>
      <PowerElement>{getHorsePower()}KM ({power} kW); 0-100km/h: {acceleration} s; V-max: {vMax} km/h;</PowerElement>
    </>
  )
}
