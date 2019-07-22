import React from 'react';
import styled from 'styled-components';

import Modal from './modal';

const LoginDiv = styled.div`
  display: inline-block;
  position: static;
  height: 100%;
  right: 0;
  padding-bottom: 15px;
`

const Button = styled.button`
position: absolute;
top: 15px;
width: 100px;
font-size: 18px;
height: 40px;
outline: none;
border-radius: 10px;
color: #eeeeee;
font-weight: 700;
font-family: 'Do Hyeon';
cursor: pointer;
margin-right: 15px;
background-color: ${props => props.theme.lightBlue};
`

const LoginButton = styled(Button)`
  right: 120px;
  
`

const JoinButton = styled(Button)`
  right: 10px;
`

const Login = ({ onModal, modal }) => {
  return(
  <LoginDiv>
    <JoinButton onClick={onModal}>
     회원가입
   </JoinButton>
   <LoginButton onClick={onModal}>
     로그인
   </LoginButton>
   {modal && <Modal onModal={onModal}/>}
  </LoginDiv>
)}

export default Login