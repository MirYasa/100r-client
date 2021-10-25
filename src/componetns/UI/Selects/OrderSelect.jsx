import React, { useState } from "react"
import { Col } from "react-bootstrap"
import instance from "../../../settings/defaultAxios"
import { InputContainer, InputName, CustomSelect } from "./Styles"

const OrderSelect = ({
  options,
  inputTitle,
  val,
  inputName,
  setData,
  newOptions,
}) => {
  const option = []
  const values = []
  const propsId = []

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
    if (e.length !== 0) {
      e.map((item) => {
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
          defaultValue={val === undefined ? null : values}
          options={option}
          onChange={_onChange}
          onInputChange={(e) => {
            instance.get(`admin_orders/create?search=${e}`).then((data) => {
              newOptions(data.data.products)
            })
          }}
        />
      </Col>
    </InputContainer>
  )
}
export default OrderSelect
