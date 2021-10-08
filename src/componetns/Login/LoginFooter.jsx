import React from 'react'
import {Link} from 'react-router-dom'
import {FooterContainer} from './LoginStyles'

const LoginFooter = ({title, buttonText, link}) => {
  return (
    <FooterContainer>
      <p>{title}</p>
      <Link to={link}>{buttonText}</Link>
    </FooterContainer>
  )
}
export default LoginFooter