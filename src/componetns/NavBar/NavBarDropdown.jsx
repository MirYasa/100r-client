import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {DropDown, DropDownItem, ExitIcon} from './NavBarStyles'

const NavBarDropdown = ({userName}) => {
  return (
    <DropDown
      title={userName}
      style={{color: '#8f969d'}}
    >
      <LinkContainer to={'/profile'}>
        <DropDownItem>Профиль</DropDownItem>
      </LinkContainer>
      <LinkContainer to={'/settings'}>
        <DropDownItem>Настройки</DropDownItem>
      </LinkContainer>
      <LinkContainer to={'/help'}>
        <DropDownItem>Помощь</DropDownItem>
      </LinkContainer>
      <LinkContainer to={'/'}>
        <DropDownItem>Выход <ExitIcon/>
        </DropDownItem>
      </LinkContainer>
    </DropDown>
  )
}
export default NavBarDropdown