import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import Content from '../Contents'
import Login from '../../containers/LoginContainer';


const BoardDiv = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-y: hidden;
`

const BoardHeaderDiv = styled.div`
  width: 100%;
  margin: 0;
  height: 8vh;
  background-color: white;
  box-shadow: 0 15px 10px #D8D8D8;
`

const BoardHeader = styled.div`
  padding-top: 1rem;
  padding-left: 30px;
  span {
    margin-top: 2px;
    font-family: 'Do Hyeon';
    letter-spacing: 3px;
    font-size: 38px;
    text-transform: uppercase;
    font-weight: 700;
    color: ${props => props.theme.lightBlue};
  }
`

const Board = (props) => {
  const locationPathName = props.location.pathname
  const boardTitle = locationPathName.substr(1, locationPathName.length);
  return(
  <BoardDiv>
    <BoardHeaderDiv>
      <BoardHeader>
        <span>
          { boardTitle }
        </span>
        <Login />
      </BoardHeader>
    </BoardHeaderDiv>
    <Content />
  </BoardDiv>
)}

export default withRouter(Board);