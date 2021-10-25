import React, { useState } from "react"
import { Col } from "react-bootstrap"
import TextArea from "../TextArea"
import {
  CustomSelect,
  RadioButton,
  InputContainer,
  InputBody,
  InputName,
  RadioContainer,
} from "./Styles"

const ValidInput = ({
  inputName,
  type,
  val = "",
  setData,
  inputTitle,
  isCategory,
  errors,
  register,
}) => {
  let Type = ""
  const [input, setInput] = useState(val)

  switch (type) {
    case "string":
      Type = "text"
      break
    case "int":
      Type = "number"
      break
    case "bool":
      Type = "checkbox"
      break
    case "textarea":
      Type = "textarea"
      break
    case "float":
      Type = "number"
      break
    case "select":
      Type = "select"
      break
    default:
      Type = ""
  }

  return (
    <InputContainer>
      <Col lg={2}>
        <InputName>{inputTitle}</InputName>
      </Col>
      <Col lg={10}>
        <InputBody
          type={Type}
          defaultChecked={val}
          step={Type === "float" ? "0.01" : null}
          onChange={(e) => {
            setInput(e.target.value)
          }}
          {...register("name")}
        />
      </Col>
    </InputContainer>
  )
}
export default ValidInput
