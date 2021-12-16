import styled from 'styled-components';

const GearBoxElement = styled.h3`
font-size: 14px;
font-weight: normal;

span {
  font-weight: bold;
}
`;
const PowerElement = styled.h3`
font-size: 14px;
font-weight: normal;
padding-bottom: 15px;
line-height: 0;
`;

const EngineData = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

export {GearBoxElement, PowerElement, EngineData};