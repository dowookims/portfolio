import React from 'react';
import styled, { keyframes } from 'styled-components';
import Item from './Item';

import Blog from '../../assets/netlify_til.png';
import Ssafy from '../../assets/ssaflix.png';

/*=======================================================
History of What i finished project
Make Big Card view to show Project image, description
Attribute: image, title, description, summary tech stacks
=======================================================*/

const fadeIn = keyframes`
  from {
    margin-left: 100%;
    width: 300%
  }

  to {
    margin-left: 2%;
    width: 96%;
  }
`

const ProjectDiv = styled.div`
  width: 96%;
  box-shadow: 5px 5px 10px #bebebe;
  margin-top: 3rem;
  margin-left: 2%;
  background-color: white;
  border-radius: 10px;
  font-family: 'Do Hyeon';
  padding: 200px 40px;
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 300px;
  grid-gap: 40px;
  animation: 0.7s ${fadeIn};
`

const ProjectGridDiv = styled.div`

`

const Project = () => (
  <ProjectDiv>
    <ProjectGridDiv>
      <Item img={Blog}/>
    </ProjectGridDiv>
    <ProjectGridDiv>
      <Item img={Ssafy}/>
    </ProjectGridDiv>
    
  </ProjectDiv>
)

export default Project;