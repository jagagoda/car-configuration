export type Props = {
  isOpen: boolean;
  toggle: any;
}
export type BorderLineType = {
  isOpen: boolean
}
export type DataProps = {
  id: number,
  manufacturer: string,
  model: string,
  price: number,
}
export type Engine = {
  id: number,
  name: string,
  displacement: number,
  power: number,
  gearbox: string,
  acceleration: number,
  vMax: number,
  price: number
}
export type Color = {
  id: number,
  name: string,
  description: string,
  color: string,
  price: number
}
export type VehicleResponse = DataProps & {
  engines: Array<Engine>,
  colors: Array<Color>,
}