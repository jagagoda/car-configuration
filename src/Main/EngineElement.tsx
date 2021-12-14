import React, { FC } from 'react'
import styled from 'styled-components';
import { SubtitleElement } from '../SubtitleElement';

const GearBoxElement = styled.h3`
font-size: 14px;
font-weight: normal;
`;
const PowerElement = styled.h3`
font-size: 14px;
font-weight: normal;
padding-bottom: 15px;
line-height: 0;
`;

interface Props {

}

export const EngineElement: FC<Props> = (props: Props) => {
  return (
    <>
      <SubtitleElement text='Wybrany silnik' />
      <GearBoxElement>tutaj skrzynia biegów</GearBoxElement>
      <PowerElement>tutaj moc silnika</PowerElement>
    </>
  )
}
