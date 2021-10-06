import React, {useState} from 'react'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'
import styled from 'styled-components'
import {Col, Row} from 'react-bootstrap'

const CustomSelect = styled(CreatableSelect)`
`
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
const SelectMultiply = ({options, inputTitle, val, inputName, setData}) => {
  const option = []
  const propsId = []
  options.map(item => {
    option.push({
      value: item.id,
      label: item.name
    })
  })
  const _onChange = (e) => {
    if (e.length !== 0) {
      e.map(item => {
        propsId.push(item.value)
        setData([inputName], propsId)
      })
    } else {
      setData([inputName], e)
    }
  }

  return (
    <InputContainer>
      <Col lg={2}>
        <InputName>{inputTitle}</InputName>
      </Col>
      <Col lg={10}>
        <CustomSelect
          isMulti
          isClearable={true}
          defaultValue={val.map(item => {
            return option[item.id - 1]
          })}
          options={option}
          onChange={_onChange}/>
      </Col>
    </InputContainer>
  )
}
export default SelectMultiply