import React, { useState } from 'react';
import styled from 'styled-components';

const StackUl = styled.ul`
  margin-left: 8%;
  display: flex;
  padding: 10px 0 20px 40px;
  li {
    margin-right: 10px;
    background-color: ${props => props.theme.orange};
    color: #ffffff;
    padding: 8px 10px;
    font-size: 18px;
    width: 7%;
    text-align: center;
    border-radius: 10px;
  }
`

const stackObject = ["react", "redux", "express", "js", "django", "python", "mongodb" ,"mysql"]

export const Stack = () => {
  const [ stacks, setStacks ] = useState(stackObject);
  return (
    <StackUl>
      {stacks.map((stack, idx) => (
        <li key={idx}>{stack}</li>
      ))}
    </StackUl>
)}