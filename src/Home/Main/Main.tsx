import React, { FC, useState, useEffect } from 'react'
import { ButtonMore, StyledIconUp, StyledIconDown, Collapse, BorderLine, StyledWindow } from './Styles';
import { Element } from '../ConfigurationElement/Element';
import { Line } from '../Line/Line';
import { SumElement } from '../Summary/Summary';
import { MainTitle } from '../MainTitle/MainTitle'
import { CarColorElement} from '../CarColor/CarColor';
import { EngineElement } from '../Engine/Engine';
import { DataProps, Engine, Color, VehicleResponse } from "../types";
import axios from 'axios';

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
    axios.get('https://vehicle-configuration.herokuapp.com/configuration/10')
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
  const { name: carColor, description: colorDescription } = color;
  const { model: carModel, manufacturer: carManufacturer } = data;
  const { gearbox: carGearbox, power: carPower } = engine;
  const { price: vehiclePrice } = data;
  const { price: enginePrice  } = engine;
  const { price: colorPrice } = color;


  const getTotalPrice = () => {
    const result = vehiclePrice + getAdditionalPrice();
    return result;
  }

  const getAdditionalPrice = () => {
     const result = enginePrice + colorPrice;
     return result;
  }

  return (
    <StyledWindow isOpen={isOpen}>
      <MainTitle />
      <Element manufacturer={carManufacturer} model={carModel} gearbox={carGearbox}  price={vehiclePrice} power={carPower} />
      <Element text='Wyposażenie dodatkowe' price={getAdditionalPrice()} />
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
        <CarColorElement color={color} name={carColor} description={colorDescription} price={colorPrice} />
      </Collapse>
    </StyledWindow>
  )
}
