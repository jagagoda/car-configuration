import React, { FC, useState, useEffect } from 'react'
import styled from 'styled-components';
import { RiArrowDownSLine } from 'react-icons/ri';
import { RiArrowUpSLine } from 'react-icons/ri';
import { Element } from './Element';
import { Line } from './Line';
import { SumElement } from './SumElement';
import { MainTitle } from '../Main/MainTitle'
import { CarColorElement } from './CarColorElement';
import { EngineElement } from './EngineElement';
import { BorderLineType, DataProps, Engine, Color, VehicleResponse } from "./types";
import axios from 'axios';

const StyledWindow = styled.div<BorderLineType>`
position: relative;
min-width: 500px;
width: 100%;
border: 2px solid #006;
${props => !props.isOpen && `
  border-bottom: none;
`}
padding: 15px 30px 20px 30px;
height: 100%;

  @media screen and (max-width: 900px) {
    min-width: 310px;
    width: 70%;
  }
    @media screen and (max-width: 600px) and (min-width: 350px) {
      min-width: 290px;
      padding: 5px 15px
    }
     @media screen and (max-width: 349px) {
      min-width: 250px;
      padding: 5px 15px
    }
`;

const BorderLine = styled.div<BorderLineType>`
  border-top: 2px solid #006;
  position: relative;
  top: 22px;
  ${props => !props.isOpen && `
    left: -32px;
    width: calc(100% + 64px);

    @media screen and (max-width: 380px) {
      left: -15px;
      width: calc(100% + 30px);
    }
  `}
`

const Collapse = styled.div<BorderLineType>`
  height: ${props => props.isOpen ? 300 : 0}px;
  overflow: hidden;
  transition: all .3s linear;
  ${props => props.isOpen && `
    padding-top: 36px;
  `}
`;

const StyledIconUp = styled(RiArrowUpSLine)`
`;

const StyledIconDown = styled(RiArrowDownSLine)``;

const ButtonMore = styled.button`
display: flex;
justify-content: center;
align-items: center;
background-color: white;
border: none;
outline: none;
font-size: 17px;
padding: 10px 20px;
position: absolute;
bottom: -24px;
left: 50%;
transform: translateX(-50%);
cursor: pointer;
`;

export const Main: FC = () => {
  const [variantData, setVariantData] = useState(null);
  const [color, setColor] = useState<Color | null>(null);
  const [engine, setEngine] = useState<Engine | null>(null);
  const [data, setData] = useState<DataProps | null>(null)
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => {
    setIsOpen(isOpen => !isOpen)
  }

  useEffect(() => {
    if (!variantData) {
      return;
    }

    const { vehicleId, colorId, engineId } = variantData;

    axios
      .get<VehicleResponse>(`https://vehicle-configuration.herokuapp.com/vehicle/${vehicleId}`)
      .then(response => {
        const { data } = response;
        const { engines, colors, ...idata } = data;
        const engine = engines.find(item => item.id === engineId);
        const color = colors.find(item => item.id === colorId);

        setData(idata);
        setColor(color ?? null);
        setEngine(engine ?? null);
        setLoading(false)
      })
      .catch(ex => {
        const error = ex.response.status === 404
          ? "Resource not found"
          : "An unexpected error occured";
        setError(error)
        setLoading(false);
      });
  }, [variantData]);

  useEffect(() => {
    axios.get('https://vehicle-configuration.herokuapp.com/configuration/1')
      .then(response => {
        const { data } = response;

        setVariantData(data);
      });
  }, []);

  if(error !== "") {
    return null;
  }

  if(loading || !data || !engine || !color) {
    return <div>Loading...</div> ;
  }

  const { price: vehiclePrice } = data;
  const { price: enginePrice  } = engine;
  const { price: colorPrice } = color;

  const getTotalPrice = () => {
    return vehiclePrice + getAdditionalPrice();
  }

  const getAdditionalPrice = () => {
    return enginePrice + colorPrice;
  }

  return (
    <StyledWindow isOpen={isOpen}>
      <MainTitle />
      <Element text='tutaj będą dane samochodu' price={vehiclePrice} />
      <Element text='wyposażenie dodatkowe' price={getAdditionalPrice()} />
      <Line />
      <SumElement text='całkowita cena' price={getTotalPrice()} />
      <BorderLine isOpen={isOpen}>
        {!isOpen ?
          <ButtonMore onClick={toggle}>
            <StyledIconDown size={32} /> Pokaż więcej
          </ButtonMore> : null}
        {isOpen ?
          <ButtonMore onClick={toggle}><StyledIconUp size={32} /> Pokaż mniej</ButtonMore> : null}
      </BorderLine>
      <Collapse isOpen={isOpen}>
        <EngineElement engine={engine} price={enginePrice} />
        <Line />
        <CarColorElement color={color} type='tutaj kolor' text='tutaj opis koloru' price={colorPrice} />
      </Collapse>
    </StyledWindow>
  )
}
