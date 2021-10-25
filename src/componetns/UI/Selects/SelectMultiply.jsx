import React from "react"
import { Col } from "react-bootstrap"
import { CustomSelect, InputName, InputContainer } from "./Styles"

const SelectMultiply = ({ options, inputTitle, val, inputName, setData }) => {
  const option = []
  const propsId = []
  options.map((item) => {
    option.push({
      value: item.id,
      label: item.name,
    })
  })
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
          defaultValue={val.map((item) => {
            return option[item.id - 1]
          })}
          options={option}
          onChange={_onChange}
        />
      </Col>
    </InputContainer>
  )
}
export default SelectMultiply
