import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Col, Form, Row, ToggleButton, ToggleButtonGroup} from 'react-bootstrap'
import TextArea from '../TextArea'
import {useSelector} from 'react-redux'

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

const CatalogInput = ({inputName, isRequired, type, radio, val = '', setData, isCreate, inputTitle}) => {
  const [input, setInput] = useState(val)
  const [selectVal, setSelectVal] = useState([])
  const {categories, manufacturers} = useSelector(state => state.content)

  useEffect(() => {
    setInput(val)
  }, [val])

  useEffect(() => {
    setData(inputName, val)
    if (inputTitle === 'Категория') {
      setSelectVal([{id: null, name: 'Выберите'}, ...categories])
    } else if (inputTitle === 'Производитель') {
      setSelectVal([{id: null, name: 'Выберите'}, ...manufacturers])
    }
  }, [])

  return (
    <InputContainer>
      <Col lg={2}>
        <InputName>{`${inputTitle} ${isRequired ? '*' : ''}`}</InputName>
      </Col>
      <Col lg={10}>
        {
          type === 'radio' ?
            <RadioContainer type="radio" name={radio.name} defaultValue={1}>
              {radio.values.map((item, index) => {
                return (
                  <RadioButton id={`tbg-radio-${index}`} value={item.value} key={index}>
                    {item.title}
                  </RadioButton>
                )
              })}
            </RadioContainer> :
            type === 'select' ?
              <CustomSelect onChange={(e) => {
                setData(inputName, e.target.value)
              }}
                            value={val}>
                {selectVal === undefined ? null : selectVal.map((item, index) => {
                  return (<option value={item.id} key={index}>{item.name}</option>)
                })}
              </CustomSelect> :
              type === 'textarea' ?
                <TextArea
                  val={input}
                  setData={setData} i
                  inputName={inputName}/> :
                <InputBody
                  type={type}
                  defaultChecked={val}
                  required={isRequired}
                  value={input === null ? undefined : input}
                  onChange={(e) => {
                    setInput(type === 'checkbox' ? !e.target.defaultChecked : type === 'number' ? parseInt(e.target.value) : e.target.value)
                    setData(inputName, type === 'checkbox' ? !e.target.defaultChecked : type === 'number' ? parseInt(e.target.value) : e.target.value)
                  }}/>}
      </Col>
    </InputContainer>
  )
}
export default CatalogInput