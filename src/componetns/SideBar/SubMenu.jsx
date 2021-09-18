import React, {useState} from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'


const SideBarLink = styled(NavLink)`
  display: flex;
   color: #f5f5f5; 
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
   &.active {
   border-right: 4px solid #1abb9c;
  }
  &:hover {
  color: #e1e9fc;
    cursor: pointer;
  }
`

const SideBarLabel = styled.span`
  margin-left: 16px;
`

const DropdownLink = styled(NavLink)`
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5; 
  border-right: 4px solid #1abb9c;
  font-size: 18px;
  &:hover {
  color: #e1e9fc;
    cursor: pointer;
  }
`

const SubMenu = ({item}) => {
  const [subnav, setSubnav] = useState(false)

  const showSubnav = () => setSubnav(!subnav)

  return (
    <>
      <SideBarLink exact to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SideBarLabel>{item.title}</SideBarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
              ? item.iconClosed
              : null}
        </div>
      </SideBarLink>
      {subnav &&
      item.subNav.map((item, index) => {
        return (
          <DropdownLink to={item.path} key={index}>
            {item.icon}
            <SideBarLabel>{item.title}</SideBarLabel>
          </DropdownLink>
        )
      })}
    </>
  )
}
export default SubMenu