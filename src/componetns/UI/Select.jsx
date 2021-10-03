import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Col, Form, Row} from 'react-bootstrap'
import {useSelector} from 'react-redux'

const CustomSelect = styled(Form.Select)`

`
const InputName = styled.label`
color: #97a6b5;
width: 100%;
text-align: right;
`
const InputContainer = styled(Row)`
display: flex;
align-items: center;
justify-content: center;
margin: 10px 0;
`
const Select = ({val, inputTitle, updateData, inputName}) => {
  const [selectVal, setSelectVal] = useState()
  const {categories, manufacturers} = useSelector(state => state.content)

  useEffect(() => {
    if (inputTitle === 'Категория') {
      setSelectVal([{id: null, name: 'Выберите'}, ...categories])
    } else if (inputTitle === 'Производитель') {
      setSelectVal([{id: null, name: 'Выберите'}, ...manufacturers])
    }
  }, [])

  return (
    <InputContainer>
      <Col lg={2}>
        <InputName>{`${inputTitle}`}</InputName>
      </Col>
      <Col lg={10}>
      <CustomSelect
        onChange={(e) => {
          updateData(inputName, e.target.value)
        }}
        value={val}>
        {selectVal === undefined ? null : selectVal.map((item, index) => {
          return (<option value={item.id} key={index}>{item.name}</option>)
        })}
      </CustomSelect>
      </Col>
    </InputContainer>
  )
}
export default Select