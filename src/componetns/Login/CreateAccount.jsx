import React from 'react'
import LoginFooter from './LoginFooter'
import LoginTitle from './LoginTitle'
import {LinkContainer} from 'react-router-bootstrap'
import {Button, Form} from 'react-bootstrap'
import {FormContainer, ButtonsRow} from './Login'

const CreateAccount = () => {
    return (
      <FormContainer>
        <LoginTitle
          title={'Create Account'}/>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Control type="text" placeholder="Username"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password"/>
        </Form.Group>
        <ButtonsRow>
          <LinkContainer to={'/home'}>
            <Button variant="primary" type="submit">Create account</Button>
          </LinkContainer>
        </ButtonsRow>
        <LoginFooter
          title={'Already a member?'}
          buttonText={'Login'}
        link={'/'}/>
      </FormContainer>
    )
}
export default CreateAccount