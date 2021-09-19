import React from 'react'
import styled from 'styled-components'
import {Col, Row} from 'react-bootstrap'

const InputContainer = styled(Row)`
height: 38px;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 10px;
`
const InputName = styled.label`
color: #97a6b5;
width: 100%;
text-align: right;
`
const InputBody = styled.input`
border: #97a6b5 1px solid;
padding: 6px 12px;
outline: none;
width: 100%;
`

const CustomInput = ({inputName, isRequired}) => {
  return (
    <InputContainer>
      <Col lg={2}>
        <InputName>{`${inputName} ${isRequired ? '*' : ''}`}</InputName>
      </Col>
      <Col lg={5}>
        <InputBody/>
      </Col>
    </InputContainer>
  )
}
export default CustomInput