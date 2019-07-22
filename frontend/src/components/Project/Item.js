import React from 'react';
import styled from 'styled-components';


const ItemDiv = styled.div`
  width: 100%;
  height: 100%;
`

const ItemPicture = styled.div`
  width: 100%;
  height: 80%;
  img {
    width: 100%;
    height: 100%;
  }
`

const ItemExplain = styled.div`
  width: 100%;
  height: 20%;
  background-color: blue;
`


const Item = (props) => (
  <ItemDiv>
    <ItemPicture>
      <img src={props.img} alt="kiki" />
    </ItemPicture>
    <ItemExplain />
  </ItemDiv>
)

export default Item;