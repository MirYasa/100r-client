import React from 'react'
import * as IconTi from 'react-icons/ti'
import * as IconHi from 'react-icons/hi'
import styled from 'styled-components'
import NavBarDropdown from './NavBarDropdown'
import Photo from '../../Assets/userPhoto.jpg'

const NavBarRow = styled.div`
background-color: #ededed;
width: 100%;
height: 55px;
display: flex;
align-items: center;
justify-content: space-between;
`
const IconComponent = styled(IconTi.TiThMenu)`
font-size: 30px; 
color: #73879c;
margin-left: 15px;
`
const UserPhoto = styled.img`
width: 29px;
height: 29px;
border-radius: 50%;
`
const Notifications = styled(IconHi.HiOutlineMail)`
 color: #73879c;
 font-size: 17px;
 margin-right: 17px;
`
const RightBlock = styled.div`
display: flex;
align-items: center;
margin-right: 15px;
`

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