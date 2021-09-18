import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import styled from 'styled-components'
import {NavDropdown} from 'react-bootstrap'
import * as Icon from 'react-icons/im'

const DropDown = styled(NavDropdown)`
padding-left: 10px;
a {
color: #73879c !important;
padding: 0;
&:hover {
color: #73879c;
}
}
`
const DropDownItem = styled(NavDropdown.Item)`
width: 180px;
padding: 12px 20px !important;
color: #282c34 !important;
`
const ExitIcon = styled(Icon.ImExit)`

`

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
      <LinkContainer to={'/login'}>
        <DropDownItem>Выход <ExitIcon/>
        </DropDownItem>
      </LinkContainer>
    </DropDown>
  )
}
export default NavBarDropdown