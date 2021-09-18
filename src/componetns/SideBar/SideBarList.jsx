import React from 'react'
import {SidebarData} from './SideBarData'
import SubMenu from './SubMenu'

const SideBarList = () => {
  return (
      <nav>
          {SidebarData.map((item, index) => {
            return <SubMenu key={index} item={item}/>
          })}
      </nav>
  )
}
export default SideBarList