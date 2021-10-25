import styled from "styled-components"
import { Row } from "react-bootstrap"
import CreatableSelect from "react-select/creatable"

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

export const CustomSelect = styled(CreatableSelect)``
