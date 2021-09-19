import React from 'react'
import styled from 'styled-components'
import {Col, Row, ToggleButton, ToggleButtonGroup} from 'react-bootstrap'

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
const RadioContainer = styled(ToggleButtonGroup)`

`
const RadioButton = styled(ToggleButton)`
outline: none;
background-color: #6c757d;
border: #6c757d 1px solid;
`

const CustomInput = ({inputName, isRequired, type, radio}) => {
  return (
    <InputContainer>
      <Col lg={2}>
        <InputName>{`${inputName} ${isRequired ? '*' : ''}`}</InputName>
      </Col>
      <Col lg={5}>
        {type === 'radio' ? <RadioContainer type="radio" name={radio.name} defaultValue={1}>
          {radio.values.map((item, index) => {
            return (
              <RadioButton id={`tbg-radio-${index}`} value={item.value} key={index}>
                {item.title}
              </RadioButton>
            )
          })}
        </RadioContainer> : <InputBody type={type}/>}
      </Col>
    </InputContainer>
  )
}
export default CustomInput