import React,  {FC} from 'react'
import styled from 'styled-components';

const Styles = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;
const DataElement = styled.h3`
font-weight: normal;
font-size: 14px;
`;
const PriceElement = styled.h3`
font-weight: normal;
font-size: 14px;
`;

interface Props {
text: string;
price: number;
}

export const Element: FC<Props> = ({text, price}: Props) => {
  return (
    <Styles>
      <DataElement>{text}</DataElement>
      <PriceElement>{price} zł</PriceElement>
    </Styles>
  )
}
