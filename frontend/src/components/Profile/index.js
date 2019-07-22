import React from 'react';
import styled, { keyframes } from 'styled-components'
import {CurrentBox, UnivBox, FutureBox } from './ProfileBox'
import Intro from './Intro';
/*=======================================================
Card Shape Box, :hover make color change with transition
Card 1 : Info about current
Card 2 : Info about univ life
Card 3 : Info about Futer Life
Inner attribute : CardTitle, Picture, Some info
=======================================================*/

const ProfileHeaderDiv = styled.div`
  margin-top: 30px;
  width: 100%;
  display:flex;
  justify-content: space-around;
  flex-direction: row;
`

const fadeIn = keyframes`
  from {
    margin-left: 100%;
    width: 300%
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
`

const ProfileDiv = styled.div`
  width: 100%;
  animation-duration: 0.7s;
  animation-name: ${fadeIn};
`



const ProfileBody = styled.div`
  width: 96%;
  box-shadow: 5px 5px 10px #bebebe;
  margin-top: 3rem;
  margin-left: 2%;
  background-color: white;
  border-radius: 10px;
  font-family: 'Do Hyeon';
`

const Profile = () => {
  return (
    <ProfileDiv>
      <ProfileHeaderDiv>
        <CurrentBox/>
        <UnivBox/>
        <FutureBox/>
      </ProfileHeaderDiv>
      <ProfileBody>
        <Intro />
      </ProfileBody>
    </ProfileDiv>
  )
}

export default Profile