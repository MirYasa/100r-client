import styled from 'styled-components'
import * as IconTi from 'react-icons/ti'
import * as IconHi from 'react-icons/hi'
import {NavDropdown} from 'react-bootstrap'
import * as Icon from 'react-icons/im'

export const NavBarRow = styled.div`
background-color: #ededed;
width: 100%;
height: 55px;
display: flex;
align-items: center;
justify-content: space-between;
`
export const IconComponent = styled(IconTi.TiThMenu)`
font-size: 30px; 
color: #73879c;
margin-left: 15px;
`
export const UserPhoto = styled.img`
width: 29px;
height: 29px;
border-radius: 50%;
`
export const Notifications = styled(IconHi.HiOutlineMail)`
 color: #73879c;
 font-size: 17px;
 margin-right: 17px;
`
export const RightBlock = styled.div`
display: flex;
align-items: center;
margin-right: 15px;
`
export const DropDown = styled(NavDropdown)`
padding-left: 10px;
a {
color: #73879c !important;
padding: 0;
&:hover {
color: #73879c;
}
}
`
export const DropDownItem = styled(NavDropdown.Item)`
width: 180px;
padding: 12px 20px !important;
color: #282c34 !important;
`
export const ExitIcon = styled(Icon.ImExit)`

`