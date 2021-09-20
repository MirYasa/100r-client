import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Container = styled.div`
display: flex;
margin: 10px 0;
justify-content: center;
  
  p,a {
  margin: 0 10px;
  }
`

const LoginFooter = ({title, buttonText, link}) => {
    return (
      <Container>
        <p>{title}</p>
        <Link to={link}>{buttonText}</Link>
      </Container>
    )
}
export default LoginFooter