import React, {useState} from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import {useSelector} from 'react-redux'


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
  const {tabs} = useSelector(state => state)

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
      item.subNav && item.title === 'Таблицы' ?
          tabs.tabs.map((item, index) => {
            return (
              <DropdownLink to={`/tables/${item}`} key={index}>
                <FaIcons.FaTable/>
                <SideBarLabel>{item}</SideBarLabel>
              </DropdownLink>
            )
          }) : null}
    </>
  )
}


export default SubMenu