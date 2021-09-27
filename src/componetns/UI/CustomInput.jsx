import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Col, Form, Row, ToggleButton, ToggleButtonGroup} from 'react-bootstrap'
import TextArea from '../UI/TextArea'

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
const CustomInput = ({inputName, isRequired, type, radio, val = '', setData}) => {
  const [inputVal, setInputVal] = useState(val)
  let Type = ''

  useEffect(() => {
    setData(inputName, val)
    console.log(val)
  }, [])



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
  }
  return (
    <InputContainer>
      <Col lg={2}>
        <InputName>{`${inputName} ${isRequired ? '*' : ''}`}</InputName>
      </Col>
      <Col lg={5}>
        {Type === 'radio' ? <RadioContainer type="radio" name={radio.name} defaultValue={1}>
          {radio.values.map((item, index) => {
            return (
              <RadioButton id={`tbg-radio-${index}`} value={item.value} key={index}>
                {item.title}
              </RadioButton>
            )
          })}
        </RadioContainer> : Type === 'select' ? <CustomSelect>
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CustomSelect> : Type === 'textarea' ? <TextArea/> :
          <InputBody type={Type} required={isRequired} value={inputVal} onChange={(e) => {
            setInputVal(e.target.value)
            setData(inputName, e.target.value)
          }}/>}
      </Col>
    </InputContainer>
  )
}
export default CustomInput