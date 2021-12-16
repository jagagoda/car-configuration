import styled from 'styled-components';
const StyledText = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`;
const ColorType = styled.h3`
font-weight: normal;
font-size: 14px;
span{
  font-weight: bold;
}
`;
const PriceElement = styled.h3`
font-weight: bold;
font-size: 14px;
padding-left: 90px;
`;
const ShowColor = styled.div`
position: absolute;
bottom: 0;
right: 45%;
width: 50px;
height: 50px;
border-radius: 50%;
background-color: ${props => props.color};
`;

export {StyledText, ColorType, PriceElement, ShowColor};