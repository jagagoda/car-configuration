export const decimalSeparator = (num: number | undefined) => {
  if(!num) {
    return "";
  }
  
 const result = num.toLocaleString('en').replaceAll(',', ' ')
 return result;
}