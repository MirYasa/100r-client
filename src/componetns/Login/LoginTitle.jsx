import React from 'react'
import {Form} from 'react-bootstrap'
import {Title} from './LoginStyles'

const LoginTitle = ({title}) => {
  return (
    <Form.Text>
      <Title>{title}</Title>
    </Form.Text>
  )
}
export default LoginTitle