import React, { FC } from 'react'
import styled from 'styled-components';
import { SubtitleElement } from './SubtitleElement';
import { Engine } from './types';

const GearBoxElement = styled.h3`
font-size: 14px;
font-weight: normal;

span {
  font-weight: bold;
}
`;
const PowerElement = styled.h3`
font-size: 14px;
font-weight: normal;
padding-bottom: 15px;
line-height: 0;
`;

const EngineData = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

type Props = {
  engine: Engine | null,
  price: number
}

export const EngineElement: FC<Props> = (props: Props) => {
  const { engine } = props;

  if (!engine) {
    return null;
  }

  const { gearbox, acceleration, vMax, price } = engine;

  return (
    <>
      <SubtitleElement text='Wybrany silnik' />
      <EngineData>
        <GearBoxElement><span>{acceleration}</span> {gearbox}</GearBoxElement>
        <GearBoxElement><span>{price ? '+ ' + price + ' zł'  : null}</span></GearBoxElement>
      </EngineData>
      <PowerElement>0-100km/h: {acceleration}; V-max: {vMax} km/h;</PowerElement>
    </>
  )
}
