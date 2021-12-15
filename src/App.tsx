import React, { FC } from 'react';
import styled from 'styled-components';
import { Main } from './Main/Main';

const Styles = styled.div`
display: flex;
justify-content: center;
align-items: start;
width: 100%;
height: 100vh;
padding-top: 20px;
font-family: Roboto, sans-serif;
 @media screen and (max-width: 320px) {
padding-top: 0;
    }
       @media only screen and (min-width: 350px) and (orientation: landscape) {
  padding-top:0;
}
`;

const App: FC = () => {

  return (
    <Styles>
      <div className="App">
        <Main />
      </div>
    </Styles>

  );
}

export default App;
