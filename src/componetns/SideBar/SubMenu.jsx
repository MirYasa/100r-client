import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import {useSelector} from 'react-redux'
import {DropdownLink, SideBarLabel, SideBarLink} from './SideBarSryles'

const SubMenu = ({item}) => {
  const [subnav, setSubnav] = useState(false)
  const showSubnav = () => setSubnav(!subnav)
  const {tabs} = useSelector(state => state)

  return (
    <>
      <SideBarLink onClick={item.subNav && showSubnav}>
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
      {subnav && item.subNav && item.title === 'Бухгалтерия' ?
        tabs.tabs.map((item, index) => {
          return (
            <DropdownLink to={`/admin/tables/${item}`} key={index}>
              <FaIcons.FaTable/>
              <SideBarLabel>{item}</SideBarLabel>
            </DropdownLink>
          )
        })
        : subnav ? item.subArr?.map((item, index) => {
          return (
            <DropdownLink to={`${item.path}`} key={index}>
              {item.icon}
              <SideBarLabel>{item.title}</SideBarLabel>
            </DropdownLink>
          )
        }) : null}
    </>
  )
}
export default SubMenu