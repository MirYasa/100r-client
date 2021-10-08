import React, {useState} from 'react'
import Select from 'react-select'
import {Col, Row} from 'react-bootstrap'
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

const MySelect = ({options, inputTitle, val, inputName, setData}) => {
  const option = [{value: 0, label: 'Выбрать'}]
  let count = 1
  let accept = false
  options.map(item => {
    option.push({
      value: item.id,
      label: item.name
    })
    count++
    if (count === option.length){
      accept = true
    }
  })

  // console.log(val)

  return (
    <InputContainer>
      <Col lg={2}>
        <InputName>{inputTitle}</InputName>
      </Col>
      <Col lg={10}>
        {accept ? <Select options={option} defaultValue={val === undefined ? option[0] : option[val -1]} onChange={(e) => {
          setData(inputName, e.value)
          console.log(e)
        }}/> : null}
      </Col>
    </InputContainer>
  )
}
export default MySelect