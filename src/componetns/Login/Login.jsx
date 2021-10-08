import React from 'react'
import {Link} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import LoginTitle from './LoginTitle'
import LoginFooter from './LoginFooter'
import {ButtonsRow, FormContainer} from './LoginStyles'

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