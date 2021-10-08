import React from 'react'
import SideBarUser from './SideBarUser'
import Photo from '../../Assets/userPhoto.jpg'
import SideBarList from './SideBarList'
import {SideBarCom, SideBarTitle} from './SideBarSryles'

const SideBar = () => {
  return (
    <SideBarCom lg={2}>
      <SideBarTitle>Admin panel</SideBarTitle>
      <SideBarUser
        userName={'John Doe'}
        userPhoto={Photo}/>
      <SideBarList/>
    </SideBarCom>
  )
}
export default SideBar