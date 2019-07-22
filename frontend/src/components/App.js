import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom'

import Theme from '../styles/Theme'
import GlobalStyles from '../styles/GlobalStyles';

import Menu from './Menu';
import Board from './Board';
//TODO DB ERD, 용어사전
const AppDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`

const App = () => (
  <ThemeProvider theme={Theme}>
    <>
      <Router>
        <GlobalStyles />
        <AppDiv>
          <Menu />
          <Board>
          </Board>
        </AppDiv>
      </Router>
    </>
  </ThemeProvider>
)

export default App;