import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Form, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import LoginTitle from './LoginTitle'
import LoginFooter from './LoginFooter'

export const FormContainer = styled(Form)`
width: 400px;
color: #73879C;
position: fixed;
top: 40%;
left: 50%;
transform: translate(-50%, -50%);
a {
text-decoration: none;
&:hover{text-decoration: underline};
}
`
export const ButtonsRow = styled(Form.Group)`
display: flex;
justify-content: center;
align-items: center;
height: 70px;
border-bottom: 1px solid #D8D8D8;
a,button {
margin: 0 10px;
}
`

const Login = () => {
  return (
    <FormContainer>
      <LoginTitle
        title={'Login Form'}/>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Control type="text" placeholder="Username"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password"/>
      </Form.Group>
      <ButtonsRow>
        <LinkContainer to={'/home'}>
          <Button variant="primary" type="submit">Login</Button>
        </LinkContainer>
        <Link to={'/'}>Forgot yours password?</Link>
      </ButtonsRow>
      <LoginFooter
        title={'New to site?'}
        buttonText={'Create account'}
      link={'/createAccount'}/>
    </FormContainer>
  )
}
export default Login