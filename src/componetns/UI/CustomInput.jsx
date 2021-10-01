import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Col, Form, Row, ToggleButton, ToggleButtonGroup} from 'react-bootstrap'
import TextArea from '../UI/TextArea'

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
const CustomInput = ({inputName, isRequired, type, radio, val = '', setData, refs, inputTitle}) => {
  const [input, setInput] = useState(val)
  let Type = ''

  useEffect(() => {
    setData(inputName, val)
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
        <InputName>{`${inputTitle} ${isRequired ? '*' : ''}`}</InputName>
      </Col>
      <Col lg={10}>
        {
          Type === 'radio' ?
            <RadioContainer type="radio" name={radio.name} defaultValue={1}>
              {radio.values.map((item, index) => {
                return (
                  <RadioButton id={`tbg-radio-${index}`} value={item.value} key={index}>
                    {item.title}
                  </RadioButton>
                )
              })}
            </RadioContainer> :
            Type === 'select' ?
              <CustomSelect>
                {val.length === 0 ? null : val.map((item, index) => {
                  return (<option value={item.id} key={index}>{item.name}</option>)
                })}
              </CustomSelect> :
              Type === 'textarea' ?
                <TextArea
                  val={val}
                  setData={setData} i
                  inputName={inputName}
                  ref={refs}/> :
                <InputBody
                  type={Type}
                  ref={refs}
                  defaultChecked={val}
                  step={Type === 'float' ? '0.01' : null}
                  required={isRequired}
                  value={input === null ? undefined : input}
                  onChange={(e) => {
                    setInput(Type === 'checkbox' ? !e.target.defaultChecked : Type === 'number' ? parseInt(e.target.value) : e.target.value)
                    setData(inputName, Type === 'checkbox' ? !e.target.defaultChecked : Type === 'number' ? parseInt(e.target.value) : e.target.value)
                  }}/>}
      </Col>
    </InputContainer>
  )
}
export default CustomInput