import styled from "styled-components"
import { Form, Row, ToggleButton, ToggleButtonGroup } from "react-bootstrap"

//Inputs
export const InputContainer = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`
export const InputName = styled.label`
  color: #97a6b5;
  width: 100%;
  text-align: right;
`
export const InputBody = styled.input`
  border: #97a6b5 1px solid;
  padding: 6px 12px;
  outline: none;
  width: 100%;
  &:invalid {
    border: #ff0000 1px solid;
  }
`
export const RadioContainer = styled(ToggleButtonGroup)``
export const RadioButton = styled(ToggleButton)`
  outline: none;
  background-color: #6c757d;
  border: #6c757d 1px solid;
`
export const CustomSelect = styled(Form.Select)``

// Filter Input
export const FilterInputContainer = styled.div`
  label {
    padding-bottom: 3px;
  }
`
