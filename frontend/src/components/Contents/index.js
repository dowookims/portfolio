import React from 'react';
import { Route } from 'react-router-dom'
import styled from 'styled-components';
import Profile from '../Profile'
import Github from '../Github'
import Project from '../Project';
import StudyStory from '../StudyStory';


/*=======================================================
Show Specific contents depend on clicking NavLink.
On ContentDiv, can show specific info in here
Use Route.
=======================================================*/
const ContentDiv = styled.div`
  width: 100%;
  height: 100%;
  margin-top: -8px;
  background-color: #EDEEF4;
  padding: 15px;
`

const Content = () => (
  <ContentDiv>
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/github" component={Github} />
    <Route exact path="/project" component={Project} />
    <Route exact path="/studystory" component={StudyStory} />
    <Route exact path="/" component={Profile} />
  </ContentDiv>
)

export default Content