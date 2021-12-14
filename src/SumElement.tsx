import React, { FC } from 'react'
import styled from 'styled-components';

const Styles = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-bottom: 30px;
`;
const SumTitle = styled.h3`
font-size: 17px;
font-weight: bold;
`;
const PriceElement = styled.h3`
font-size: 17px;
font-weight: bold;
`;

interface Props {
  text: string;
  price: number;
}

export const SumElement: FC<Props> = ({ text, price }: Props) => {
  return (
    <Styles>
      <SumTitle>Całkowita cena</SumTitle>
      <PriceElement>{price} zł</PriceElement>
    </Styles>
  )
}
