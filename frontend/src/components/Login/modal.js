import React, { useState } from 'react';
import styled from 'styled-components';

const ModalDiv = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(3,3,3,0.6);
  z-index: 8;
`

const ModalContent = styled.div`
  position: relative;
  width: 40%;
  height: 60%;
  left: 30%;
  top: 20%;
  background-color: white;
  z-index: 9;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ModalHeader = styled.div`
  width: 100%;
  height: 20%;
  border-bottom: 1px solid black;
  display: flex;
  flex-directin: space-between;
  span{
    color: blue;
  }
  span:last-child {
    text-align: right;
    color: red;
    cursor: pointer;
  }
`

const ModalBody = styled.div`
  height: 80%;
`

const ModalBodyContent = styled.div`
  width: 60%;
  margin-left: 20%;
`

const ModalInput = styled.input`
  margin-top: 20px;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  outline: 0;
  font-size: 16px;
  padding-left: 10px;
`

const ModalInputText = styled.p`
  margin-top: 20px;
  font-size: 20px;
  color: #333333;
  font-family: 'Do Hyeon';
  font-weight: 700;
`
const IdInput = styled(ModalInput).attrs({
  type: "text",
  name: "userId",
  placeholder: "Input your id"
})``;

const PasswordInput = styled(ModalInput).attrs({
  type: "password",
  name: "password",
  placeholder: "Input your password"
})``;

const ModalButtonDiv = styled.div`
  margin-left: 20%;
  margin-top: 30px;
`

const ModalButton = styled.button`
  margin-bottom: 10px;
  width: 75%;
  height: 40px;
  border-radius: 10px;
  color: #eeeeee;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Do Hyeon';
  outline: none;
  background-color: ${props => props.theme.lightBlue};
  cursor: pointer;
`

const Modal = ({ onModal, onLogin, onLogout }) => {

  const [ userId, setUserId ] =useState('');
  const [ password, setPassword ] =useState('');

  const handleIdChange = (e) => {
    setUserId(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userId, password)
  }

  return(
  <ModalDiv>
    <ModalContent>
      <ModalHeader >
        <span>wow</span>
        <span onClick={onModal}>&times;</span>
      </ModalHeader>
      <ModalBody>
        <ModalBodyContent>
          <ModalInputText>아이디</ModalInputText>
          <IdInput onChange={handleIdChange} />
          <ModalInputText>비밀번호</ModalInputText>
          <PasswordInput onChange={handlePasswordChange}/>
        </ModalBodyContent>
        <ModalButtonDiv>
          <ModalButton onClick={handleSubmit}>로그인</ModalButton>
          <ModalButton>회원가입</ModalButton>
        </ModalButtonDiv>
      </ModalBody>
    </ModalContent>
  </ModalDiv>
)}

export default Modal;