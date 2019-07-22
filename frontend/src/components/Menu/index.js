import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

const MenuDiv = styled.div`
  width: 20%;
  height: 100%;
  background-color: ${props => props.theme.menuColor};
  display: flex;
  flex-direction: column;
`

const MenuHeader = styled.header`
  padding: 15px;
`

const MenuTitle = styled.div`
  margin-top: 20px;
  text-align: center;
  font-family: 'Black Han Sans';
  letter-spacing: 1.6px;
  padding-bottom: 20px;
  a {
    font-size: 30px;
    font-weight: 700;
    color: #eeeeee;
    letter-spacing: 3px;
  }
`

const MenuBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`

const MenuLink = styled(NavLink)`
  width: 114%;
  height: 100%;
  font-weight: 700;
  color: inherit;
  text-transform: uppercase;
  border-radius: 5px 0 0 5px;
  color: white;
  padding: 15px;
  text-align: right;
  letter-spacing: 1.4px;
	transition: height 2s cubic-bezier(0.17, 0.04, 0.03, 0.94);
  background-color: ${props => props.theme.menuColor};
  &:hover {
    color: ${props => props.theme.menuColor},
    background-color: white;
  }
`

const activeCSS = {
  color: "#131957", 
  backgroundColor: "white"
}

const pathData = ['profile', 'github', 'project', 'study story']

const Menu = () => {
  return (<MenuDiv>
    <MenuHeader>
      <MenuTitle><Link to="/">DOWOO</Link></MenuTitle>
        <MenuBody>
          { pathData.map((v,idx) => (
              <MenuLink key={idx} to={'/'+v} activeStyle={activeCSS} exact>
                <span>{v}</span>
              </MenuLink>
            ))
          }
          <MenuLink to="/" target="_blank" onClick={(event) => {event.preventDefault(); window.open("https://dowookim.kim");}} exact>
            <span>TIL</span>
          </MenuLink>
          
        </MenuBody>
    </MenuHeader>
  </MenuDiv>
  )
}


export default Menu