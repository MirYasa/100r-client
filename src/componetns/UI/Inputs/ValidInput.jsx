import React, {useState} from 'react'
import {Col, Form, Row, ToggleButton, ToggleButtonGroup} from 'react-bootstrap'
import TextArea from '../TextArea'
import styled from 'styled-components'

const InputContainer = styled(Row)`

display: flex;
align-items: center;
justify-content: center;
margin: 10px 0;
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
&:invalid {border: #ff0000 1px solid}
`
const RadioContainer = styled(ToggleButtonGroup)`

`
const RadioButton = styled(ToggleButton)`
outline: none;
background-color: #6c757d;
border: #6c757d 1px solid;
`
const CustomSelect = styled(Form.Select)`

`

const ValidInput = ({inputName, type, val = '', setData, inputTitle, isCategory, errors, register}) => {
  let Type = ''
  const [input, setInput] = useState(val)

  switch (type) {
    case'string':
      Type = 'text'
      break
    case 'int':
      Type = 'number'
      break
    case 'bool':
      Type = 'checkbox'
      break
    case 'textarea':
      Type = 'textarea'
      break
    case 'float':
      Type = 'number'
      break
    case 'select':
      Type = 'select'
      break
  }

  return (
    <InputContainer>
      <Col lg={2}>
        <InputName>{inputTitle}</InputName>
      </Col>
      <Col lg={10}>
        <InputBody
          type={Type}
          defaultChecked={val}
          step={Type === 'float' ? '0.01' : null}
          onChange={(e) => {
            setInput(e.target.value)
          }} {...register('name')}/>
      </Col>
    </InputContainer>
  )
}
export default ValidInput