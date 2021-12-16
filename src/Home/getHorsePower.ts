export const getHorsePower = (num: number | undefined) => {
  if (!num) {
    return "";
  }
  const kW = 1.36;
  const result = Math.round(num * kW);
  return result;
}