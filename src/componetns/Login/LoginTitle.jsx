import React from 'react'
import {Form} from 'react-bootstrap'
import styled from  'styled-components'

const Title = styled.h1`

letter-spacing: -0.05em;
margin: 10px 0 30px;
font-size: 25px;
text-align: center;
text-shadow: 0 1px 0 #fff;

&:before, :after {
content: "";
height: 1px;
position: absolute;
top: 27px;
width: 20%;
}
&:before {
    background: linear-gradient(to left, #7e7e7e 0%, #fff 100%);
    left: 0;
}
&:after{
background: linear-gradient(to right, #7e7e7e 0%, #fff 100%);
right: 0;
}
`

const LoginTitle = ({title}) => {
    return (
      <Form.Text>
        <Title>{title}</Title>
      </Form.Text>
    )
}
export default LoginTitle