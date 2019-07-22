import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileCard from './Card'
import './Card.scss';

const ProfileBox = styled.div`
  width: 30%;
  border-radius: 10px;
  height: 25vh;
  box-shadow: 2px 5px 3px #d8d8d8;
  color: #eeeeee;
  background-color: inherit;
  transition: 0.4s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`

const CurrentBoxDiv = styled(ProfileBox)`
  background-color: ${props => props.theme.emelard};
`

const UnivBoxDiv = styled(ProfileBox)`
  background-color: ${props => props.theme.lightBlue}
`

const FutureBoxDiv = styled(ProfileBox)`
  background-color: ${props => props.theme.orange};
`


//TODO 리덕스 연동 후 수정 및 저장가능하게(내 아이디 로그인 시)
export const CurrentBox = () => {
  const [clicked, setClicked] = useState(false)
  const [message, setMessage] = useState({
    year: 2019,
    header: "Current State",
    content: [
      "현재, SSAFY에서 교육받고 있습니다.",
      "웹 프론트엔드 개발자를 목표로 공부 중",
      "리액트 기반의 프론트 엔드를 공부합니다.",
      "척척 프론트엔드 개발자가 되고 싶습니다."
    ]
  })
  const [reversedMessage, setReversedMessage] = useState({
    year: 2019,
    header: "염가붕",
    content: [
      "캬캬캬",
      "키킼",
      "조성직씨.... 최근에 여자친구와",
      "아니 그런걸 왜 물어봐"
    ]
  })
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
  <CurrentBoxDiv onClick={handleClick} className={clicked ? 'activeCard emelard' :''}>
    <ProfileCard message={!clicked ? message : reversedMessage } />
  </CurrentBoxDiv>
)}


export const UnivBox = () => {
  const [clicked, setClicked] = useState(false)
  const [message, setMessage] = useState({
    year: "11-18",
    header: "Past State",
    content: [
      "졸업 후 국비지원 교육으로 개발 시작",
      "18년 2월 경상대학교 심리학과 졸업",
      "15년 3학년 2학기 부터 UX에 관심"
    ]
  })
  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
  <UnivBoxDiv onClick={handleClick} className={clicked && 'activeCard lightBlue'}>
    <ProfileCard message={message} />
  </UnivBoxDiv>
  )
}

export const FutureBox = () => {
  const [clicked, setClicked] = useState(false)
  const [message, setMessage] = useState({
    year: "Future",
    header: "Next State",
    content: [
      "리액트를 쉽게 가르쳐 주는 개발자가 되고 싶습니다",
      "웹에 대한 문제를 같이, 즐겁게 풀 수 있는 사람이 되고 싶습니다"
    ]
  })
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
  <FutureBoxDiv onClick={handleClick} className={clicked && 'activeCard orange'}>
    <ProfileCard message={message} />
  </FutureBoxDiv>
  )
}
