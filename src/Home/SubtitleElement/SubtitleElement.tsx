import React, { FC } from 'react'
import { Styles, Subtitle } from './Styles';

interface Props {
  text: string;
}

export const SubtitleElement: FC<Props> = ({ text }: Props) => {
  return (
    <Styles>
      <Subtitle>{text}</Subtitle>
    </Styles>
  )
}
