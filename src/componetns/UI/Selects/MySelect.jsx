import React, { useState } from "react"
import Select from "react-select"
import { Col } from "react-bootstrap"
import { InputName, InputContainer } from "./Styles"

const MySelect = ({ options, inputTitle, val, inputName, setData }) => {
  const option = [{ value: 0, label: "Выбрать" }]
  let count = 1
  let accept = false
  options.map((item) => {
    option.push({
      value: item.id,
      label: item.name,
    })
    count++
    if (count === option.length) {
      accept = true
    }
  })

  return (
    <InputContainer>
      <Col lg={2}>
        <InputName>{inputTitle}</InputName>
      </Col>
      <Col lg={10}>
        {accept ? (
          <Select
            options={option}
            defaultValue={val === undefined ? option[0] : option[val]}
            onChange={(e) => {
              setData(inputName, e.value)
              console.log(e)
            }}
          />
        ) : null}
      </Col>
    </InputContainer>
  )
}
export default MySelect
