import React, {useEffect, useState} from 'react'
import {Col} from 'react-bootstrap'
import TextArea from '../TextArea'
import {
  RadioContainer,
  InputName,
  InputBody,
  InputContainer,
  RadioButton,
  CustomSelect,
} from './Styles'

const CustomOrderInput = ({inputName, isRequired, type, radio, val = '', refs, setData, inputTitle, isCategory, step}) => {
  const [input, setInput] = useState(val)
  let Type = ''

  // console.log(inputName, input)

  // useEffect(() => {
  //   if (!isCategory) {
  //     setData(inputName, val)
  //   }
  // }, [])

  useEffect(() => {
    setInput(val)
  }, [val])

  switch (type) {
    case 'string':
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
    default:
      Type = ''
  }

  return (
    <InputContainer>
      <Col lg={2}>
        <InputName>{`${inputTitle} ${isRequired ? '*' : ''}`}</InputName>
      </Col>
      <Col lg={10}>
        {Type === 'radio' ? (
          <RadioContainer type="radio" name={radio.name} defaultValue={1}>
            {radio.values.map((item, index) => {
              return (
                <RadioButton
                  id={`tbg-radio-${index}`}
                  value={item.value}
                  key={index}
                >
                  {item.title}
                </RadioButton>
              )
            })}
          </RadioContainer>
        ) : Type === 'select' ? (
          <CustomSelect>
            {val.length === 0
              ? null
              : val.map((item, index) => {
                return (
                  <option value={item.id} key={index}>
                    {item.name}
                  </option>
                )
              })}
          </CustomSelect>
        ) : Type === 'textarea' ? (
          <TextArea
            val={val === null ? undefined : val}
            setData={setData}
            inputName={inputName}
            ref={refs}
          />
        ) : (
          <InputBody
            type={Type}
            ref={refs}
            defaultChecked={val}
            step={step}
            required={isRequired}
            value={input === null ? undefined : input}
            onChange={(e) => {
              setInput(
                Type === 'checkbox' ? !e.target.defaultChecked : e.target.value
              )
              setData(inputName, Type === 'checkbox' ? !e.target.defaultChecked : e.target.value)
            }}
          />
        )}
      </Col>
    </InputContainer>
  )
}
export default CustomOrderInput
