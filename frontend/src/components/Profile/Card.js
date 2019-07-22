import React from 'react';
import styled from 'styled-components';


const Card = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  color: inherit;
`

const CardImageDiv = styled.div`
  width: 35%;
  height: 100%
  text-align: center;
  div {
    position: relative;
    left: 40px;
    top: 30px;
    width: 70%;
    border-radius: 50%;
    border: 2px solid #eeeeee;
    height: 45%;
    background-image: url('http://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2018/08/13/P3gT022T9nc5636697740033718734.jpg');
    background-size: cover;
  }
  p {
    position: relative;
    letter-spacing: 5px;
    top: 50px;
    left: 20px;
    font-weight: 700;
    font-family: 'Do Hyeon';
    font-size: 30px;
    color:inherit;
  }
`

const CardTextDiv = styled.div`
  width: 65%;
  height: 100%;
  text-align:center;
  color: inherit;
  padding: 20px 15px 30px 20px;
  font-family: 'Do Hyeon';
  p {
    margin-top: 15px;
    text-align: left;
  }
`

const CardHeader = styled.p`
  color: inherit;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Do Hyeon';
  margin-bottom: 20px;
`

const ProfileCard = (props) => (
  <Card>
    <CardImageDiv>
      <div>
      </div>
      <p>{props.message.year}</p>
    </CardImageDiv>
    <CardTextDiv>
      <CardHeader>{ props.message.header }</CardHeader>
    { props.message.content.map((text,idx) => <p key={idx}>{text}</p>) }
    </CardTextDiv>
  </Card>
)

export default ProfileCard;