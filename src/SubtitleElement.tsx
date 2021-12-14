import React, { FC } from 'react'
import styled from 'styled-components';

const Styles = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 18px;
`;
const Subtitle = styled.h3`
font-size: 17px;
font-weight: bold;
`;

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
