import React, {useState} from 'react'
import {Col} from 'react-bootstrap'
import instance from '../../../settings/defaultAxios'
import {InputContainer, InputName, CustomSelect} from './Styles'

const OrderSelect = ({options, inputTitle, val, isAdd, newOptions, setProducts}) => {
  const option = []
  const values = []

  if (val !== undefined) {
    val.forEach((item) => {
      values.push({
        value: item.id,
        label: item.short_name,
      })
    })
  }
  options.forEach((item) => {
    option.push({
      value: item.id,
      label: item.short_name,
    })
  })

  // console.log(values)
  const _onChange = (e) => {
    if (e === null) {
      return
    } else {
      setProducts((prev) => [...prev, e.value])
      isAdd(true)
    }

  }

  return (
    <InputContainer>
      <Col lg={2}>
        <InputName>{inputTitle}</InputName>
      </Col>
      <Col lg={10}>
        <CustomSelect
          isClearable={true}
          options={option}
          onChange={_onChange}
          onInputChange={(e) => {
            if (e !== '') {
              instance.get(`admin_orders/create?search=${e}`).then((data) => {
                newOptions(data.data.products)
              })
            }
          }}
        />
      </Col>
    </InputContainer>
  )
}
export default OrderSelect
