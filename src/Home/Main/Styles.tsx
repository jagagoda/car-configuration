import styled from 'styled-components';
import { RiArrowDownSLine } from 'react-icons/ri';
import { RiArrowUpSLine } from 'react-icons/ri';
import { BorderLineType } from "../types";

const StyledWindow = styled.div<BorderLineType>`
position: relative;
min-width: 550px;
width: 100%;
border: 2px solid #006;
${props => !props.isOpen && `
  border-bottom: none;
`}
padding: 15px 30px 20px 30px;
height: 100%;

`;

const BorderLine = styled.div<BorderLineType>`
  border-top: 2px solid #006;
  position: relative;
  top: 22px;
  ${props => !props.isOpen && `
    left: -32px;
    width: calc(100% + 64px);
  `}
`
const Collapse = styled.div<BorderLineType>`
  height: ${props => props.isOpen ? 320 : 0}px;
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

export { ButtonMore, StyledIconUp, StyledIconDown, Collapse, BorderLine, StyledWindow };