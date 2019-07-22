import React from 'react';
import styled from 'styled-components';
import { Stack } from './Stack'

const IntroText = styled.p`
  padding: 20px 0 20px 30px;
  font-size: 30px;
  color: ${props => props.theme.lightBlue};
  font-weight: 700;
  letter-spacing: 3px;
`

const IntroBody = styled.div`
  width: 80%;
  margin-left: 10%;
  padding: 15px;
  p {
    font-size: 20px;
    vertical-align: middle;
    line-height: 1.6;
    padding-bottom: 2px;
  }
  span {
    background-color: ${props => props.theme.lightBlue}
    color: #ffffff;
    font-size: 24px;
    padding: 5px 8px;
  }
`

const Intro = () => (
  <>
    <IntroText>Intro.</IntroText>
    <IntroBody>
      <p><span>센스있는 프론트엔드 개발자가 되고 싶은 김도우 입니다.</span></p>
      <br />
      <p> 클린 코드를 작성하는 <b>센스</b></p>
      <p> 대화가 잘통하고, 팀원들과 적극적으로 협력하는 <b>센스</b></p>
      <p> 눈치있게 잘 이해하려 노력하고, 잘 물어보는 <b>센스</b></p>
      <p> 를 가진 개발자가 되기 위해 노력하고 있습니다 😎</p>
    </IntroBody>
    <IntroText>Stack.</IntroText>
    <Stack />
  </>
)

export default Intro;