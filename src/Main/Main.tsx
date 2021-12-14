import React, { FC } from 'react'
import styled from 'styled-components';
import { RiArrowDownSLine } from 'react-icons/ri';
import { RiArrowUpSLine } from 'react-icons/ri';

const StyledWindow = styled.div`
position: relative;
min-width: 600px;
width: 100%;
border: 2px solid #000;
padding: 25px 25px;
height: 100%;
.window__title {
  font-size: 28px;
  color: #000;
  text-align: left;
}
.sum__title {
  font-weight: bold;
}
`;
const StyledData = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 50px 50px;
grid-gap: 5px;
color: black;
text-align: left;
`;
const StyledColorWindow = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 50px 50px;
grid-gap: 5px;
color: black;

`;

const ItemLeft = styled.h1`
display: flex;
justify-content: start;
font-size: 16px;
font-weight: normal;
`;
const ItemRight = styled.h1`
display: flex;
justify-content: end;
font-size: 18px;
`;
const SumItem = styled.div`
display: flex;
justify-content: space-between;
font-size: 22px;
border-top: 1px solid lightgrey;
padding-top: 15px;
padding-bottom: 50px;
`;

const ButtonMore = styled.button`
display: flex;
justify-content: center;
background-color: white;
border: none;
outline: none;
font-size: 17px;
padding: 10px 20px;
position: absolute;
bottom: -15%;
left: 50%;
transform: translate(-50%, -50%);
cursor: pointer;
`;

const EngineWindow = styled.div`
  border-bottom: 1.2px solid lightgrey;
  padding-bottom: 10px;

`;
const TitleItem = styled.h1`
  padding-top: 15px;
  font-size: 20px;
  font-weight: bold;
`;

const ColorWindow = styled.div`

`;
const ShowColor = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
background-color: red;

`;

interface Props {
  isOpen: boolean;
  toggle: () => any;
}

export const Main: FC<Props> = ({ isOpen, toggle }) => {

  return (
    <StyledWindow>
      <h1 className='window__title'>Podsumowanie konfiguracji</h1>
      <StyledData>
        <ItemLeft>Tutaj będą dane samochodu</ItemLeft><ItemRight>cena zł</ItemRight>
        <ItemLeft>Wyposażenie dodatkowe</ItemLeft><ItemRight>cena zł</ItemRight>
      </StyledData>
      <SumItem>
        <div className='sum__title'>Całkowita cena</div>
        <div className='sum__amount'>cena zł</div>
      </SumItem>
      {isOpen ?
        <ButtonMore>
          <RiArrowDownSLine /> Pokaż więcej
        </ButtonMore> : ''}
      <EngineWindow>
        <TitleItem className='dropdown__title'>Wybrany silnik</TitleItem>
        <ItemLeft>tutaj dane silnika</ItemLeft>
        <ItemLeft>i kolejne dane</ItemLeft>
      </EngineWindow>
      <ColorWindow>
        <TitleItem>Wybrany kolor lakieru</TitleItem>
        <StyledColorWindow>
          <ItemLeft>tutaj kolor lakieru<br />tutaj opis lakieru</ItemLeft>
          <ShowColor />
          <ItemRight>+ cena zł</ItemRight>
        </StyledColorWindow>
      </ColorWindow>
    </StyledWindow>
  )
}
