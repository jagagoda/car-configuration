import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Main } from './Main/Main';

const Styles = styled.div`
display: flex;
justify-content: center;
align-items: start;
width: 100%;
height: 100vh;
padding-top: 50px;
`;


const App: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => {
    setIsOpen(isOpen => !isOpen)
  }
  return (
    <Styles>
      <div className="App">
        <Main isOpen={isOpen} toggle={toggle} />
      </div>
    </Styles>

  );
}

export default App;
