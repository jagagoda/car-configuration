import React, { FC } from 'react'
import styled from 'styled-components';

const Title = styled.h3`
font-size: 23px;
font-weight: bold;
`;

interface Props {

}

export const MainTitle: FC<Props> = (props: Props) => {
  return (
    <Title>Podsumowanie konfiguracji</Title>
  )
}
