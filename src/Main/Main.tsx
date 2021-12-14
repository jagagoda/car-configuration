import React, { FC } from 'react'
import styled from 'styled-components';
import { RiArrowDownSLine } from 'react-icons/ri';
import { RiArrowUpSLine } from 'react-icons/ri';
import { Element } from './Element';
import { Line } from './Line';
import { SumElement } from '../SumElement';
import { MainTitle } from '../Main/MainTitle'
import { CarColorElement } from './CarColorElement';
import { EngineElement } from './EngineElement';

const StyledWindow = styled.div`
position: relative;
min-width: 500px;
width: 100%;
border: 2px solid #006;
padding: 15px 30px 20px 30px;
height: 100%;
.sum__title {
  font-weight: bold;
}
.btn__less{
  border-top: 2px solid #006;
  position: relative;
}
`;

const StyledIconUp = styled(RiArrowUpSLine)`
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
bottom: -13%;
left: 50%;
transform: translate(-50%, -50%);
cursor: pointer;
`;

const ButtonLess = styled.button`
display: flex;
justify-content: center;
background-color: white;
position: absolute;
bottom: -35px;
left: 50%;
transform: translate(-50%, -50%);
border: none;
outline: none;
font-size: 14px;
padding: 10px 20px;
cursor: pointer;
color: #006;
`;



interface Props {
  isOpen: boolean;
  toggle: any;
}

export const Main: FC<Props> = ({ isOpen, toggle }) => {

  return (
    <StyledWindow>
      <MainTitle />
      <Element text='tutaj będą dane samochodu' price={10} />
      <Element text='wyposażenie dodatkowe' price={10} />
      <Line />
      <SumElement text='całkowita cena' price={20} />
      {isOpen ?
        <ButtonMore>
          <RiArrowDownSLine /> Pokaż więcej
        </ButtonMore> : ''}
      {!isOpen ? <>
        <div className='btn__less'><ButtonLess><StyledIconUp /> Pokaż mniej</ButtonLess></div>
        <EngineElement />
        <Line />
        <CarColorElement type='tutaj kolor' text='tutaj opis koloru' price={100} />
      </> : ''}
    </StyledWindow>
  )
}
