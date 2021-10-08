import React from 'react'
import NavBarDropdown from './NavBarDropdown'
import Photo from '../../Assets/userPhoto.jpg'
import {IconComponent, NavBarRow, Notifications, RightBlock, UserPhoto} from './NavBarStyles'

const NavBar = ({userName}) => {
  return (
    <NavBarRow>
      <IconComponent/>
      <RightBlock>
        <Notifications/>
        <UserPhoto src={Photo}/>
        <NavBarDropdown
          userName={userName}/>
      </RightBlock>
    </NavBarRow>
  )
}
export default NavBar