import React, {FC} from 'react'
import styled from 'styled-components'

const LineElement = styled.div`
border-bottom: 1px solid lightgrey;
width: 100%;
padding-bottom: 7px;
`;

interface Props {

}

export const Line: FC<Props> = (props: Props) => {
  return (
    <LineElement />
  )
}
