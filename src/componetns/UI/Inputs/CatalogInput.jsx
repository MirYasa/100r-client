import React, { useEffect, useState } from "react"
import { Col } from "react-bootstrap"
import TextArea from "../TextArea"
import { useSelector } from "react-redux"
import {
  CustomSelect,
  InputBody,
  InputContainer,
  InputName,
  RadioButton,
  RadioContainer,
} from "./Styles"

const CatalogInput = ({
  inputName,
  isRequired,
  type,
  radio,
  val = inputName === 'active' ? false : '',
  setData,
  isCreate,
  inputTitle,
}) => {
  const [input, setInput] = useState(val)
  const [selectVal, setSelectVal] = useState([])
  const { categories, manufacturers } = useSelector((state) => state.content)

  useEffect(() => {
    setInput(val)
  }, [val])

  useEffect(() => {
    setData(inputName, val)
    if (inputTitle === "Категория") {
      setSelectVal([{ id: null, name: "Выберите" }, ...categories])
    } else if (inputTitle === "Производитель") {
      setSelectVal([{ id: null, name: "Выберите" }, ...manufacturers])
    }
  }, [])

  return (
    <InputContainer>
      <Col lg={2}>
        <InputName>{`${inputTitle} ${isRequired ? "*" : ""}`}</InputName>
      </Col>
      <Col lg={10}>
        {type === "radio" ? (
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
        ) : type === "select" ? (
          <CustomSelect
            onChange={(e) => {
              setData(inputName, e.target.value)
            }}
            value={val}
          >
            {selectVal === undefined
              ? null
              : selectVal.map((item, index) => {
                  return (
                    <option value={item.id} key={index}>
                      {item.name}
                    </option>
                  )
                })}
          </CustomSelect>
        ) : type === "textarea" ? (
          <TextArea val={input} setData={setData} i inputName={inputName} />
        ) : (
          <InputBody
            type={type}
            checked={val}
            required={isRequired}
            value={input === null ? undefined : input}
            onChange={(e) => {
              setInput(
                type === "checkbox"
                  ? !val
                  : type === "number"
                  ? parseInt(e.target.value)
                  : e.target.value
              )
              setData(
                inputName,
                type === "checkbox"
                  ? !val
                  : type === "number"
                  ? parseInt(e.target.value)
                  : e.target.value
              )
            }}
          />
        )}
      </Col>
    </InputContainer>
  )
}
export default CatalogInput
